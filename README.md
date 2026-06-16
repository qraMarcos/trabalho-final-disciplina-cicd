# Trabalho Final - Pipeline CI/CD com GitHub Actions

## Objetivo

Este trabalho tem como objetivo aplicar os conceitos de Integração Contínua (CI) utilizando GitHub Actions em um projeto com testes automatizados.

Para o desenvolvimento da atividade foi reutilizado um projeto criado anteriormente na disciplina de Programação para Automação de Testes, contendo uma classe de serviço de pagamento e testes automatizados implementados com o framework Mocha.

---

## Tecnologias Utilizadas

* GitHub
* GitHub Actions
* Node.js
* npm
* Mocha
* Mocha JUnit Reporter

---

## Estrutura do Projeto

```text
src/
 └── servicoDePagamento.js

test/
 └── servicoDePagamento.test.js

.github/
 └── workflows/
     └── pipeline-ci.yml

reports/
 └── test-results.xml
```

---

## Pipeline de Integração Contínua

A pipeline foi implementada utilizando GitHub Actions e possui três formas de execução:

### Execução por Push

A pipeline é executada automaticamente sempre que ocorre um push para a branch principal (`main`).

```yaml
push:
  branches:
    - main
```

### Execução Manual

A execução manual foi implementada utilizando o gatilho `workflow_dispatch`, permitindo que a pipeline seja iniciada diretamente pela interface do GitHub.

```yaml
workflow_dispatch:
```

### Execução Agendada

A pipeline também possui execução automática diária através do recurso de agendamento (`schedule`).

```yaml
schedule:
  - cron: '0 11 * * *'
```

---

## Fluxo da Pipeline

A execução da pipeline segue as seguintes etapas:

1. Checkout do código-fonte.
2. Configuração do ambiente Node.js.
3. Instalação das dependências do projeto.
4. Execução dos testes automatizados.
5. Geração do relatório de testes no formato JUnit XML.
6. Publicação do relatório como Artifact da execução.

---

## Relatório de Testes

Para atender ao requisito de geração e armazenamento de relatórios, foi utilizado o pacote `mocha-junit-reporter`.

A execução dos testes gera automaticamente o arquivo:

```text
reports/test-results.xml
```

O relatório contém informações como:

* Quantidade de testes executados;
* Quantidade de falhas;
* Tempo de execução;
* Nome dos casos de teste executados.

Exemplo de resultado obtido:

```text
Tests: 5
Failures: 0
```

---

## Armazenamento do Relatório

Após a execução dos testes, o relatório é publicado como Artifact da pipeline utilizando a Action `upload-artifact`.

Dessa forma, o relatório pode ser baixado diretamente pela interface do GitHub Actions para consulta posterior.

Artifact gerado:

```text
relatorio-junit
```

---

## Execução Local

Instalar as dependências:

```bash
npm install
```

Executar os testes:

```bash
npm test
```

Gerar relatório JUnit XML:

```bash
npm run test:junit
```

---

## Resultados Obtidos

Todos os testes automatizados foram executados com sucesso tanto localmente quanto através da pipeline do GitHub Actions.

Resultado da execução:

```text
5 testes executados
0 falhas
```

A pipeline foi executada com sucesso através dos três mecanismos solicitados na atividade:

* Push;
* Execução manual;
* Agendamento.

---

## Conclusão

A atividade permitiu aplicar na prática os conceitos de Integração Contínua utilizando GitHub Actions, automatizando a execução dos testes e a geração de relatórios.

Com a solução implementada, qualquer alteração enviada para o repositório pode ser validada automaticamente, contribuindo para a qualidade e confiabilidade do software.
