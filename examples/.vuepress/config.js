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
      "/home_page/fNIRS.jpg",
      "/home_page/fantini.jpg",
      "/home_page/TuftsSign.jpg",
      "/home_page/headset.jpg",
      "/home_page/probe.jpg",
    ],
    home_images: [
      {
        img_url: "/home_page/196.jpg",
        title: "Welcome",
        subtitle: "Subtitle 1",
        content:
          "The Tufts Human-Computer Interaction Lab is based at the Medford campus of Tufts University, which is located approximately 5 miles from downtown Boston and is accessible via both the subway and bus system.",
      },
      {
        img_url: "/home_page/ballou.jpg",
        title: "Welcome",
        subtitle: "Subtitle 2",
        content:
          "Please feel free to contact us if you have any questions or would like to arrange a visit.",
      },
      {
        img_url: "/home_page/boston.jpg",
        title: "Welcome",
        subtitle: "Subtitle 3",
        content:
          "The Tufts Human-Computer Interaction Lab is based at the Medford campus of Tufts University, which is located approximately 5 miles from downtown Boston and is accessible via both the subway and bus system.",
      },
      {
        img_url: "/home_page/halligan2.jpg",
        title: "Welcome",
        subtitle: "Subtitle 4",
        content:
          "Please feel free to contact us if you have any questions or would like to arrange a visit.",
      },
      {
        img_url: "/home_page/old_lab_inx.jpg",
        title: "Welcome",
        subtitle: "Subtitle 5",
        content:
          "The Tufts Human-Computer Interaction Lab is based at the Medford campus of Tufts University, which is located approximately 5 miles from downtown Boston and is accessible via both the subway and bus system.",
      },
      {
        img_url: "/home_page/old_lab_outx.jpg",
        title: "Welcome",
        subtitle: "Subtitle 6",
        content:
          "Please feel free to contact us if you have any questions or would like to arrange a visit.",
      },
      {
        img_url: "/home_page/fNIRS.jpg",
        title: "Welcome",
        subtitle: "Subtitle 7",
        content:
          "The Tufts Human-Computer Interaction Lab is based at the Medford campus of Tufts University, which is located approximately 5 miles from downtown Boston and is accessible via both the subway and bus system.",
      },
      {
        img_url: "/home_page/fantini.jpg",
        title: "Welcome",
        subtitle: "Subtitle 8",
        content:
          "Please feel free to contact us if you have any questions or would like to arrange a visit.",
      },
      {
        img_url: "/home_page/TuftsSign.jpg",
        title: "Welcome",
        subtitle: "Subtitle 9",
        content:
          "The Tufts Human-Computer Interaction Lab is based at the Medford campus of Tufts University, which is located approximately 5 miles from downtown Boston and is accessible via both the subway and bus system.",
      },
      {
        img_url: "/home_page/headset.jpg",
        title: "Welcome",
        subtitle: "Subtitle 10",
        content:
          "Please feel free to contact us if you have any questions or would like to arrange a visit.",
      },
      {
        img_url: "/home_page/probe.jpg",
        title: "Welcome",
        subtitle: "Subtitle 11",
        content:
          "The Tufts Human-Computer Interaction Lab is based at the Medford campus of Tufts University, which is located approximately 5 miles from downtown Boston and is accessible via both the subway and bus system.",
      },
    ],
    logo: "/logo_hci.png",
    search: false,
    sidebar: "auto",
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
      { text: "HCI At Tufts", link: "/hci_at_tufts/" },
      { text: "People", link: "/people/" },
      { text: "Projects", link: "/projects/" },
      { text: "Publications", link: "/publications/" },
      { text: "Code & Datasets", link: "/code_and_datasets/" },
      { text: "Admissions", link: "/admissions/" },
      { text: "HCI Resources", link: "/hci_resources/" },
    ],
    // footer: [{ text: "Github", link: "https://github.com" }],
    footer: [
      {
        text:
          "HCI Lab, Department of Computer Science 196 Boston Ave., Tufts University, Medford, MA, 02155",
        link: false,
      },
    ],
  },
  // postcss: {
  //   plugins: [
  //     require('css-prefers-color-scheme/postcss'),
  //     require('autoprefixer')
  //   ]
  // }
};
