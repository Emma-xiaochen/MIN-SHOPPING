<template>
  <div class="app-container">
    <el-button
      style="margin-bottom: 20px;"
      type="primary"
      @click="handleAdd()">新增用户</el-button>
    <el-table v-loading="listLoading" :data="list" size="mini" border fit highlight-current-row style="width: 100%">
      <el-table-column  width="80px" align="center" label="ID">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="账号">
        <template slot-scope="scope">
          <span>{{ scope.row.loginName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="昵称">
        <template slot-scope="scope">
          <span>{{ scope.row.nickName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="收获地址">
        <template slot-scope="scope">
          <span>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="scope">
          <span>{{ scope.row.remark }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180px" align="center">
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

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="page.currentPage"
      :limit.sync="page.pageSize"
      @pagination="getData"
    />

    <el-dialog title="用户弹框" :visible.sync="dialogFormVisible" @closed="closed">
      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item label="账号" :label-width="formLabelWidth" prop="loginName">
          <el-input v-model="form.loginName" placeholder="账号" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickName">
          <el-input v-model="form.nickName" placeholder="昵称" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="form.password" placeholder="密码" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收货地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" placeholder="收货地址" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth" prop="remark">
          <el-input v-model="form.remark" placeholder="备注" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { fetchList, deleteUser, createUser, editUser } from '@/api/user'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'UserList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {},
      rules: {
        loginName: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        nickName: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
      list: null,
      listLoading: true,
      listQuery: {},
      page: {
        currentPage: 1,
        pageSize: 10,
      },
        total: 0
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    closed () {
      this.form = {};
      this.$refs.ruleForm.resetFields();
    },
    getData() {
      this.listLoading = true
      const params = {
        ...this.listQuery,
        ...this.page
      }
      fetchList(params).then(response => {
        this.list = response.data.data
        this.total = response.data.total
      }).finally(() => {
        this.listLoading = false
      })
    },
    handleSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.form.id) { // 编辑
            editUser(this.form).then(res => {
              this.$notify({
                title: '成功',
                message: '编辑用户成功',
                type: 'success',
                duration: 2000
              })
              this.getData()
              this.dialogFormVisible = false
            })
          } else { // 新增
            createUser(this.form).then(res => {
              this.$notify({
                title: '成功',
                message: '新增用户成功',
                type: 'success',
                duration: 2000
              })
              this.getData()
              this.dialogFormVisible = false
            })
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleAdd () {
      this.dialogFormVisible = true
    },
    handleEdit (index, row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogFormVisible = true
    },
    handleDelete (index, row) {
      this.$confirm(`确定删除用户昵称为【${row.nickName}】？`)
        .then(_ => {
          deleteUser({ id: row.id }).then((res) => {
            this.$notify({
              title: '成功',
              message: res.message,
              type: 'success',
              duration: 1000
            })
            this.getData()
          })
        })
        .catch(_ => {});
      console.log('index, row:', index, row)
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
