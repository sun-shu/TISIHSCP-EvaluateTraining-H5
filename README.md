#### 项目流程

- 全局环境

> node版本 >= 18.19.1
>
> 全局安装 umi pnpm
>
>

- clone项目

> [项目地址](111.33.127.102:8090/tisihcsp/PROD01-TISIHCSP-EVA-MCS)

- 切换分支

> git checkout main

- 构建依赖

> pnpm install

- 项目运行

> pnpm dev
>
>
>
> store文件夹使用的是zustand
> models文件夹使用的是umi的useModel
> useModel的实现原理是上层注入方式，所以在一开始就会加载
> zustand是在组件内部使用的，所以只有在组件内部使用的时候才会加载

> TODO:

- 接口一键mock
- 导航栏组件抽取