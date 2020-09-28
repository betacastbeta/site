module.exports = {
  title: 'multiCast',
  tagline: 'Automação extraordinária em projetos de fluxo e apresentação de dados',
  url: 'http://multiCast.help',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'multiCast', // Usually your GitHub org/user name.
  projectName: 'multiCast', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'supportus-new',
      content: '<span style="font-weight:bold;font-family:Montserrat, sans-serif;"><a href="https://blmbr.carrd.co/" target="_blank">VIDAS NEGRAS IMPORTAM</a> ✊ | rodando <a href="/sprints/sprint-12">sprint 12: Vira-lata Caramelo 07-18/09</a><span>',
      backgroundColor: '#000',
      textColor: '#fff'
    },
    navbar: {
      title: 'multiCast',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/monitoramento_rx/status_atualizacao',
          activeBasePath: 'docs/monitoramento_rx',
          label: 'Lista WhatsApp',
          position: 'left',
        },
        {
          to: '/monitoramento_rx/status_atualizacao',
          activeBasePath: 'docs/monitoramento_rx',
          label: 'Arquivo',
          position: 'left',
        },
        {
          href: 'http://etl-cginflab.mp.intra',
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
              href: 'http://etl-cginflab.mp.intra',
            },
            {
              label: 'Arquivo',
              href: 'http://10.209.40.111:5000/',
            },
          ],
        },
        {
          title: 'Contato',
          items: [
            {
              label: '+55 61 98107-1516',
              href: 'http://0.0.0.0',
            },
            {
              label: 'vitorbellini@gmail.com.br',
              href: 'mailto:seges.cginf@planejamento.gov.br',
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
            'https://git.economia.gov.br/seges-cginf/cginf-site/edit/master/'
            // 'https://github.com/facebook/docusaurus/edit/master/website/',
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
