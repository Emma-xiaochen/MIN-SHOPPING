<template>
  <div class="app-container">
    <el-button
      style="margin-bottom: 20px;"
      type="primary"
      @click="handleAdd()">新增商品</el-button>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column  width="80px" align="center" label="商品ID">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品图片" width="90">
        <template slot-scope="scope">
            <template v-if="scope.row.productImg1">
              <el-image
                style="width: 100%;padding: 2px"
                :src="scope.row.productImg1"
                :preview-src-list="[scope.row.productImg1]"
              >
              </el-image>
            </template>
            <template v-else>
              无
            </template>
          </template>
      </el-table-column>
      <el-table-column align="center" label="商品名称">
        <template slot-scope="scope">
          <span>{{ scope.row.productName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品类型">
        <template slot-scope="scope">
          <span>{{ scope.row.productType }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品状态">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.productStatus">已上架</el-tag>
          <el-tag type="info" v-else>未上架</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品价格">
        <template slot-scope="scope">
          <span>{{ scope.row.productPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品库存">
        <template slot-scope="scope">
          <span>{{ scope.row.productCounts }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品简述">
        <template slot-scope="scope">
          <span>{{ scope.row.productSketch }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="scope">
          <span>{{ scope.row.remark }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="250px" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="warning"
            @click="handleDetail(scope.$index, scope.row)">商品详情</el-button>
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

    <el-dialog title="商品弹框" :visible.sync="dialogFormVisible" @closed="closed">
      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item label="商品名称" :label-width="formLabelWidth" prop="productName">
          <el-input v-model="form.productName" placeholder="商品名称" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品类型" :label-width="formLabelWidth" prop="productType">
          <el-select v-model="form.productType" placeholder="商品类型">
            <el-option
              v-for="item in productTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品状态" :label-width="formLabelWidth" prop="productStatus">
          <el-switch
              v-model="form.productStatus"
              :active-value="true"
              :inactive-value="false"
              active-text="上架"
              inactive-text="下架">
            </el-switch>
        </el-form-item>
        <el-form-item label="商品价格" :label-width="formLabelWidth" prop="productPrice">
          <el-input v-model="form.productPrice" placeholder="商品价格" type="number" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品库存" :label-width="formLabelWidth" prop="productCounts">
          <el-input v-model="form.productCounts" placeholder="商品库存" type="number"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品简述" :label-width="formLabelWidth" prop="productSketch">
          <el-input v-model="form.productSketch" placeholder="商品简述" 
          type="textarea" :rows="3" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" :label-width="formLabelWidth" prop="productImg1">
          <el-input v-model="form.productImg1" placeholder="商品图片" autocomplete="off"></el-input>
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

    <el-dialog title="商品详情编辑" :visible.sync="editProductVisible" @closed="closed">
      <div>
        <mavon-editor v-model="form.productDetail" @change="onChange" @fullScreen="fullScreen" :style="{ 'height': this.height ? '500px' : 'auto' }"/>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editProductVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleProductDetailSubmit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { fetchList, deleteProduct, createProduct, editProduct } from '@/api/product'
import Tinymce from '@/components/Tinymce'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'ProductList',
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
      editProductVisible: false,
      dialogFormVisible: false,
      height: true,
      productDetail: '',
      formLabelWidth: '120px',
      form: {},
      rules: {
        productName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
        ],
        productStatus: [
          { required: true, message: '请输入商品状态', trigger: 'blur' },
        ],
        productSketch: [
          { required: true, message: '请输入商品简述', trigger: 'blur' },
        ],
        productPrice: [
          { required: true, message: '请输入商品价格', trigger: 'blur' },
        ],
        productCounts: [
          { required: true, message: '请输入商品库存', trigger: 'blur' },
        ],
      },
      list: null,
      listLoading: true,
      listQuery: {},
      page: {
        currentPage: 1,
        pageSize: 10,
      },
      total: 0,
      productTypeList: [
        { value: '人文社科', label: '人文社科' },
        { value: '历史', label: '历史' },
        { value: '童书', label: '童书' },
        { value: '青春励志', label: '青春励志' }
      ]
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    fullScreen (isFullScreen) {
      this.height = !isFullScreen
    },
    onChange (value, render) {
      this.form.productDetail = render
    },
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
    handleProductDetailSubmit() {
      editProduct(this.form).then(res => {
        this.$notify({
          title: '成功',
          message: '编辑商品成功',
          type: 'success',
          duration: 2000
        })
        this.getData()
        this.editProductVisible = false
      })
    },
    handleSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.form.id) { // 编辑
            editProduct(this.form).then(res => {
              this.$notify({
                title: '成功',
                message: '编辑商品成功',
                type: 'success',
                duration: 2000
              })
              this.getData()
              this.dialogFormVisible = false
            })
          } else { // 新增
            createProduct(this.form).then(res => {
              this.$notify({
                title: '成功',
                message: '新增商品成功',
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
    handleDetail(index, row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.editProductVisible = true
    },
    handleEdit (index, row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogFormVisible = true
    },
    handleDelete (index, row) {
      this.$confirm(`确定删除商品昵称为【${row.productName}】？`)
        .then(_ => {
          deleteProduct({ id: row.id }).then((res) => {
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
