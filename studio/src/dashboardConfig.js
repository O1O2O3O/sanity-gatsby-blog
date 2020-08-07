export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f2d4ee0780aab0090724018',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dnrk4jnu',
                  apiId: 'c6daf9fa-0faf-41e4-9478-100ef0f8e7d6'
                },
                {
                  buildHookId: '5f2d4ee00ee9320191929b48',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-snfc6139',
                  apiId: '6082df9e-3193-494a-a7ca-f82811b34ca9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/O1O2O3O/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-snfc6139.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
