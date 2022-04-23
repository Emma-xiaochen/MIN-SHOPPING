<template>
  <div class="container">
    <el-button
      size="small"
      type="primary"
      class="add-btn"
      @click="handleCreateOne">新增</el-button>
    <el-table
      :data="menuList"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      size="mini"
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        prop="title"
        label="索引">
      </el-table-column>
      <el-table-column
        prop="articleTitle"
        label="文章">
      </el-table-column>
      <el-table-column
        prop="hasContent"
        align="center"
        label="是否点击跳转"
        width="100">
        <template slot-scope="{ row }">
          <el-switch
            v-model="row.hasContent"
            @change="handleHasContent(row)"
            active-color="#13ce66"
            inactive-color="#ccc">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注">
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleCreate(scope.$index, scope.row)">新增</el-button>
          <el-button
            size="mini"
            style="margin-right:10px;"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            
          <el-popconfirm
            :title="dialogTitle"
            @confirm="delData"
          >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)" slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="isDialogVisible"
      @closed="closeDialog"
      width="500px"
      center>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="索引" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="文章">
          <el-autocomplete
            v-model="form.articleTitle"
            :fetch-suggestions="querySearchAsync"
            style="width:100%;"
            placeholder="请输入文章"
            @select="handleSelect"
            value-key="articleTitle"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="是否点击跳转">
          <el-switch v-model="form.hasContent"></el-switch>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="isDialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
  import { fetchMenuList, fetchMenu, createMenu, editMenu, deleteMenu } from '@/api/menu'
  import { fetchList } from '@/api/article'

  const formData = {
    id: undefined,
    articleId: undefined,
    articleTitle: '',
    title: '',
    hasContent: false,
    remark: ''
  }

  export default {
    name: 'TitleIndex',
    data () {
      return {
        dialogTitle: '弹框',
        form: {...formData},
        menuList: [],
        rules: {
          title: [
            { required: true, message: '请输入索引', trigger: 'blur' }
          ]
        },
        isDialogVisible: false
      }
    },
    mounted () {
      this.loadData()
      this.fetchArticleList()
    },
    methods: {
      // 提交表单
      onSubmit () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            const isEdit = this.form.id
            if (isEdit) {
              editMenu(this.form).then(res => {
                this.$message.success(res.message)
                this.loadData()
                this.isDialogVisible = false
              })
            } else {
              createMenu(this.form).then(res => {
                this.$message.success(res.message)
                this.loadData()
                this.isDialogVisible = false
              })
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 删除数据
      delData () {
        deleteMenu({ id: this.form.id }).then(res => {
          this.$message.success(res.message)
          delete this.form.id
          this.loadData()
        })
      },
      handleCreateOne () {
        this.dialogTitle = '新增一级索引'
        this.form.pId = '0'
        this.isDialogVisible = true
      },
      handleCreate (index, row) {
        this.dialogTitle = `新增${row.title}的子索引`
        this.form.pId = row.id
        this.isDialogVisible = true
      },
      handleEdit (index, row) {
        this.dialogTitle = `编辑索引：${row.title}`
        fetchMenu({ id: row.id }).then(({ data }) => {
          this.form = data
          this.isDialogVisible = true
        })
      },
      handleDelete (index, row) {
        this.form.id = row.id
        this.dialogTitle = `是否删除：${row.title}`
      },
      handleHasContent ({ id, hasContent }) {
        editMenu({ id, hasContent }) // 更新数据 hasContent 字段
      },
      loadData () {
        return fetchMenuList().then(res => {
          this.menuList = res.data.data
        })
      },
      fetchArticleList (params) {
        return fetchList(params).then(res => {
          return res.data.data.map(({ id, title }) => ({ articleId: id, articleTitle: title }))
        })
      },
      querySearchAsync(title, cb) {
        this.fetchArticleList({ title }).then(data => {
          cb(data)
        })
      },
      handleSelect({ articleId }) {
        this.form.articleId = articleId
      },
      closeDialog () {
        this.$refs.form.resetFields();
        this.form = {...formData}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    margin: 20px;
    .add-btn {
      margin-bottom: 12px;
    }
  }
</style>