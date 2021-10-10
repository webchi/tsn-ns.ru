module.exports = {
  siteMetadata: {
    siteUrl: "https://tsn-ns.ru",
    title: "ТСН Новое Сойкино",
    author: 'Vasiliy Shakhunov',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',    
		description: 'A Project to bootstrap your next Gatsby + Bulma site.',
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,   
		telegram: `https://t.me/tsn_soikino_news`,
		vkontakte: 'https://vk.com/tsnns', 
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans:300,400,700`
        ]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
