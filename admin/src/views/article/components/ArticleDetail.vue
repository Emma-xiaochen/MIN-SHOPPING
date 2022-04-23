<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">

      <sticky :z-index="10" :class-name="'sub-navbar '+postForm.status">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          发布
        </el-button>
        <el-button v-loading="loading" type="warning" @click="draftForm">
          草稿
        </el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput v-model="postForm.title" :maxlength="100" name="name" required>
                标题
              </MDinput>
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col :span="10">
                  <el-form-item label="创建日期:" class="postInfo-container-item">
                    <el-date-picker v-model="postForm.createTime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期" />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-form-item style="margin-bottom: 40px;" label-width="80px" label="文章摘要:">
          <el-input v-model="postForm.content_short" :rows="1" type="textarea" class="article-textarea" autosize placeholder="文章摘要" />
          <span v-show="contentShortLength" class="word-counter">{{ contentShortLength }}words</span>
        </el-form-item>

        <el-form-item prop="content" style="margin-bottom: 30px;">
          <!-- <Tinymce ref="editor" v-model="postForm.content" :height="400" /> -->
          <!-- <MDeditor ref="editor" v-model="postForm.content" height="420px"></MDeditor> -->
          <mavon-editor v-model="postForm.md_content" @change="onChange" @fullScreen="fullScreen" :style="{ 'height': this.height ? '500px' : 'auto' }"/>
        </el-form-item>

        <el-form-item prop="remark" label="备注" style="margin-bottom: 30px;">
          <el-input type="textarea" placeholder="备注" v-model="postForm.remark"></el-input>
        </el-form-item>

        <el-form-item prop="image_uri" style="margin-bottom: 30px;">
          <Upload v-model="postForm.image_uri" />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import Upload from '@/components/Upload/SingleImage3'
import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky' // 粘性header组件
import { fetchArticle, createArticle, editArticle } from '@/api/article'

const defaultForm = {
  status: 'draft',
  title: '',         // 文章题目
  md_content: '',    // 文章内容（markdown格式）
  content: '',       // 文章内容（html格式）
  content_short: '', // 文章摘要
  image_uri: '',     // 文章图片
  createTime: '',    // 文章创建时间
  updateTime: '',    // 文章更新时间
  remark: '',        // 备注
  id: undefined,
}

export default {
  name: 'ArticleDetail',
  components: { Tinymce, MDinput, Upload, Sticky },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必传项',
          type: 'error'
        })
        callback(new Error(rule.field + '为必传项'))
      } else {
        callback()
      }
    }
    return {
      height: true,
      postForm: Object.assign({}, defaultForm),
      loading: false,
      userListOptions: [],
      rules: {
        // image_uri: [{ validator: validateRequire }],
        title: [{ validator: validateRequire }],
        // content: [{ validator: validateRequire }],
      }
    }
  },
  computed: {
    contentShortLength() {
      return this.postForm.content_short.length
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    }
  },
  methods: {
    fullScreen (isFullScreen) {
      this.height = !isFullScreen
    },
    fetchData(id) {
      fetchArticle(id).then(response => {
        this.postForm = response.data

        // set page title
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setPageTitle() {
      const title = 'Edit Article'
      // document.title = `${title} - id：${this.postForm.id}`
    },
    // 发布 published
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.postForm.status = 'published'

          if (this.postForm.id) { // 编辑文章的提交
            this.postForm.updateTime = this.postForm.createTime
            delete this.postForm.createTime
            editArticle(this.postForm).then(res => {
              this.$notify({
                title: '成功',
                message: '发布文章成功',
                type: 'success',
                duration: 2000
              })
              this.loading = false
            })
          } else { // 创建文章的提交
            this.postForm.updateTime = this.postForm.createTime
            createArticle(this.postForm).then(res => {
              this.$notify({
                title: '成功',
                message: '发布文章成功',
                type: 'success',
                duration: 2000
              })
              this.loading = false
            })
          }
          this.$router.push('/list')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 保存为草稿 draft
    draftForm() {
      if (this.postForm.content.length === 0 || this.postForm.title.length === 0) {
        this.$message({
          message: '请填写必要的标题和内容',
          type: 'warning'
        })
        return
      }
      this.postForm.status = 'draft'
      if (this.postForm.id) { // 编辑文章的提交
        this.postForm.updateTime = this.postForm.createTime
        delete this.postForm.createTime
        editArticle(this.postForm).then(res => {
          this.$notify({
            title: '成功',
            message: '保存成功',
            type: 'success',
            duration: 1000
          })
          this.loading = false
        })
      } else { // 创建文章的提交
        this.postForm.updateTime = this.postForm.createTime
        createArticle(this.postForm).then(res => {
          this.$notify({
            title: '成功',
            message: '保存成功',
            type: 'success',
            duration: 1000
          })
          this.loading = false
        })
      }
      this.$router.push('/list')
    },
    onChange (value, render) {
      this.postForm.content = render
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea ::v-deep {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
