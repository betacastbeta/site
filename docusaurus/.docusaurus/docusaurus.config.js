export default {
  "title": "BetaCast",
  "tagline": "Tudo sobre Nada",
  "url": "http://betacast.help",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.png",
  "organizationName": "BetaCast",
  "projectName": "BetaCast",
  "themeConfig": {
    "announcementBar": {
      "id": "supportus-new",
      "content": "<span style=\"font-weight:bold;font-family:Rubik, sans-serif;\"><a href=\"https://blmbr.carrd.co/\" target=\"_blank\">VIDAS NEGRAS IMPORTAM</a> ✊ | <a href=\"/arquivo/5-paz\">29-09-2020 #5 LOUCURA [O retorno]: Tá tudo queimando. Traz mais lenha, traz mais água.</a><span>",
      "backgroundColor": "#000",
      "textColor": "#fff"
    },
    "navbar": {
      "title": "βCast",
      "logo": {
        "alt": "logo",
        "src": "img/logo-top.png"
      },
      "items": [
        {
          "label": "Lista What's App",
          "href": "https://whats.link/betacast1",
          "position": "left"
        },
        {
          "label": "Instagram",
          "href": "https://www.instagram.com/betacastbeta/",
          "position": "left"
        },
        {
          "label": "YouTube",
          "href": "https://www.youtube.com/channel/UCQ70im76p8hYpCIC_ea3N6w/",
          "position": "left"
        },
        {
          "to": "/arquivo/hello",
          "activeBasePath": "docs/arquivo",
          "label": "Arquivo",
          "position": "left"
        },
        {
          "href": "https://github.com/betacastbeta/site",
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
              "href": "https://whats.link/betacast1"
            },
            {
              "label": "Instagram",
              "href": "https://www.instagram.com/betacastbeta/"
            },
            {
              "label": "YouTube",
              "href": "https://www.youtube.com/channel/UCQ70im76p8hYpCIC_ea3N6w/"
            },
            {
              "to": "/arquivo/hello",
              "activeBasePath": "docs/arquivo",
              "label": "Arquivo"
            }
          ]
        },
        {
          "title": "Contato",
          "items": [
            {
              "label": "betacastbeta@gmail.com",
              "href": "mailto:betacastbeta@gmail.com"
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
          "editUrl": "https://github.com/betacastbeta/site/docusaurus/edit/master/"
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