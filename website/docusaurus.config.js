module.exports = {
  title: 'p5.toio',
  tagline: 'The library of toio™ for p5.js',
  url: 'https://tetunori.github.io',
  baseUrl: '/DocusaurusTest/',
  favicon: 'img/favicon.ico',
  organizationName: 'tetunori',
  projectName: 'DocusaurusTest',
  themeConfig: {
    image: 'img/logo-a.png',
    navbar: {
      title: 'p5.toio',
      logo: {
        alt: 'mini logo',
        src: 'img/mini-logo.png',
      },
      links: [
        {
          to: 'docs/',
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
              to: 'docs/intro/',
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
          homePageId: 'intro',
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
