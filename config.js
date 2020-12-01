const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://gitlamp.github.io/surprisica/',
    gaTrackingId: true,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://gitlamp.github.io/surprisica',
    title: 'Surprisica',
    githubUrl: 'https://github.com/gitlamp/Surprisica',
    helpUrl: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/gettingstarted' // add trailing slash if enabled above
    ],
    collapsedNav: [
      '/collapsed', // add trailing slash if enabled above
    ],
    links: [{ text: '', link: '' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "User Guide",
  },
  siteMetadata: {
    title: 'Surprisica',
    description: 'Surprisica package documentation. A python library for implementing context-aware recommender systems.',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: '',
          sizes: ``,
          type: ``,
        },
      ],
    },
  },
};

module.exports = config;
