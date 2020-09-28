
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
  component: ComponentCreator('/','0f7'),
  
  routes: [
{
  path: '/compartilhe/compartilhe-indice',
  component: ComponentCreator('/compartilhe/compartilhe-indice','871'),
  exact: true,
},
{
  path: '/compartilhe/intro',
  component: ComponentCreator('/compartilhe/intro','a30'),
  exact: true,
},
{
  path: '/compartilhe/usando_locale',
  component: ComponentCreator('/compartilhe/usando_locale','200'),
  exact: true,
},
{
  path: '/examples/doc1',
  component: ComponentCreator('/examples/doc1','cdb'),
  exact: true,
},
{
  path: '/examples/doc2',
  component: ComponentCreator('/examples/doc2','8d5'),
  exact: true,
},
{
  path: '/examples/doc3',
  component: ComponentCreator('/examples/doc3','475'),
  exact: true,
},
{
  path: '/examples/mdx',
  component: ComponentCreator('/examples/mdx','0f7'),
  exact: true,
},
{
  path: '/fun/calvin',
  component: ComponentCreator('/fun/calvin','252'),
  exact: true,
},
{
  path: '/fun/dilbert',
  component: ComponentCreator('/fun/dilbert','856'),
  exact: true,
},
{
  path: '/fun/garfield',
  component: ComponentCreator('/fun/garfield','132'),
  exact: true,
},
{
  path: '/fun/peanuts',
  component: ComponentCreator('/fun/peanuts','22c'),
  exact: true,
},
{
  path: '/fun/trex',
  component: ComponentCreator('/fun/trex','d4f'),
  exact: true,
},
{
  path: '/fun/vida_programador',
  component: ComponentCreator('/fun/vida_programador','473'),
  exact: true,
},
{
  path: '/fun/xkcd',
  component: ComponentCreator('/fun/xkcd','410'),
  exact: true,
},
{
  path: '/how-to/how_to',
  component: ComponentCreator('/how-to/how_to','4c5'),
  exact: true,
},
{
  path: '/how-to/nova-pagina',
  component: ComponentCreator('/how-to/nova-pagina','391'),
  exact: true,
},
{
  path: '/monitoramento_rx/analise_tendencia/custeio_administrativo',
  component: ComponentCreator('/monitoramento_rx/analise_tendencia/custeio_administrativo','ce3'),
  exact: true,
},
{
  path: '/monitoramento_rx/analise_tendencia/estrutura_organizacional',
  component: ComponentCreator('/monitoramento_rx/analise_tendencia/estrutura_organizacional','8e7'),
  exact: true,
},
{
  path: '/monitoramento_rx/analise_tendencia/geral',
  component: ComponentCreator('/monitoramento_rx/analise_tendencia/geral','846'),
  exact: true,
},
{
  path: '/monitoramento_rx/analise_tendencia/patrimonio_uniao',
  component: ComponentCreator('/monitoramento_rx/analise_tendencia/patrimonio_uniao','774'),
  exact: true,
},
{
  path: '/monitoramento_rx/analise_tendencia/pessoal',
  component: ComponentCreator('/monitoramento_rx/analise_tendencia/pessoal','987'),
  exact: true,
},
{
  path: '/monitoramento_rx/analise_tendencia/solucoes_modernizacao',
  component: ComponentCreator('/monitoramento_rx/analise_tendencia/solucoes_modernizacao','0ad'),
  exact: true,
},
{
  path: '/monitoramento_rx/analise_tendencia/transformacao_digital',
  component: ComponentCreator('/monitoramento_rx/analise_tendencia/transformacao_digital','2e5'),
  exact: true,
},
{
  path: '/monitoramento_rx/status_atualizacao',
  component: ComponentCreator('/monitoramento_rx/status_atualizacao','57c'),
  exact: true,
},
{
  path: '/recomendacoes/recomendacoes-hello',
  component: ComponentCreator('/recomendacoes/recomendacoes-hello','6b4'),
  exact: true,
},
{
  path: '/recomendacoes/seriados',
  component: ComponentCreator('/recomendacoes/seriados','e66'),
  exact: true,
},
{
  path: '/recomendacoes/ted',
  component: ComponentCreator('/recomendacoes/ted','13e'),
  exact: true,
},
{
  path: '/sprints/sprint-10',
  component: ComponentCreator('/sprints/sprint-10','557'),
  exact: true,
},
{
  path: '/sprints/sprint-11',
  component: ComponentCreator('/sprints/sprint-11','e3b'),
  exact: true,
},
{
  path: '/sprints/sprint-12',
  component: ComponentCreator('/sprints/sprint-12','d32'),
  exact: true,
},
{
  path: '/sprints/sprint-intro',
  component: ComponentCreator('/sprints/sprint-intro','f8b'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
