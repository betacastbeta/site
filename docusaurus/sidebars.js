module.exports = {
  monitoramento_rx: [
    "monitoramento_rx/status_atualizacao",
    {
      type: "category",
      label: "Análise de Tendência",
      collapsed: false,
      items: ["monitoramento_rx/analise_tendencia/geral",
              "monitoramento_rx/analise_tendencia/estrutura_organizacional",
              "monitoramento_rx/analise_tendencia/pessoal",
              "monitoramento_rx/analise_tendencia/custeio_administrativo",
              "monitoramento_rx/analise_tendencia/solucoes_modernizacao",
              "monitoramento_rx/analise_tendencia/transformacao_digital",
              "monitoramento_rx/analise_tendencia/patrimonio_uniao"],
    },
  ],
  fun: [
    "fun/xkcd",
    "fun/dilbert",
    "fun/calvin",
    "fun/vida_programador",
    "fun/garfield",
    "fun/peanuts",
    "fun/trex"
  ],
  compartilhe: [
    "compartilhe/intro",
    "compartilhe/compartilhe-indice",
    {
      type: "category",
      label: "Conhecimento",
      collapsed: false,
      items: ["compartilhe/usando_locale", "how-to/nova-pagina"],
    }
  ],
  sprints: [
    "sprints/sprint-intro",
    {
      type: "category",
      label: "Sprints",
      collapsed: false,
      items: ["sprints/sprint-10",
              "sprints/sprint-11",
              "sprints/sprint-12"],
    }
  ],
  recomendacoes: [
    "recomendacoes/recomendacoes-hello",
    "recomendacoes/ted",
    "recomendacoes/seriados",
  ],
  how_to: [
    "how-to/how_to",
    "how-to/nova-pagina",
    {
      type: "category",
      label: "Exemplos",
      collapsed: false,
      items: ['examples/doc1', 'examples/doc2', 'examples/doc3', 'examples/mdx'],
    },
  ],
};