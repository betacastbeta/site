module.exports = {
  title: 'BetaCast',
  tagline: 'Tudo sobre Nada',
  url: 'https://betacastbeta.github.io',
  baseUrl: '/site/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'betacastbeta', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'supportus-new',
      content: '<span style="font-weight:bold;font-family:Rubik, sans-serif;"><a href="https://blmbr.carrd.co/" target="_blank">VIDAS NEGRAS IMPORTAM</a> ✊ | <a href="/site/arquivo/5-loucura-2">29-09-2020 #5 LOUCURA [O retorno]: Tá tudo queimando. Traz mais lenha, traz mais água.</a><span>',
      backgroundColor: '#000',
      textColor: '#fff'
    },
    navbar: {
      title: 'βCast',
      logo: {
        alt: 'logo',
        src: 'img/logo-top.png',
      },
      items: [
        {
          label: "Lista What's App",
          href: 'https://whats.link/betacast1',
          position: 'left',
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/betacastbeta/',
          position: 'left',
        },
        {
          label: 'YouTube',
          href: 'https://www.youtube.com/channel/UCQ70im76p8hYpCIC_ea3N6w/',
          position: 'left',
        },
        {
          to: '/arquivo/hello',
          activeBasePath: 'docs/arquivo',
          label: 'Arquivo',
          position: 'left',
        },
        {
          href: 'https://github.com/betacastbeta/site',
          position: 'right',
          label: 'Github'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Lista Whats App',
              href: 'https://whats.link/betacast1',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/betacastbeta/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCQ70im76p8hYpCIC_ea3N6w/',
            },
            {
              to: '/arquivo/hello',
              activeBasePath: 'docs/arquivo',
              label: 'Arquivo',
            },

          ],
        },
        {
          title: 'Contato',
          items: [
            {
              label: 'betacastbeta@gmail.com',
              href: 'mailto:betacastbeta@gmail.com',
            },
          ],
        },
      ],
      copyright: `Orgulhosamente construído com Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  plugins: [[ require.resolve('docusaurus-lunr-search'), { languages: ['pt'] } ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: 'doc_rx',
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/betacastbeta/site/docusaurus/edit/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
