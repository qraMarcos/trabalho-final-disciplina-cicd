# Serviço de Pagamento

Trabalho de conclusão de disciplina desenvolvido em JavaScript.

## Objetivo

Criar uma classe responsável por:

- Realizar pagamentos
- Consultar o último pagamento realizado

Os pagamentos são armazenados em uma lista e possuem:

- Código de Barras
- Empresa
- Valor
- Categoria

A categoria é definida automaticamente:

- `cara` → valor maior que 100
- `padrão` → valor menor ou igual a 100

---

## Estrutura do Projeto

```text
src/
└── servicoDePagamento.js

test/
└── servicoDePagamento.test.js
