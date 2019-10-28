module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://whitehouse-reports.netlify.com"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-tailwindcss","short_name":"starter","start_url":"/","background_color":"#000","theme_color":"#000","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
