<template>
    <div>
<!--      <textarea id="source" style="width: 100%;letter-spacing:1px" >{{value2}}</textarea>-->
<!--      <VueCodeMirror v-model="value2" :options="editorOption"></VueCodeMirror>-->
      <quill v-model="content" output="html"></quill>
    </div>
</template>

<script>
import yaml from 'js-yaml'
import VueCodeMirror from 'vue-codemirror'
// require styles
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
    export default {
        name: "yamlDome",
      data(){
          return{
            content: {
              ops: [],
            },
            // config: {
            //   readOnly: false,
            //   placeholder: 'Compose an epic...',
            // },
            value2: "spring: \n  datasdource: \n    url: \"jdbc:mysql://10.25.150.236:3306/upgrade_${spring.profiles.active}?autoReconnect=true&useSSL=false&useUnicode=true&characterEncoding=UTF-8\"\n    username: mgm3aaabbbtest1\n    password: mG30!DbpASS123666+++\n  rabbitmq: \n    addresses: \"10.25.149.219:5672,10.25.149.220:56aaayyrrrtestuid----\"\nk8sClient: \n  caCertData: MIICyDCCAbCgAwIBAgIBADANBgkqhkiG9w0BAQsFADAVMRMwEQYDVQQDEwprdWJlcm5ldGVzMB4XDTE4MDUxNDA5NTAzNFoXDTI4MDUxMTA5NTAzNFowFTETMBEGA1UEAxMKa3ViZXJuZXRlczCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANmgL+ucUoYn/bdboHRpk+VF3dnVBb4qxRXuqMK5++kGkghrBa6rDrVChw979c28uB0fyQCjsRevFXMImUUKOeBCYoT+eid96JUtbafajveHfjUtJulkjV2pL6tnw00Xrd/3n30Ey8hZ6ECbTNNMnShzy9d+2ZqSuCj0VbBxNTKJ2Qah9ry1kukhV7hBJJ/zUQtgUNL+xWfEqYI3aqhz6sWWLEJEy6yhU0pdkIaWxxjUwzG9v0YM66WBPlbPqf4xDKyf7QjPGTRhwp9j11wjbYy0BWjhRpPgduPGon6PLn/dTu+Un02Q8hGpvfHA8Ybdt5s2Me9m6g8sh6hoxyNc6OkCAwEAAaMjMCEwDgYDVR0PAQH/BAQDAgKkMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBAFCENUFe5onImSyWI54w7xTkGy74BD9Av9LOxIup4EPO58W8iNhmIlboyUfLYPZlP8RFKitZFaVR6TPlHp68j8tpcNnDVyCZGkBp4yNBrERp0N4eNVejbhoUoT2Ox21WFzsFDO1lsMaqdg738litxmuWr6NV+E2CZZlXhbuD0K5+T3G5LJ2kNiaxxoRHu0I3AZnM3gca4y2ZTqd85C0vdSbh8mo66pbmpf0yw4CHV2IXN2/mcEqwPbiSPgk5FwFfUUkiugM+zViqPvZQrYKCgKbpX5JjsfFynq1RtPyOsA5SNKsIxKCVC4sAVLqWSIQuoO2y48AZQoWQPxVwduI8Gc4=\n  masterUrl: \"https://10.25.245.121:18022\"\n  oauthToken: eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLTk0ZzR2Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiJhMTQxZDc2Ny01NzZjLTExZTgtYWFkZi0wMDUwNTY4ODZlOTAiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06YWRtaW4tdXNlciJ9.BqXp8aF3AToWXQGdqmKyahmA5dkprMut4p9uH5SKskM4Ap75OtmummjOwmxy-Edh8juHjhr58KdDzFLwOuA84eS1xYiIJ7WEStbMY2nC13ze8_3_s8Uz1WCSZWD31n0mPzj2oAkNG4rFX6tiQGteEOHhS-gO0GGfRBfPpW80k4J9djdn_JJ1VlZmuVzoVlfuHIHTRfUdC34OU9HzW48VqlG0YtswC8-33cD-nGHV1c3RgDOSB2UfUqkbuQPrtUhalKj6ljCPdkZtTzb0khsM499SMCBBigauwUtFt0Hd_TBKghDkBVR5xZCAVoFZVv1l-cT9cXDTiDiSDKVTLm65Jg\nupgradeAdmin: \n  git: \n    localGitUrl: \"D:\\\\\\\\groovy/mgcard-music/\"\n    remoteGitUrl: \"http://zhangruicheng@218.205.244.254:8080/git/scm/ser/deploy.git\"\n    gitUserName: zhangruicheng\n    gitPasswd: zhangruicheng\n    branchs: \"release-prod,release-stable,release-test,release-preprod\"\nms_admin_address: \"http://10.25.150.157:80856560\"\nsystem_index: \"http://218.200.160.115:18080/ms-admin/sso/login\"\ngit: \n  urlPrefix: \"ssh://git@10.25.150.188:7993/ser/\"\n  privateKey: |\n    -----BEGIN RSA PRIVATE KEY-----\n    MIIEowIBAAKCAQEAtiOala19AJ15RljKyuq1evZQCsKInvGQPbE/X1GZyamcSTpx\n    0lld3fSYe0oYeKSJJgayBiu31hykiIz96sB+0IZwXyF7fSe2vpNMXU1Tc3d6I5qj\n    tvejIYStlBK3tJur5c7yAU1TX1B0CGwMCwO64T+V9wvakz364zbO8GJi87vUyePQ\n    BTpW6gxR2tNuFg+YyPYc271Hn4v9BQ8AyKgDFMlPjsFTGayYNXBBDL2kFRTBebJ5\n    E9VJuz9766WlkIykgtUmky0nlW8m9U2y9ASL5K6UXqE9U+JGlLwEGuHfbp8/QBoB\n    2G3XcB4LMvwAREj8SN7qFH09v3zv+9QaLe6dswIDAQABAoIBADcbBoYKeytYeXyj\n    GJfT8xxEsWrP+G2+QBmqKrY4BgNRYYt2N0Gg8BlbC1chz82QWj47AFmFmJUbDVyS\n    66++lZ+ZTR47DxWKkmuOPShtYLYqi7WB785Hlf9qGOoXz6TBBHz+45EpR/QqbzCt\n    H+elNUE477JSz8qEkgd0aZ+o5K9Avim7AhdQ6IP1WSFjLApYckYYl+GdSBhmEm9A\n    Bm5dz2KoCHt6IPhajNpI5ZMdl466LKn+nhqstfaTgTfQ0Ner0rkmOvMb7/sJUzfI\n    IYgD/Tl+Ubsl4BQNFBs9MMyM21+llfOTwkkh8l2Ln5b7+/eSpJ5UboI1PNpefQ7j\n    GteUBiECgYEA3Qgav2PQ93PfK+xqGJ9tHgIaRa06zRpd9QciqQtb7mcQv+HaQsOf\n    liXyFIDjT4SYFVrNSeGvsbUaY4mxs2qa53qeK1rq0UtZGJilpkMKDFPQcoyJpnAT\n    KINwzGXaZuI/5WFI5b7fAs4sn3M1Q8BAif6tAAZVB9vR0I1rM4PeKt8CgYEA0vRU\n    dG26j0Xdcnv20gJt2KINFWJlo5t2S+MJWFQLFv8enwUg83yVYngnJ8t9O6r1RO76\n    kFJjWhykjj5KzYa3gSn6TFXdl1KXMGGSL+klz80+3yEPpW28USO2yrctRn+n1rsb\n    0JWn4m2aE3SjvDYr7GpoSOQ5rag8CytFMU6d+60CgYBYt4UM5wKcIB0moyjeozcI\n    AW4MI4DjjD7EN834rf+DTEkTy5Jwk9Z9TNPC2QzkAOOORrj5e6WqnXdvFniF/Dca\n    zEOqQT7ZLPYhAjwS5PumgQm8wJ4LeRanf0KKOCOWgh+FcSvyU09t79VHVtW9UPBW\n    sys7RE9i7R9lJy4tKjPFXwKBgFgqITnfuj6y1lBImuk+dqY5Y/px+0Sbbp9crcUq\n    qs/bo/KV9CWPBef3i3XIR/iuBH/g2PuEU12P5v5D7oNjMEJdRuysXkYmEGX6AVzg\n    thrZDtO2P5HGARRwNq8WS2fRZlYKMR/FzDqH0AMdlmjMwyK1fgwoxipby2xnky1+\n    S+ypAoGBAMFhEMIN2kkQ/hVsSYs5VpBCNVqIPXXeAl8eOaSXXAtE+96vu9pc3IgQ\n    bcvOO0++ki9dnaL0keFuPpLpiNo7daNTq31+kua5x5NfF0CAGsPnD/xpY4TeCrV/\n    5/1hXztRoztzlmQGno2ysM7bEarxP/1z9//4pHLuLJ0UeNejyk8D\n    -----END RSA PRIVATE KEY-----\n    \nupload: \n  pic: \n    rootDir: /data/pic/\n    rootUrl: \"http://d.musicapp.migu.cn/prod/upgrade-admin/pic/\"\nsso: \n  filter: \n    pattern: \"*/v1.0/*\"\njenkins: \n  url: \"http://10.25.150.188:8081\"\n  uname: hezhenghai\n  pwd: hezhenghai24\ndeploy: \n  profiles: \n    - preprod\n    - prod\nmap_key: map_value5555666\nlist_example: \n  - \"http://test12\"\n  - \"http://test2\"\nkey1: 100M\n",
            data:'',
            // code: defaults.markdown,
            editorOption: {
              tabSize: 4,
              styleActiveLine: true,
              lineNumbers: true,
              lineWrapping: true,
              line: true,
              mode: 'markdown',
              theme: 'material'
            },
          }
      },
      components:{
        VueCodeMirror
      },
      // created() {
      //     let v=this;
      //   let result =yaml.load(v.value2);
      //   this.data=result
      //   console.log(JSON.stringify(result, null, 2));
      //   // console.log(result.fn(1,3));
      //   // console.log(result.reg.test("test"));
      //   // console.log(result.undef);
      // }
    }
</script>

<style scoped>

</style>
