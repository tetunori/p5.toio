module.exports = {
  title: 'p5.toio',
  tagline: 'The library of toio™ for p5.js',
  url: 'https://tetunori.github.io',
  baseUrl: '/p5.toio/',
  favicon: 'images/favicon.ico',
  organizationName: 'tetunori',
  projectName: 'p5.toio',
  themeConfig: {
    image: 'images/logo-a.png',
    googleAnalytics: {
      trackingID: 'UA-167461637-1',
      anonymizeIP: true,
    },
    navbar: {
      title: 'p5.toio',
      logo: {
        alt: 'mini logo',
        src: 'images/mini-logo.png',
      },
      links: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/tetunori/p5.toio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: 'docs/intro',
            },
            {
              label: 'Getting Started',
              to: 'docs/import',
            },
            {
              label: 'API Reference',
              to: 'docs/cube/classes/p5tcube',
            },
          ],
        },
        {
          title: 'Reference',
          items: [
            {
              label: 'toio™Official Site',
              href: 'https://toio.io/',
            },
            {
              label: 'toio™Core Cube Specification',
              href: 'https://toio.github.io/toio-spec/',
            },
            {
              label: 'p5.js',
              href: 'https://p5js.org/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'p5.toio articles on Qiita',
              href: 'https://qiita.com/search?sort=&q=%22p5.toio%22',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tetunori/p5.toio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tetsunori NAKAYAMA.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'docs/intro',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tetunori/p5.toio/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
