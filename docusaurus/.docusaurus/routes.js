
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/site/',
  component: ComponentCreator('/site/','c9f'),
  exact: true,
},
{
  path: '/site/blog',
  component: ComponentCreator('/site/blog','dd1'),
  exact: true,
},
{
  path: '/site/blog/hello-world',
  component: ComponentCreator('/site/blog/hello-world','cd0'),
  exact: true,
},
{
  path: '/site/blog/hola',
  component: ComponentCreator('/site/blog/hola','e24'),
  exact: true,
},
{
  path: '/site/blog/tags',
  component: ComponentCreator('/site/blog/tags','516'),
  exact: true,
},
{
  path: '/site/blog/tags/docusaurus',
  component: ComponentCreator('/site/blog/tags/docusaurus','67b'),
  exact: true,
},
{
  path: '/site/blog/tags/facebook',
  component: ComponentCreator('/site/blog/tags/facebook','5b8'),
  exact: true,
},
{
  path: '/site/blog/tags/hello',
  component: ComponentCreator('/site/blog/tags/hello','bee'),
  exact: true,
},
{
  path: '/site/blog/tags/hola',
  component: ComponentCreator('/site/blog/tags/hola','163'),
  exact: true,
},
{
  path: '/site/blog/welcome',
  component: ComponentCreator('/site/blog/welcome','c44'),
  exact: true,
},
{
  path: '/site/',
  component: ComponentCreator('/site/','099'),
  
  routes: [
{
  path: '/site/arquivo/1-cops',
  component: ComponentCreator('/site/arquivo/1-cops','0bb'),
  exact: true,
},
{
  path: '/site/arquivo/2-mulheri',
  component: ComponentCreator('/site/arquivo/2-mulheri','38f'),
  exact: true,
},
{
  path: '/site/arquivo/3-lixo-fora',
  component: ComponentCreator('/site/arquivo/3-lixo-fora','e90'),
  exact: true,
},
{
  path: '/site/arquivo/4-bombeire',
  component: ComponentCreator('/site/arquivo/4-bombeire','37a'),
  exact: true,
},
{
  path: '/site/arquivo/5-loucura-2',
  component: ComponentCreator('/site/arquivo/5-loucura-2','ef5'),
  exact: true,
},
{
  path: '/site/arquivo/hello',
  component: ComponentCreator('/site/arquivo/hello','cb2'),
  exact: true,
},
{
  path: '/site/arquivo/x-paz',
  component: ComponentCreator('/site/arquivo/x-paz','938'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
