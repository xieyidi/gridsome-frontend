// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins:[
    {
        use:'@gridsome/source-filesystem',
        options:{
          path:'./content/blog/**/*.md',
          typeName:'BlogPost',
          remark:{}
        }
    },
    {
      use:'@gridsome/source-strapi',
      options:{
        apiURL:'http://120.53.118.217:1337',
        queryLimit:1000,
        contentTypes:['post','tag'],
        singleTypes:['general'],
        // loginData:{
        //   identifier:'',
        //   password:''
        // }
      }
    }
  ],
  templates:{
    StrapiPost:[
      {
        path:'/post/:id',
        component:'./src/templates/Post.vue',
      }
    ],
    StrapiTag:[
      {
        path:'/tag/:id',
        component:'./src/templates/Tag.vue',
      }
    ],
  },
  transformers:{
      remark:{}
  }
}
