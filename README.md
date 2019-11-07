# vue-nodejs-movie
## vue-movie
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## xiaoserver
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```
### 项目介绍：
  * 该项目前台实现城市定位、电影列表及详情页展示、搜索框功能(需用拼音搜索)和城市部分影院列表的功能，后台实现用户注册、登陆退出、找回密码、
邮箱发送验证码、及上传图片的功能，后台管理界面实现冻结用户(无法登录)和删除用户数据功能。
### 实现技术：
  **前后端分离式开发**
  *  一. 前台
      * 1.使用vue-cli构建项目。
      * 2.使用vue-router进行项目路由配置。
      * 3.使用axios获取API接口数据，对各组件进行数据渲染。
      * 4.使用vuex处理各组件间的通讯，进行状态管理。
      * 5.封装better-scroll和loading组件实现上拉加载和正在加载效果。
      * 6.城市页面右侧实现了地址索引功能。
      * 7.封装注册页面的验证码倒计时函数。
  * 二. 后台
    **MVC模式开发*
      * 1.使用express-generator生成项目。
      * 2.使用express中的router中间件开发后台数据接口路由，并使用postman工具测试接口。
      * 3.使用MongoDB持久化用户数据，使用mongoose第三方包设计数据模型并存储数据。
      * 4.使用nodemailer第三方包进行邮箱验证码发送，封装请求验证码的接口。
      * 5.使用multers第三方包实现上传图片功能，并且将图片名重命名为用户名+后缀。
      * 6.使用express-session中间件记录的是客户端与服务端之间的会话状态。
      * 7.使用Element UI搭建管理后台布局和分页处理组件。 
   * 三. 项目优化：
      * 1.使用路由守卫beforeRouteEnter来判断用户是否登录，当前用户是否有权限进入管理界面。
      * 2.注册时对验证码进行时效限制，超过60s需重新发送。
      * 3.使用node原生crypto模块对用户密码进行加密。
      * 4.使用trek-captcha第三方包在用户登陆时创建防攻击图形验证码。
   * 四．项目部署：
      * 1.使用webpack将vue项目打包生成dist文件夹。
      * 2.使用Nginx服务器对dist文件夹进行静态资源托管，
      * 3.使用Nginx对nodejs项目后台api、api2接口进行反向代理。
      * 4.使用pm2对nodejs后台项目进行进程管理，并实时监听变化。
      * 5.使用ESM云服务器搭建公网IP，部署整个项目资源。
   * 五. 项目问题：
      * 1.前台城市定位模块不显示用户地址，本地测试无问题，公网测试时定位一直显示北京的地址，估计是后台接口的问题。手动切换地址无问题。
      * 2.邮箱发送验证码时，本地测试时由于给自己邮箱发送次数过多，会被当成垃圾邮件，故点击发送验证码后如果你的邮箱没提示，可在垃圾箱查看。
      * 3.管理员前台登陆后进入个人中心后，跳转管理员界面url地址问题，由于代码使用a链接在新窗口打开，故url地址缺少了我自己给项目添加的url
    头部信息/xiaomi，应该是/xiaomi/admin
   * 六. 注意事项：
      * 登陆管理员账号：用户名(admin)、密码(admin)，登陆后进入第二个链接便可进入管理后台页面。
        **链接**
          * http://47.104.149.241:88/xiaomi
          * http://47.104.149.241:88/xiaomi/admin
### 数据API接口：
    ####api
      * 正在热映
          * http://39.97.33.178/api/movieOnInfoList?cityId=10
      * 即将上映
          * http://39.97.33.178/api/movieComingList?cityId=10
      * 搜索
          * http://39.97.33.178/api/searchList?cityId=10&kw=a
      * 城市
          * http://39.97.33.178/api/cityList
      * 电影详情
          * http://39.97.33.178/api/detailmovie?movieId=345808
      * 影院
          * http://39.97.33.178/api/cinemaList?cityId=10
      * 城市定位
          * http://39.97.33.178/api/getLocation
