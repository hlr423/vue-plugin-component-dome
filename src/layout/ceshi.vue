<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        <el-table :data="gridData">
          <el-table-column property="date" label="日期" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit1(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogTableVisible: false,
        gridData: [
          {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
          {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
          {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
          {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
        ],
        gridData1: {
          date: '2016-05-02',
          name: '11',
          address: '11 1518 弄'
        },

        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        this.dialogTableVisible=row;
        console.log(index, row);
      },
      handleEdit1(index, row) {
        let v=this;
        console.log(index, row)

        this.$set(v.gridData,index,v.gridData1)
        console.log( this.gridData)
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped>

</style>
