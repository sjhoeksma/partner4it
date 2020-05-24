export default {
  widgets: [
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
                  buildHookId: '5eca7d3451f1bc15b0611108',
                  title: 'Sanity Studio',
                  name: 'partner4it-studio',
                  apiId: 'bae4c394-b545-45d2-9ea7-bc956ffac4fe'
                },
                {
                  buildHookId: '5eca7d3440c1621c335dec8a',
                  title: 'Blog Website',
                  name: 'partner4it',
                  apiId: 'd8a57dc6-7658-4ecb-8c26-cdbac34ad606'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sjhoeksma/partner4it',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://partner4it.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
