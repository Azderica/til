/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Log that Today I Learned',
  tagline: '책 기록',
  url: 'https://Azderica.github.io',
  baseUrl: '/til/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Azderica', // Usually your GitHub org/user name.
  projectName: 'til', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Azderica TIL',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://Azderica.github.io',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/Azderica',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Myeonghun's Study, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Azderica/til/edit/master/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Azderica/til/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
