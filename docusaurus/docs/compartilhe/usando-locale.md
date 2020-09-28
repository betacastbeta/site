---
id: usando_locale
title: Usando o módulo locale do Python
---


> **Autor:** [Augusto Herrmann](mailto:augusto.herrmann@planejamento.gov.br)
> em 20/08/2020

Para converter dados à moda brasileira.

```python
import locale
locale.setlocale(locale.LC_ALL, 'pt_BR.UTF-8')

# [output] 'pt_BR.UTF-8'
```

## Convertendo números

```python
locale.atof('1.000')

# [output] 1000.0
```

```python
locale.atof('0,5')

# [output] 0.5
```

```python
locale.atof('2.000,1')

# [output] 2000.1
```

## Moedas

Também pode obter a string de moedas

```python
locale.currency(10.99)

# [output] 'R$ 10,99'
```

## Meses e dias da semana

```python
from datetime import datetime
```

### Dia da semana

```python
datetime.now().strftime('%a')

# [output] 'qui'
```

```python
datetime.strptime('quarta', '%A')

# [output] datetime.datetime(1900, 1, 1, 0, 0)
```

### Mês

```python
datetime.now().strftime('%B')

# [output] 'agosto'
```

```python
datetime.strptime('ago/2019', '%b/%Y')

# [output] datetime.datetime(2019, 8, 1, 0, 0)
```

