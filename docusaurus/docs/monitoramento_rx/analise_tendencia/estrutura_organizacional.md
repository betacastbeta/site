---
id: estrutura_organizacional
title: Estrutura Organizacional
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

Os dados de Estrutura Organizacional são extraídos do `Quartzo/SERPRO` do banco
`SIORG`.

**Responsável pela atualização**: [Raimundo Correia](mailto:raimundo.correia@planejamento.gov.br)

## Valor Bruto na Última Carga

<iframe
  width="400"
  height="300"
  seamless
  frameBorder="0"
  scrolling="no"
  src="http://etl-cginflab.mp.intra:8088/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22metric%22%3A%22metrics%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22big_number%22%2C%22slice_id%22%3A9%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22tempo_dia_date%22%2C%22time_grain_sqla%22%3A%22P1D%22%2C%22time_range%22%3A%22No+filter%22%2C%22metric%22%3A%7B%22aggregate%22%3A%22SUM%22%2C%22column%22%3A%7B%22column_name%22%3A%22valor%22%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22id%22%3A12%2C%22is_dttm%22%3Afalse%2C%22python_date_format%22%3Anull%2C%22type%22%3A%22FLOAT%2853%29%22%2C%22verbose_name%22%3Anull%7D%2C%22expressionType%22%3A%22SIMPLE%22%2C%22hasCustomLabel%22%3Atrue%2C%22isNew%22%3Afalse%2C%22label%22%3A%22Valor+no+%C3%9Altimo+M%C3%AAs%22%2C%22optionName%22%3A%22metric_omkffkb6mj_2q8p5cyqevy%22%2C%22sqlExpression%22%3Anull%7D%2C%22adhoc_filters%22%3A%5B%7B%22clause%22%3A%22WHERE%22%2C%22comparator%22%3A%2220001%22%2C%22expressionType%22%3A%22SIMPLE%22%2C%22filterOptionName%22%3A%22filter_g1km0k1ekh5_a5bktzykypl%22%2C%22fromFormData%22%3Atrue%2C%22isExtra%22%3Afalse%2C%22operator%22%3A%22%3D%3D%22%2C%22sqlExpression%22%3Anull%2C%22subject%22%3A%22informacao_tipo_id%22%7D%5D%2C%22y_axis_format%22%3A%22SMART_NUMBER%22%2C%22show_trend_line%22%3Atrue%2C%22start_y_axis_at_zero%22%3Atrue%2C%22color_picker%22%3A%7B%22a%22%3A1%2C%22b%22%3A224%2C%22g%22%3A240%2C%22r%22%3A14%7D%2C%22header_font_size%22%3A0.5%2C%22subheader_font_size%22%3A0.125%2C%22rolling_type%22%3A%22None%22%7D&standalone=true&height=300"
>
</iframe>

## Variação de Valor na Última Carga

<iframe
  width="400"
  height="300"
  seamless
  frameBorder="0"
  scrolling="no"
  src="http://etl-cginflab.mp.intra:8088/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22metric%22%3A%22metrics%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22big_number%22%2C%22slice_id%22%3A4%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22tempo_dia_date%22%2C%22time_grain_sqla%22%3A%22P1D%22%2C%22time_range%22%3A%22No+filter%22%2C%22metric%22%3A%7B%22aggregate%22%3A%22SUM%22%2C%22column%22%3A%7B%22column_name%22%3A%22diff_valor%22%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22id%22%3A8%2C%22is_dttm%22%3Afalse%2C%22type%22%3A%22FLOAT%2853%29%22%2C%22verbose_name%22%3Anull%7D%2C%22expressionType%22%3A%22SIMPLE%22%2C%22fromFormData%22%3Atrue%2C%22hasCustomLabel%22%3Atrue%2C%22label%22%3A%22Diferen%C3%A7a+de+Valor+com+%C3%9Altimo+M%C3%AAs%22%2C%22optionName%22%3A%22metric_omkffkb6mj_2q8p5cyqevy%22%2C%22sqlExpression%22%3Anull%7D%2C%22adhoc_filters%22%3A%5B%7B%22clause%22%3A%22WHERE%22%2C%22comparator%22%3A%2220001%22%2C%22expressionType%22%3A%22SIMPLE%22%2C%22filterOptionName%22%3A%22filter_g1km0k1ekh5_a5bktzykypl%22%2C%22fromFormData%22%3Atrue%2C%22isExtra%22%3Afalse%2C%22operator%22%3A%22%3D%3D%22%2C%22sqlExpression%22%3Anull%2C%22subject%22%3A%22informacao_tipo_id%22%7D%5D%2C%22y_axis_format%22%3A%22SMART_NUMBER%22%2C%22show_trend_line%22%3Atrue%2C%22start_y_axis_at_zero%22%3Atrue%2C%22color_picker%22%3A%7B%22a%22%3A1%2C%22b%22%3A197%2C%22g%22%3A0%2C%22r%22%3A209%7D%2C%22header_font_size%22%3A0.5%2C%22subheader_font_size%22%3A0.125%2C%22rolling_type%22%3A%22None%22%7D&standalone=true&height=300"
>
</iframe>

## Variação Percentual na Última Carga

<iframe
  width="400"
  height="300"
  seamless
  frameBorder="0"
  scrolling="no"
  src="http://etl-cginflab.mp.intra:8088/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22metric%22%3A%22metrics%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22big_number%22%2C%22slice_id%22%3A3%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22tempo_dia_date%22%2C%22time_grain_sqla%22%3A%22P1D%22%2C%22time_range%22%3A%22No+filter%22%2C%22metric%22%3A%7B%22aggregate%22%3A%22SUM%22%2C%22column%22%3A%7B%22column_name%22%3A%22perc_diff_valor%22%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22id%22%3A9%2C%22is_dttm%22%3Afalse%2C%22type%22%3A%22FLOAT%2853%29%22%2C%22verbose_name%22%3Anull%7D%2C%22expressionType%22%3A%22SIMPLE%22%2C%22fromFormData%22%3Atrue%2C%22hasCustomLabel%22%3Atrue%2C%22label%22%3A%22Diferen%C3%A7a+Percentual+com+%C3%9Altimo+M%C3%AAs%22%2C%22optionName%22%3A%22metric_omkffkb6mj_2q8p5cyqevy%22%2C%22sqlExpression%22%3Anull%7D%2C%22adhoc_filters%22%3A%5B%7B%22clause%22%3A%22WHERE%22%2C%22comparator%22%3A%2220001%22%2C%22expressionType%22%3A%22SIMPLE%22%2C%22filterOptionName%22%3A%22filter_g1km0k1ekh5_a5bktzykypl%22%2C%22fromFormData%22%3Atrue%2C%22isExtra%22%3Afalse%2C%22operator%22%3A%22%3D%3D%22%2C%22sqlExpression%22%3Anull%2C%22subject%22%3A%22informacao_tipo_id%22%7D%5D%2C%22y_axis_format%22%3A%22.3%25%22%2C%22show_trend_line%22%3Atrue%2C%22start_y_axis_at_zero%22%3Atrue%2C%22color_picker%22%3A%7B%22a%22%3A1%2C%22b%22%3A223%2C%22g%22%3A240%2C%22r%22%3A20%7D%2C%22header_font_size%22%3A0.5%2C%22subheader_font_size%22%3A0.125%2C%22rolling_type%22%3A%22None%22%7D&standalone=true&height=300"
>
</iframe>

## Variação de Valor e Percentual no Tempo

<iframe
  width="807"
  height="600"
  seamless
  frameBorder="0"
  scrolling="no"
  src="http://etl-cginflab.mp.intra:8088/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22metric%22%3A%22metrics%22%2C%22metric_2%22%3A%22metrics%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22dual_line%22%2C%22slice_id%22%3A8%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22tempo_dia_date%22%2C%22time_grain_sqla%22%3A%22P1D%22%2C%22time_range%22%3A%22No+filter%22%2C%22color_scheme%22%3A%22lyftColors%22%2C%22label_colors%22%3A%7B%7D%2C%22x_axis_format%22%3A%22smart_date%22%2C%22metric%22%3A%7B%22aggregate%22%3A%22SUM%22%2C%22column%22%3A%7B%22column_name%22%3A%22diff_valor%22%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22id%22%3A13%2C%22is_dttm%22%3Afalse%2C%22python_date_format%22%3Anull%2C%22type%22%3A%22FLOAT%2853%29%22%2C%22verbose_name%22%3Anull%7D%2C%22expressionType%22%3A%22SIMPLE%22%2C%22hasCustomLabel%22%3Atrue%2C%22isNew%22%3Afalse%2C%22label%22%3A%22Varia%C3%A7%C3%A3o+de+Valor%22%2C%22optionName%22%3A%22metric_h27v0hp4het_ia8gb3weljh%22%2C%22sqlExpression%22%3Anull%7D%2C%22y_axis_format%22%3A%22SMART_NUMBER%22%2C%22metric_2%22%3A%7B%22aggregate%22%3A%22SUM%22%2C%22column%22%3A%7B%22column_name%22%3A%22perc_diff_valor%22%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22id%22%3A14%2C%22is_dttm%22%3Afalse%2C%22optionName%22%3A%22_col_perc_diff_valor%22%2C%22python_date_format%22%3Anull%2C%22type%22%3A%22FLOAT%2853%29%22%2C%22verbose_name%22%3Anull%7D%2C%22expressionType%22%3A%22SIMPLE%22%2C%22hasCustomLabel%22%3Atrue%2C%22isNew%22%3Afalse%2C%22label%22%3A%22Varia%C3%A7%C3%A3o+Percentual%22%2C%22optionName%22%3A%22metric_pizjyzkmpn_j2xd1d6w84%22%2C%22sqlExpression%22%3Anull%7D%2C%22y_axis_2_format%22%3A%22%2C.1%25%22%2C%22adhoc_filters%22%3A%5B%7B%22clause%22%3A%22WHERE%22%2C%22comparator%22%3A%2220001%22%2C%22expressionType%22%3A%22SIMPLE%22%2C%22filterOptionName%22%3A%22filter_trap1lcv83_76ghwm16g2t%22%2C%22isExtra%22%3Afalse%2C%22isNew%22%3Afalse%2C%22operator%22%3A%22%3D%3D%22%2C%22sqlExpression%22%3Anull%2C%22subject%22%3A%22informacao_tipo_id%22%7D%5D%2C%22annotation_layers%22%3A%5B%5D%7D&standalone=true&height=600"
>
</iframe>