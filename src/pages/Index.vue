<template>
<Layout>
    <!-- Page Header -->
  <header 
    class="masthead" 
    :style="{backgroundImage: `url(${GRIDSOME_API_URL+$page.general.edges[0].node.cover.url})`}"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>{{$page.general.edges[0].node.title}}</h1>
            <span class="subheading">{{$page.general.edges[0].node.subtitle}}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section class="main-content">
    <div class="el-row">
      <div class="el-col el-col-6" style="padding-right: 10px;">
        <div>
          <div class="el-card is-never-shadow">
            <div class="el-card__body">
              <ul role="menubar" class="el-menu">
                <li role="menuitem" tabindex="-1" class="el-menu-item is-active" style="padding-left: 20px;">
                  <i class="el-icon-star-off">
                  </i> 
                  <span>最新动态</span>
                </li>
                <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
                  <i class="el-icon-mobile-phone">
                  </i> 
                  <span>社交圈</span>
                </li>
                <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
                  <i class="el-icon-edit-outline"></i> 
                  <span>博客列表</span>
                </li>
                <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
                  <i class="el-icon-service"></i> 
                  <span>开源项目</span>
                </li>
                <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
                  <i class="el-icon-printer"></i> 
                  <span>使用帮助</span>
                </li>
                <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
                  <i class="el-icon-document"></i> 
                  <span>README.md</span>
                </li>
              </ul>
            </div>
          </div> 
          <div class="el-card is-never-shadow" style="margin-top: 20px; text-align: center;">
            <div class="el-card__body">
              <div style="font-size: 0.9rem; line-height: 1.5; color: rgb(96, 108, 113);">
                <span class="el-tag el-tag--danger el-tag--small">&nbsp;
                </span>
                &nbsp;&nbsp; Token未绑定&nbsp;&nbsp;
                <button type="button" class="el-button el-button--text">
                  <span>绑定</span>
                </button>
              </div>
              <div style="margin-top: 10px; text-align: left;">
                <div role="alert" class="el-alert el-alert--info">
                  <div class="el-alert__content">
                    <span class="el-alert__title is-bold">Token获取</span>
                    <p class="el-alert__description">在 github-&gt; settings-&gt; developerSettings-&gt; personalAccessTokens 勾选gist权限,获取Token. 详情参考README.md</p>
                    <i class="el-alert__closebtn el-icon-close" style="display: none;">
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div>
            <div class="el-dialog__wrapper" style="display: none;">
              <div class="el-dialog" style="width: 500px; margin-top: 15vh;">
                <div class="el-dialog__header">
                  <span class="el-dialog__title">绑定Token</span>
                  <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
                <div class="el-dialog__footer">
                  <span class="dialog-footer">
                    <button type="button" class="el-button el-button--default">
                      <span>取 消</span>
                    </button> 
                    <button type="button" class="el-button el-button--primary">
                      <span>确 定</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="el-col el-col-18" style="padding-left: 10px;">
        <section>
          <div class="" style="min-height: 600px;">
            <div class="el-card is-never-shadow" style="min-height: 400px;">
              <div class="el-card__header">
                <div>
                  <span>2018.5.19 更新</span>
                </div>
              </div>
            </div>
            <div class="el-card__body"> 
              <div style="font-size: 0.9rem; line-height: 1.5; color: rgb(96, 108, 113);">
                发布 2018-05-19 01:10:06
                <br> 更新 2018-05-19 01:10:06
              </div> 
              <div style="font-size: 1.1rem; line-height: 1.5; color: rgb(48, 49, 51); border-bottom: 1px solid rgb(228, 231, 237); padding: 5px 0px;">
                <pre style="font-family: 微软雅黑;">
                  1 增加使用帮助
                  2 改进readme不存在时的情况
                </pre>
              </div> 
            </div>
          </div>
          <div class="el-loading-mask" style="display: none;">
            <div class="el-loading-spinner">
              <svg viewBox="25 25 50 50" class="circular">
                <circle cx="50" cy="50" r="20" fill="none" class="path">
                </circle>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
          <g-link :to="'/post/'+edge.node.id">
              <h2 class="post-title">{{edge.node.title}}</h2>
          </g-link>
          <p class="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
            {{edge.node.created_at}}
          </p>
          <p>
            <span v-for="tag in edge.node.tags" :key="tag.id">
              <g-link :to="'/tag/'+tag.id">{{ tag.title }}</g-link>
               &nbsp; &nbsp;
            </span>
          </p>
        </div>
        <hr>
        <!-- Pager -->
        <!-- <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div> -->
        <pager :info="$page.posts.pageInfo" />
      </div>
    </div>
  </div>
</Layout>
</template>
<page-query>
query ($page: Int) {
    posts: allStrapiPost(perPage:2, page:$page) @paginate {
        pageInfo {
          totalPages
          currentPage
        }
        edges {
            node {
                id
                title
                content
                tags {
                    id
                    title
                }
                created_at
            }
        }
    }

    general: allStrapiGeneral {
      edges {
        node {
          id
          title
          subtitle
          cover {
            url
          }
        }
      }
    }
}

</page-query>

<script>
import { Pager } from 'gridsome'
console.log('000', process.env)
export default {
  name:'HomePage',
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Pager
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
