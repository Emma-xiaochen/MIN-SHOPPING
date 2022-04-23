<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" size="mini" border fit highlight-current-row style="width: 100%">
      <el-table-column  width="80px" align="center" label="ID">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="450px" label="Title">
        <template slot-scope="{row}">
          <!-- <router-link :to="'/list/edit/'+row.id" class="link-type"> -->
          <span>{{ row.title }}</span>
          <!-- </router-link> -->
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Date">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" class-name="status-col" align="center" label="Status">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter" size="mini">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="remark" align="center">
        <template slot-scope="{row}">
          {{ row.remark }}
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
  </div>
</template>

<script>
import { fetchList, deleteArticle } from '@/api/article'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'ArticleList',
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
    handleEdit (index, row) {
      this.$router.push('/list/edit/'+row.id)
    },
    handleDelete (index, row) {
      this.$confirm(`确定删除标题为【${row.title}】？`)
        .then(_ => {
          deleteArticle({ id: row.id }).then((res) => {
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
