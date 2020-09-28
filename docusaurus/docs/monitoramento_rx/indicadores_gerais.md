---
id: status_atualizacao
title: Status de Atualização
---

:::note

A integração com o Superset (software que gera os gráficos) pode perder a
sessão e algum gráfico não aparecer.

**Para corrigir:** clique novamente no link ou atualize a página.

:::

:::note

Estamos evoluíndo a infraestrutura e pode ser que a atualização de página
redirecione para `Airflow 404 = lots of circles`.

**Para corrigir:** altere manualmente o endereço da página de

http://etl-cginflab.mp.intra/ > http://etl-cginflab.mp.intra:8082

Isso será corrigido em breve. 🙏

:::


Temos como objetivo garantir a atualização do banco de dados para o `Painel de
Raio-X` até o dia `20 do mês`. Como rodamos as cargas em fontes de dados pré-processadas, os dados do `Painel de Raio-X` são sempre relativos ao mês anterior.

> _Exemplo:_ Para o mês de **Junho**, temos o objetivo de até o dia **20 de Junho**
> ter os dados para o `Painel de Raio-X` atualizados com os dados referentes ao
> **último dia de Maio**.

<!-- ``` jsx live
function Time() {
  const dt = new Date();
  const next_upd = new Date(Date.UTC(dt.getFullYear(), dt.getMonth() + 1, 20, 0, 0, 0));
  return (
      <h3>Hoje é dia {dt.toLocaleDateString('pt-BR')}. Próxima atualização em <span style={{color: 'red'}}>{Math.round((next_upd - dt)/(1000*60*60*24))}</span> dias.</h3>
  );
}
``` -->

[Dashboard consolidado](http://etl-cginflab.mp.intra:8088/superset/dashboard/1/)

<iframe
  width="600"
  height="400"
  seamless
  frameBorder="0"
  scrolling="no"
  src="http://etl-cginflab.mp.intra:8088/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22metric%22%3A%22metrics%22%7D%2C%22datasource%22%3A%222__table%22%2C%22viz_type%22%3A%22big_number_total%22%2C%22slice_id%22%3A2%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22max_data_referencia%22%2C%22time_range%22%3A%22No+filter%22%2C%22metric%22%3A%22count%22%2C%22adhoc_filters%22%3A%5B%7B%22clause%22%3A%22WHERE%22%2C%22comparator%22%3A%22ft_harmonizacao_basica%22%2C%22expressionType%22%3A%22SIMPLE%22%2C%22filterOptionName%22%3A%22filter_ssl5axanyct_w9x5qfcyo5%22%2C%22fromFormData%22%3Atrue%2C%22isExtra%22%3Afalse%2C%22operator%22%3A%22%21%3D%22%2C%22sqlExpression%22%3Anull%2C%22subject%22%3A%22fct_table%22%7D%5D%2C%22subheader%22%3A%22Total+de+m%C3%A9tricas+utilizadas+no+Painel+de+Raio-X%22%2C%22y_axis_format%22%3A%22SMART_NUMBER%22%2C%22header_font_size%22%3A0.5%2C%22subheader_font_size%22%3A0.125%7D&standalone=true&height=400"
>
</iframe>

### Percentual de Atualização

<iframe
  width="600"
  height="400"
  seamless
  frameBorder="0"
  scrolling="no"
  src="http://etl-cginflab.mp.intra:8088/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22metric%22%3A%22metrics%22%2C%22groupby%22%3A%22groupby%22%7D%2C%22datasource%22%3A%222__table%22%2C%22viz_type%22%3A%22pie%22%2C%22slice_id%22%3A1%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22max_data_referencia%22%2C%22time_range%22%3A%22No+filter%22%2C%22metric%22%3A%22count%22%2C%22adhoc_filters%22%3A%5B%7B%22clause%22%3A%22WHERE%22%2C%22comparator%22%3A%22ft_harmonizacao_basica%22%2C%22expressionType%22%3A%22SIMPLE%22%2C%22filterOptionName%22%3A%22filter_t1aymcpw3o_h88zzjh53rf%22%2C%22fromFormData%22%3Atrue%2C%22isExtra%22%3Afalse%2C%22operator%22%3A%22%21%3D%22%2C%22sqlExpression%22%3Anull%2C%22subject%22%3A%22fct_table%22%7D%5D%2C%22groupby%22%3A%5B%22updated%22%5D%2C%22row_limit%22%3A10000%2C%22pie_label_type%22%3A%22percent%22%2C%22number_format%22%3A%22SMART_NUMBER%22%2C%22donut%22%3Afalse%2C%22show_legend%22%3Afalse%2C%22show_labels%22%3Atrue%2C%22labels_outside%22%3Atrue%2C%22color_scheme%22%3A%22lyftColors%22%2C%22label_colors%22%3A%7B%7D%7D&standalone=true&height=400"
>
</iframe>

### Status de Atualização por Métrica

<iframe
  width="807"
  height="500"
  seamless
  frameBorder="0"
  scrolling="no"
  src="http://etl-cginflab.mp.intra:8088/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22groupby%22%3A%22groupby%22%2C%22metrics%22%3A%22metrics%22%7D%2C%22datasource%22%3A%222__table%22%2C%22viz_type%22%3A%22table%22%2C%22slice_id%22%3A5%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22max_data_referencia%22%2C%22time_grain_sqla%22%3A%22P1D%22%2C%22time_range%22%3A%22No+filter%22%2C%22query_mode%22%3A%22raw%22%2C%22groupby%22%3A%5B%22fct_table%22%2C%22informacao_tipo_descricao%22%2C%22max_data_referencia%22%5D%2C%22metrics%22%3A%5B%5D%2C%22all_columns%22%3A%5B%22fct_table%22%2C%22informacao_tipo_descricao%22%2C%22max_data_referencia%22%2C%22dag_id%22%2C%22start_date%22%2C%22owners%22%5D%2C%22percent_metrics%22%3A%5B%5D%2C%22timeseries_limit_metric%22%3A%7B%22aggregate%22%3A%22SUM%22%2C%22column%22%3A%7B%22column_name%22%3A%22updated%22%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22id%22%3A16%2C%22is_dttm%22%3Afalse%2C%22optionName%22%3A%22_col_updated%22%2C%22type%22%3A%22INTEGER%22%2C%22verbose_name%22%3Anull%7D%2C%22expressionType%22%3A%22SIMPLE%22%2C%22fromFormData%22%3Atrue%2C%22hasCustomLabel%22%3Atrue%2C%22label%22%3A%22atualizado%3F%22%2C%22optionName%22%3A%22metric_4giapmm4yfs_zxs8hqqs9f%22%2C%22sqlExpression%22%3Anull%7D%2C%22order_by_cols%22%3A%5B%22%5B%5C%22max_data_referencia%5C%22%2C+true%5D%22%5D%2C%22row_limit%22%3A10000%2C%22include_time%22%3Afalse%2C%22order_desc%22%3Afalse%2C%22adhoc_filters%22%3A%5B%7B%22clause%22%3A%22WHERE%22%2C%22comparator%22%3A%22ft_harmonizacao_basica%22%2C%22expressionType%22%3A%22SIMPLE%22%2C%22filterOptionName%22%3A%22filter_i62n9w1sxbn_gx2f8nroiff%22%2C%22fromFormData%22%3Atrue%2C%22isExtra%22%3Afalse%2C%22operator%22%3A%22%21%3D%22%2C%22sqlExpression%22%3Anull%2C%22subject%22%3A%22fct_table%22%7D%5D%2C%22table_timestamp_format%22%3A%22%25d%2F%25m%2F%25Y+%25H%3A%25M%22%2C%22page_length%22%3A0%2C%22include_search%22%3Atrue%2C%22table_filter%22%3Atrue%2C%22align_pn%22%3Afalse%2C%22color_pn%22%3Atrue%2C%22show_cell_bars%22%3Atrue%7D&standalone=true&height=500"
>
</iframe>

## Comparativo de Registros

### Quantidade de Registros por Tabela no Último Mês

<iframe
  width="807"
  height="700"
  seamless
  frameBorder="0"
  scrolling="no"
  src="http://etl-cginflab.mp.intra:8088/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22metrics%22%3A%22metrics%22%2C%22groupby%22%3A%22groupby%22%2C%22columns%22%3A%22groupby%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22dist_bar%22%2C%22slice_id%22%3A6%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22tempo_dia_date%22%2C%22time_range%22%3A%22Last+month%22%2C%22metrics%22%3A%5B%7B%22aggregate%22%3A%22SUM%22%2C%22column%22%3A%7B%22column_name%22%3A%22contagem%22%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22id%22%3A6%2C%22is_dttm%22%3Afalse%2C%22optionName%22%3A%22_col_contagem%22%2C%22type%22%3A%22INTEGER%22%2C%22verbose_name%22%3Anull%7D%2C%22expressionType%22%3A%22SIMPLE%22%2C%22fromFormData%22%3Atrue%2C%22hasCustomLabel%22%3Atrue%2C%22label%22%3A%22Quantidade+de+Registros+por+Tabela+no+M%C3%AAs%22%2C%22optionName%22%3A%22metric_56a42014qtb_dspydk4gpsn%22%2C%22sqlExpression%22%3Anull%7D%5D%2C%22adhoc_filters%22%3A%5B%5D%2C%22groupby%22%3A%5B%22fct_table%22%5D%2C%22columns%22%3A%5B%5D%2C%22row_limit%22%3A10000%2C%22contribution%22%3Afalse%2C%22color_scheme%22%3A%22lyftColors%22%2C%22label_colors%22%3A%7B%7D%2C%22show_legend%22%3Afalse%2C%22show_bar_value%22%3Atrue%2C%22bar_stacked%22%3Afalse%2C%22order_bars%22%3Afalse%2C%22y_axis_format%22%3Anull%2C%22y_axis_label%22%3A%22%22%2C%22show_controls%22%3Afalse%2C%22x_axis_label%22%3A%22%22%2C%22bottom_margin%22%3A%22auto%22%2C%22x_ticks_layout%22%3A%2245%C2%B0%22%2C%22reduce_x_ticks%22%3Afalse%7D&standalone=true&height=700"
>
</iframe>

## Links das DAGs no Airflow
| Tabela                                    | Métrica                                                      | Link DAG Airflow |
| ----------------------------------------  | -----------------------------------------------------------  | ---------------- |
| ft_harmonizacao_basica                    | N/A                                                          | [raio-x_gera_harmonizacao_basica](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_gera_harmonizacao_basica) |
| ft_informacoes_custeio                    | N/A                                                          | [raio-x_custeio_administrativo](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_custeio_administrativo) |
| ft_informacoes_orcamento_tg               | N/A                                                          | [N/A](http://etl-cginflab.mp.intra/tree?dag_id=N/A) |
| ft_informacoes_servicos_compart           | quantidade de assentamentos pessoais digitalizados           | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_servicos_compart           | quantidade de assentamentos pessoais não digitalizados       | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_servicos_compart           | quantidade total de assentamentos pessoais                   | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_servicos_compart           | percentual de assentamentos pessoais digitalizados           | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_servicos_compart           | adesão ao protocolo integrado                                | [raio-x_protocolo_integrado](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_protocolo_integrado) |
| ft_informacoes_servicos_compart           | utiliza sistema de processo eletrônico                       | [etl_raiox_adesao_barramento_e_sei_dag](http://etl-cginflab.mp.intra/tree?dag_id=etl_raiox_adesao_barramento_e_sei_dag) |
| ft_informacoes_servicos_compart           | adesão ao barramento                                         | [etl_raiox_adesao_barramento_e_sei_dag](http://etl-cginflab.mp.intra/tree?dag_id=etl_raiox_adesao_barramento_e_sei_dag) |
| ft_informacoes_servicos_compart           | utiliza o taxi gov                                           | [raio-x_taxigov_almox_virtual](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_taxigov_almox_virtual) |
| ft_informacoes_servicos_compart           | utiliza o almoxarifado virtual                               | [raio-x_taxigov_almox_virtual](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_taxigov_almox_virtual) |
| ft_informacoes_servicos_compart           | utiliza a rede mais brasil                                   | [raio-x_rede_mais_brasil](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_rede_mais_brasil) |
| ft_informacoes_servicos_compart           | adesão ao transformagov                                      | [raio-x_transformagov_PEI](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_transformagov_PEI) |
| ft_informacoes_servicos_compart           | possui planejamento estratégico institucional                | [raio-x_transformagov_PEI](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_transformagov_PEI) |
| ft_informacoes_servicos_digitais          | quantidade de serviços digitais                              | [raio-x_transformacao_digital](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_transformacao_digital) |
| ft_informacoes_servicos_digitais          | percentual de etapas digitais                                | [raio-x_transformacao_digital](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_transformacao_digital) |
| ft_informacoes_servicos_digitais          | valor da economia potencial do governo                       | [raio-x_transformacao_digital](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_transformacao_digital) |
| ft_informacoes_servicos_digitais          | valor da economia potencial da sociedade                     | [raio-x_transformacao_digital](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_transformacao_digital) |
| ft_informacoes_servicos_digitais          | quantidade de beneficiados por ano                           | [raio-x_transformacao_digital](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_transformacao_digital) |
| ft_informacoes_servicos_digitais          | valor da economia anual do governo                           | [raio-x_transformacao_digital](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_transformacao_digital) |
| ft_informacoes_servicos_digitais          | valor da economia anual da sociedade                         | [raio-x_transformacao_digital](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_transformacao_digital) |
| ft_informacoes_servicos_digitais          | valor do investimento                                        | [raio-x_transformacao_digital](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_transformacao_digital) |
| ft_informacoes_servicos_digitais          | previsao de entrega trimestre                                | [raio-x_transformacao_digital](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_transformacao_digital) |
| ft_informacoes_siafi                      | dotacao atualizada                                           | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | dotacao inicial                                              | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | credito disponivel                                           | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | despesas empenhadas (controle empenho)                       | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | despesas liquidadas (controle empenho)                       | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | despesas pagas (controle empenho)                            | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | credito indisponivel                                         | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | despesas empenhadas a liquidar (controle emp)                | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | restos a pagar pagos (proc e n proc)                         | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | restos a pagar a pagar (proc e n proc)                       | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | despesas liquidadas a pagar(controle empenho)                | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | projeto inicial da loa - fixacao despesa                     | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | restos a pagar inscritos (proc e n proc)                     | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | restos a pagar cancelados (proc e n proc)                    | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | valor da emenda parlamentar                                  | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | valor emepnhado de emenda parlamentar                        | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | valor liquidado da emenda parlamentar                        | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siafi                      | valor pago da emenda parlamentar                             | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siape                      | quantidade de cargos alocados                                | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siape                      | quantidade de cargos comissionados ocupados                  | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siape                      | remuneração de servidores ocupantes de cargos comissionados  | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siape                      | rendimento de servidores ocupantes de cargos comissionados   | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siape                      | quantidade de servidores da força de trabalho                | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siape                      | remuneração de servidores da força de trabalho               | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siape                      | rendimento de servidores da força de trabalho                | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siape                      | quantidade de servidores cedidos                             | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siape                      | quantidade de cargos efetivos existentes                     | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siape                      | quantidade de cargos efetivos no banco reserva - sipec       | [raio-x_pgg_executa_todas_as_cargas](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_pgg_executa_todas_as_cargas) |
| ft_informacoes_siape_afastamento          | índice de afastamento do órgao                               | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_afastamento          | índice de afastamento geral                                  | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_afastamento          | jt afastamento                                               | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_afastamento          | jt ano                                                       | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_afastamento          | quantidade de servidores afastados                           | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_afastamento          | quantidade da força de trabalho afastada                     | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_alocacao_servidores  | total de servidores cedidos para apf                         | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_alocacao_servidores  | total de servidores cedidos para outros poderes/esferas      | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_alocacao_servidores  | total de servidores cedidos                                  | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_alocacao_servidores  | total de servidores do quadro de pessoal                     | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_alocacao_servidores  | total de estagiários                                         | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_apos_hist            | N/A                                                          | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_cargo_carreira       | total de vagas distribuídas por cargo/carreira               | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_siape_prev_apos_10aa       | quantidade de previsão de aposentados em 10 anos             | [raio-x_sgp_PEP_SAS](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_sgp_PEP_SAS) |
| ft_informacoes_spu                        | N/A                                                          | [raio-x_patrimonio_uniao](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_patrimonio_uniao) |
| ft_informacoes_spu                        | N/A                                                          | [raio-x_patrimonio_uniao](http://etl-cginflab.mp.intra/tree?dag_id=raio-x_patrimonio_uniao) |
