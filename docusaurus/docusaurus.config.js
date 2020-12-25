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
      content: '<span style="font-weight:bold;font-family:Rubik, sans-serif;"><a href="https://blmbr.carrd.co/" target="_blank">VIDAS NEGRAS IMPORTAM / BLACK LIVES MATTER</a> ✊ | 25-12-2020 #16 <a href="/site/arquivo/16-beatles-pt">[pt] The Beatles. Você decide.</a> | <a href="/site/archive/16-beatles-en">[en] The Beatles. Você decide.</a><span>',
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
          label: 'Twitter',
          href: 'https://twitter.com/cast_beta',
          position: 'left',
        },
        {
          label: 'Medium',
          href: 'https://medium.com/@betacastbeta',
          position: 'left',
        },
        {
          href: 'https://github.com/betacastbeta/site',
          position: 'left',
          label: 'Github'
        },
        {
          to: 'hello',
          activeBasePath: 'docs/',
          label: 'Passado/Past',
          position: 'left',
        },
        {
          to: 'about',
          activeBasePath: 'docs/about/',
          label: 'Sobre/About',
          position: 'right',
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
              label: 'Twitter',
              href: 'https://twitter.com/cast_beta',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@betacastbeta',
            },
            {
              label: 'Github',
              href: 'https://github.com/betacastbeta/site',
            },
            {
              to: 'hello',
              activeBasePath: 'docs/',
              label: 'Passado/Past',
            },
          ],
        },
        {
          title: 'Contato/Contact',
          items: [
            {
              label: 'betacastbeta@gmail.com',
              href: 'mailto:betacastbeta@gmail.com',
            },
          ],
        },
        {
          title: 'Sobre/About',
          items: [
            {
              to: '/about',
              activeBasePath: 'docs/',
              label: 'Aqui! Here!',
            },
          ],
        },
      ],
      copyright: `Orgulhosamente construído com Docusaurus / Proudly built with Docusaurus`,
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
