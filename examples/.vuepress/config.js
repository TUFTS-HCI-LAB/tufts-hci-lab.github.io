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
    // cover: "/cover.jpg",
    cover: [
      "/home_page/196.jpg",
      "/home_page/ballou.jpg",
      "/home_page/boston.jpg",
      "/home_page/halligan2.jpg",
      "/home_page/old_lab_inx.jpg",
      "/home_page/old_lab_outx.jpg",
    ],
    home_images: [
      {img_url:"/home_page/196.jpg", title: 'Title 1 ', subtitle: 'Subtitle 1', content: 'Content 1'},
      {img_url:"/home_page/ballou.jpg", title: 'Title 2 ', subtitle: 'Subtitle 2', content: 'Content 2'},
      {img_url:"/home_page/boston.jpg", title: 'Title 3 ', subtitle: 'Subtitle 3', content: 'Content 3'},
      {img_url:"/home_page/halligan2.jpg",title: 'Title 4 ', subtitle: 'Subtitle 4', content: 'Content 4'},
      {img_url:"/home_page/old_lab_inx.jpg", title: 'Title 5', subtitle: 'Subtitle 5', content: 'Content 5'},
      {img_url:"/home_page/old_lab_outx.jpg", title: 'Title 6', subtitle: 'Subtitle 6', content: 'Content 6'},
    ],
    logo: "/logo_hci.png",
    search: false,
    sidebar: 'auto',
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
      // { text: "Posts", link: "/posts/" },
      // { text: 'BackupPost', link: '/backup_post/' },
      { text: "HCI At Tufts", link: "/hci_at_tufts/" },
      { text: "People", link: "/people/" },
      // just like Posts
      { text: "Projects", link: "/projects/" },
      // just like about
      { text: "Publications", link: "/publications/" },
      // { text: "Doc", link: "/doc/" },
      // Just like Page About
      { text: "Admissions", link: "/admissions/" },
      { text: "HCI Resources", link: "/hci_resources/" },

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
