export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619b83d054e726bfa7a6879d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mfwxt6q4',
                  apiId: 'fbb9363f-1eda-478e-b5f0-e6d41c572688'
                },
                {
                  buildHookId: '619b83d06dc90da36617075c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vuzzkmsp',
                  apiId: '001852f8-d2e9-48b3-a1cc-2f771df94234'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/larsmangset/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vuzzkmsp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
