// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ØKP4',
  tagline: 'Open Knoledge Protocol For',
  url: 'https://okp4.github.io',
  baseUrl: '/',
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'error',
  favicon: 'img/favicon.ico',
  organizationName: 'okp4',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => `https://github.com/okp4/docs/edit/main/docs/${docPath}`,
          remarkPlugins: [require('mdx-mermaid')]
        },
        theme: {
          customCss: require.resolve('./src/scss/custom.scss')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ØKP4',
        logo: {
          alt: 'OKP4 Logo',
          src: '/img/logotype-okp4-light.svg',
          srcDark: '/img/logotype-okp4-dark.svg'
        },
        items: [
          {
            to: '/docs/whitepaper/abstract',
            position: 'left',
            label: 'Whitepaper (Work in progress)',
            activeBasePath: "/docs/whitepaper"
          },
          {
            to: '/docs/faq',
            position: 'left',
            label: 'FAQ',
            activeBasePath: "/docs/faq"
          },
          {
            href: 'https://discord.gg/okp4',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord'
          },
          {
            href: 'https://github.com/okp4',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Whitepaper',
                to: '/docs/whitepaper/abstract'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/GHNZh4SaJ3'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/OKP4_Protocol'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/okp4'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/okp4'
              },
              {
                label: 'OKP4.network',
                href: 'https://okp4.network'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OKP4`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'dark'
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    ['drawio', {}],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true
      }
    ]
  ]
}

module.exports = config
