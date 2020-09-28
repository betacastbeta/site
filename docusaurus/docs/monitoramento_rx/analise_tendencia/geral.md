---
id: geral
title: Olá!
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

Os gráficos nessa página servem como indicativos para validar e acompanhar o
comportamento temporal dos dados apresentados no `Painel de Raio-X`.

Têm como objetivo promover a transparência na qualidade dos dados e possibilitar
a identificação de alterações suspeitas e comportamentos anômalos na base de
dados do `Painel de Raio-X`.

## Total de Registros por Mês por Tabela

<iframe
  width="807"
  height="600"
  seamless
  frameBorder="0"
  scrolling="no"
  src="http://etl-cginflab.mp.intra:8088/superset/explore/?form_data=%7B%22queryFields%22%3A%7B%22metrics%22%3A%22metrics%22%2C%22groupby%22%3A%22groupby%22%7D%2C%22datasource%22%3A%221__table%22%2C%22viz_type%22%3A%22line%22%2C%22slice_id%22%3A7%2C%22url_params%22%3A%7B%7D%2C%22time_range_endpoints%22%3A%5B%22inclusive%22%2C%22exclusive%22%5D%2C%22granularity_sqla%22%3A%22tempo_dia_date%22%2C%22time_grain_sqla%22%3A%22P1D%22%2C%22time_range%22%3A%22No+filter%22%2C%22metrics%22%3A%5B%7B%22aggregate%22%3A%22SUM%22%2C%22column%22%3A%7B%22column_name%22%3A%22contagem%22%2C%22description%22%3Anull%2C%22expression%22%3Anull%2C%22filterable%22%3Atrue%2C%22groupby%22%3Atrue%2C%22id%22%3A6%2C%22is_dttm%22%3Afalse%2C%22optionName%22%3A%22_col_contagem%22%2C%22type%22%3A%22INTEGER%22%2C%22verbose_name%22%3Anull%7D%2C%22expressionType%22%3A%22SIMPLE%22%2C%22fromFormData%22%3Afalse%2C%22hasCustomLabel%22%3Afalse%2C%22label%22%3A%22SUM%28contagem%29%22%2C%22optionName%22%3A%22metric_i0uegmk153f_i6losgoi6q9%22%2C%22sqlExpression%22%3Anull%7D%5D%2C%22adhoc_filters%22%3A%5B%7B%22clause%22%3A%22WHERE%22%2C%22comparator%22%3A%22ft_harmonizacao_basica%22%2C%22expressionType%22%3A%22SIMPLE%22%2C%22filterOptionName%22%3A%22filter_2i6h14r53ox_d1hn85lv0h7%22%2C%22fromFormData%22%3Atrue%2C%22isExtra%22%3Afalse%2C%22operator%22%3A%22%21%3D%22%2C%22sqlExpression%22%3Anull%2C%22subject%22%3A%22fct_table%22%7D%5D%2C%22groupby%22%3A%5B%22fct_table%22%5D%2C%22timeseries_limit_metric%22%3Anull%2C%22order_desc%22%3Atrue%2C%22contribution%22%3Afalse%2C%22row_limit%22%3A10000%2C%22color_scheme%22%3A%22lyftColors%22%2C%22label_colors%22%3A%7B%7D%2C%22show_brush%22%3A%22auto%22%2C%22send_time_range%22%3Afalse%2C%22show_legend%22%3Afalse%2C%22rich_tooltip%22%3Atrue%2C%22show_markers%22%3Atrue%2C%22line_interpolation%22%3A%22basis%22%2C%22x_axis_label%22%3A%22%22%2C%22bottom_margin%22%3A%22auto%22%2C%22x_ticks_layout%22%3A%22auto%22%2C%22x_axis_format%22%3A%22smart_date%22%2C%22x_axis_showminmax%22%3Atrue%2C%22y_axis_label%22%3A%22Quantidade+de+Registros%22%2C%22left_margin%22%3A%22auto%22%2C%22y_axis_showminmax%22%3Atrue%2C%22y_log_scale%22%3Afalse%2C%22y_axis_format%22%3A%22SMART_NUMBER%22%2C%22y_axis_bounds%22%3A%5Bnull%2Cnull%5D%2C%22rolling_type%22%3A%22None%22%2C%22comparison_type%22%3A%22values%22%2C%22resample_rule%22%3Anull%2C%22resample_method%22%3Anull%2C%22annotation_layers%22%3A%5B%5D%7D&standalone=true&height=600"
>
</iframe>
