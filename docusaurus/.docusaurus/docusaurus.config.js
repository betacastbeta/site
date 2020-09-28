export default {
  "title": "multiCast",
  "tagline": "Automação extraordinária em projetos de fluxo e apresentação de dados",
  "url": "http://multiCast.help",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.png",
  "organizationName": "multiCast",
  "projectName": "multiCast",
  "themeConfig": {
    "announcementBar": {
      "id": "supportus-new",
      "content": "<span style=\"font-weight:bold;font-family:Montserrat, sans-serif;\"><a href=\"https://blmbr.carrd.co/\" target=\"_blank\">VIDAS NEGRAS IMPORTAM</a> ✊ | rodando <a href=\"/sprints/sprint-12\">sprint 12: Vira-lata Caramelo 07-18/09</a><span>",
      "backgroundColor": "#000",
      "textColor": "#fff"
    },
    "navbar": {
      "title": "multiCast",
      "logo": {
        "alt": "logo",
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "/monitoramento_rx/status_atualizacao",
          "activeBasePath": "docs/monitoramento_rx",
          "label": "Lista WhatsApp",
          "position": "left"
        },
        {
          "to": "/monitoramento_rx/status_atualizacao",
          "activeBasePath": "docs/monitoramento_rx",
          "label": "Arquivo",
          "position": "left"
        },
        {
          "href": "http://etl-cginflab.mp.intra",
          "position": "right",
          "label": "Github"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Links",
          "items": [
            {
              "label": "Lista Whats App",
              "href": "http://etl-cginflab.mp.intra"
            },
            {
              "label": "Arquivo",
              "href": "http://10.209.40.111:5000/"
            }
          ]
        },
        {
          "title": "Contato",
          "items": [
            {
              "label": "+55 61 98107-1516",
              "href": "http://0.0.0.0"
            },
            {
              "label": "vitorbellini@gmail.com.br",
              "href": "mailto:seges.cginf@planejamento.gov.br"
            }
          ]
        }
      ],
      "copyright": "Orgulhosamente construído com Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      }
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "plugins": [
    [
      "/app/node_modules/docusaurus-lunr-search/src/index.js",
      {
        "languages": [
          "pt"
        ]
      }
    ]
  ],
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "routeBasePath": "/",
          "sidebarPath": "/app/sidebars.js",
          "showLastUpdateTime": true,
          "showLastUpdateAuthor": true,
          "editUrl": "https://git.economia.gov.br/seges-cginf/cginf-site/edit/master/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/app/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {}
};