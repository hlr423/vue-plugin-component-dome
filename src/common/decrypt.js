const crypto = require('crypto-js');
const axios = require('axios/index').default;
const axiosRetry = require('axios-retry/index');
const qs = require('qs');
const fs = require('fs');
const url = require('url');
const path = require('path');
const cliProgress = require('cli-progress');
const {
    spawnSync
} = require('child_process');

const deviceKey = "DaQ11nCUEuRMPsX7";
const deviceToken = 'ebook6507B66666181FBE954AEBA62CF6F1E3';

axiosRetry(axios, {
    retries: 3
})

const bookid = process.argv.slice(2);
if (!bookid || isNaN(bookid)) {
    console.error('错误的书籍id');
    return
}
downloadBook(parseInt(bookid))


async function authorize(bookid) {
    console.log("获取书籍信息...")
    let res = await axios.get(`https://bridge.51zhy.cn/transfer/Content/Detail?AccessToken=null&DeviceToken=ebook6507B66666181FBE954AEBA62CF6F1E3&ApiName=%2FContent%2FDetail&BridgePlatformName=phei_yd_web&random=0.5083107994162286&AppId=3&id=${bookid}`)
    if (res.data.Code != 200) {
        throw new Error(res.data.Description)
    }
    const bookDetail = res.data.Data
    console.log("书籍ID：", bookDetail.Id)
    console.log("书籍标题：", bookDetail.Title)

    console.log('获取书籍文件信息...')
    res = await axios({
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
            IsOnline: !0,
            AccessToken: null,
            DeviceToken: deviceToken,
            ApiName: "content/authorize",
            BridgePlatformName: 'phei_yd_web',
            random: Math.random(),
            AppId: 3,
            id: bookid,
            authorizeToken: bookDetail.ExtendData.AuthorizeToken
        }),
        url: 'https://bridge.51zhy.cn/transfer//content/authorize'
    })

    if (res.data.Code != 200) {
        throw new Error(res.data.Description)
    }
    const bookFileInfo = res.data.Data;
    bookFileInfo.SplitFileUrls = [bookFileInfo.Url, ...bookFileInfo.SplitFileUrls]
    console.info('文件个数：', bookFileInfo.SplitFileUrls.length)

    res.data.Data.bookTitle = bookDetail.Title

    return res.data.Data;
}

async function downloadBook(bookid) {
    const bookFileInfo = await authorize(bookid)
    const files = [];

    console.info('正在下载文件...')
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    progressBar.start(bookFileInfo.SplitFileUrls.length, 0)
    for (let i = 0; i < bookFileInfo.SplitFileUrls.length; i++) {
        let fileUrl = bookFileInfo.SplitFileUrls[i];
        const fileName = path.basename(url.parse(fileUrl).pathname)
        const filePath = path.join(__dirname, bookFileInfo.bookTitle)
        const fileFullPath = path.join(filePath, fileName)

        if (!fs.existsSync(filePath)) fs.mkdirSync(filePath)
        files.push(fileFullPath)

        if (!fs.existsSync(fileFullPath)) {
            const {
                data
            } = await axios.get(fileUrl, {
                params: {},
                responseType: "arraybuffer"
            })

            const fileChunk = processPdfData(data, bookFileInfo.Key)

            fs.writeFileSync(fileFullPath, Buffer.from(fileChunk, 'binary'))
        }
        progressBar.update(i);
    }

    progressBar.stop();
    console.info('合并PDF...')
    const result = spawnSync('pdftk', [...files, 'cat', 'output', path.join(__dirname, bookFileInfo.bookTitle, bookFileInfo.bookTitle + '.pdf')])
    if (result.stderr.toString()) {
        console.error('合并失败', result.stderr.toString() )
    }else {
        console.info('下载成功!!!')
    }
}

function unit8ToBase64(data) {
    var o, a, s, c, l;
    for (o = 32768, a = 0, s = data.length, c = ""; a < s;) {
        l = data.subarray(a, Math.min(a + o, s))
        c += String.fromCharCode.apply(null, l)
        a += o;
    }


    return Buffer.from(c, 'binary').toString('base64')
}

function wordArrayToU8(data) {
    var o, a, s, c, l;
    for (o = data.words, a = data.sigBytes, s = new Uint8Array(a), c = 0; c < a; c++) {
        l = o[c >>> 2] >>> 24 - c % 4 * 8 & 255
        s[c] = l;
    }
    return s
}

function makeKey(deviceKey, key) {
    var n = crypto.enc.Utf8.parse(deviceKey)
    return crypto.AES.decrypt(key, n, {
        mode: crypto.mode.ECB,
        padding: crypto.pad.Pkcs7,
    })
}

function processPdfData(pdfArrayBuffer, key) {
    var a = new Uint8Array(pdfArrayBuffer)
    var s = unit8ToBase64(a)
    var c = crypto.AES.decrypt(s, makeKey(deviceKey, key), {
        mode: crypto.mode.ECB,
        padding: crypto.pad.Pkcs7,
    })
    return wordArrayToU8(c)
}
