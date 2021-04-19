module.exports = {
  title: "Tufts HCI Lab",
  description: "Tufts Human-Computer Interaction Laboratory",
  base: "/",
  dest: "./docs/",
  // theme: require.resolve('../../theme_ououe/'),
  // theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    defaultTheme: "dark",
    showThemeButton: false,
    cover: "/cover.jpg",
    logo: "/logo_hci.png",
    search: false,
    // backgroundImage: false,
    // pageGroup: 5,
    // postTime: {
    //   createTime: 'Create Time',
    //   lastUpdated: 'Last Updated',
    //   options: {
    //     dateStyle: 'full',
    //     timeStyle: 'short',
    //     hour12: false,
    //     weekday: 'long'
    //   }
    // },
    nav: [
      { text: "Home", link: "/" },
      { text: "Posts", link: "/posts/" },
      // { text: 'BackupPost', link: '/backup_post/' },
      { text: "People", link: "/people/" },
      // just like Posts
      { text: "Projects", link: "/projects/" },
      { text: "Publications", link: "/publications/" },
      { text: "Doc", link: "/doc/" },
      // Just like Page About
      { text: "Admissions", link: "/admissions/" },
      { text: "HCI Resources", link: "/hci-resources/" },

      // { text: "Tags", link: "/tag/" },
      // { text: "Categories", link: "/category/" },
      // { text: "About", link: "/about/" },
    ],
    footer: [{ text: "Github", link: "https://github.com" }],
  },
  // postcss: {
  //   plugins: [
  //     require('css-prefers-color-scheme/postcss'),
  //     require('autoprefixer')
  //   ]
  // }
};
