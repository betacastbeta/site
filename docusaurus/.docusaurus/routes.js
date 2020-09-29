
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','fdd'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','728'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','798'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','08d'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','3a8'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','917'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','c2b'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','c12'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','084'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','cb0'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','6bf'),
  
  routes: [
{
  path: '/arquivo/1-cops',
  component: ComponentCreator('/arquivo/1-cops','e92'),
  exact: true,
},
{
  path: '/arquivo/2-mulheri',
  component: ComponentCreator('/arquivo/2-mulheri','18f'),
  exact: true,
},
{
  path: '/arquivo/3-lixo-fora',
  component: ComponentCreator('/arquivo/3-lixo-fora','526'),
  exact: true,
},
{
  path: '/arquivo/4-bombeire',
  component: ComponentCreator('/arquivo/4-bombeire','95f'),
  exact: true,
},
{
  path: '/arquivo/5-loucura-2',
  component: ComponentCreator('/arquivo/5-loucura-2','7f7'),
  exact: true,
},
{
  path: '/arquivo/5-paz',
  component: ComponentCreator('/arquivo/5-paz','fc4'),
  exact: true,
},
{
  path: '/arquivo/hello',
  component: ComponentCreator('/arquivo/hello','5a2'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
