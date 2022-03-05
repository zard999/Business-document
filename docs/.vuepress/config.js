module.exports = {
  base: "/ts_study/" /* 基础虚拟路径 */,
  dest: "docs/dist" /* 打包文件基础路径, 在命令所在目录下 */,
  title: "业务云",
  description: "文档",
  themeConfig: {
    // 主题配置
    logo: "/logo.png",
    nav: [
      { text: "博客", link: "http://www.gulixueyuan.com/" },
      { text: "掘金", link: "http://www.gulixueyuan.com/" },
      {
        text: "选择语言",
        items: [
          { text: "English", link: "http://www.atguigu.com/web/" },
          { text: "简体中文", link: "http://www.atguigu.com/kecheng.shtml" },
        ],
      },
      { text: "GitHub", link: "http://www.gulixueyuan.com/" },
    ],
    sidebar: [
      // 左侧导航
      {
        title: "初识 TypeScript", // 标题
        collapsable: false, // 下级列表不可折叠
        // children: [
        //   // 下级列表
        //   "chapter1/01_初识TS",
        //   "chapter1/02_安装TS",
        //   "chapter1/03_HelloWorld",
        //   "chapter1/04_webpack打包",
        // ],
      },
      {
        title: "TypeScript 常用语法",
        collapsable: false,
        // children: [
        //   "chapter2/1_type",
        //   "chapter2/2_interface",
        //   "chapter2/3_class",
        //   "chapter2/4_function",
        //   "chapter2/5_generic",
        //   "chapter2/6_other",
        // ],
      },
      {
        title: "快速搭建在线文档网站",
        collapsable: false,
      },
    ],
  },
};
