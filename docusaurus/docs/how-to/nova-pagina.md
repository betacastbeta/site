---
id: nova-pagina
title: Criando uma nova página no site
---

> **Autor:** [Vitor Bellini](mailto:vitor.bellini@planejamento.gov.br)
> em 21/08/2020

O [Docusaurus](https://v2.docusaurus.io/) é um código open-source criado pelo
Facebook para **simplificar** a criação de páginas estáticas **bonitas**.

Para isso, transforma [markdown](https://www.markdownguide.org/) em páginas html.

A criação de uma nova página nesse site segue as seguintes etapas:

## Criar o Markdown

O arquivo markdown (.md) deve ser criado de baixo do diretório `/docs` com a
seguinte estrutura no cabeçalho:

```markdown {2,3}
---
id: <<texto_sem_caracteres_especiais>>
title: <<Título da Página>>
---
```

Parâmetros adicionais da página podem ser encontrados [aqui](https://v2.docusaurus.io/docs/next/markdown-features).

E exemplos de sintaxe markdown [aqui](/examples/doc1).

## Definir estrutura sidebar (opcional)

O sidebar é a navegação das páginas naquele contexto. Se encontra no arquivo
`/sidebar.js`. Para criação da estrutura de sidebar, adicione o seguinte código
no arquivo:

```js {3,5,6,9,10,12,14,15}
module.exports = {
  // ...
  qualquer_nome_do_contexto: [
    // para páginas que não estão em uma estrutura de hierarquia
    "diretorio/id_da_pagina_1",
    "diretorio/id_da_pagina_2",
    {
      // para páginas que estão em uma hierarquia
      type: "category",
      label: "Nome da Hierarquia",
      // se deseja que por default a hierarquia esteja aberta ou fechada
      collapsed: false,
      // links das páginas nas hierarquias
      items: ["diretorio/id_da_pagina_3",
              "diretorio/id_da_pagina_4"],
    },
  ],
```

:::note

O diretório da página não precisa inserir /docs.

:::

## Linkar a página no menu ou footer (opcional)

A configuração do menu e footer são feitas no arquivo `/docusaurus.config.js`.

### Para adicionar um link à página no menu

```js {5-11}
module.exports = {
    // ...
    navbar: {
      // ...
      items: [
        {
          to: '/diretorio/id_da_pagina',
          activeBasePath: 'docs/diretorio',
          label: 'Nome do Link',
          position: 'left',
        },
      ],
    },
```

### Para adicionar um link à página no footer

```js {7-12}
module.exports = {
    // ...
    footer: {
      // ...
      links: [
        {
          title: 'Nome do Título',
          items: [
            {
              label: 'Nome do Link',
              href: 'Link',
            },
            // novo link vem aqui na mesma estrutura
          ],
        },
      ],
    },
```