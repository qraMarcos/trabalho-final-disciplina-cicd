# Trabalho Final - Pipeline CI/CD com GitHub Actions

## Objetivo

Este trabalho tem como objetivo aplicar os conceitos de Integração Contínua (CI) utilizando GitHub Actions em um projeto com testes automatizados.

Para a realização da atividade, foi reutilizado um projeto desenvolvido anteriormente na disciplina de Programação para Automação de Testes. O projeto contém uma classe responsável pelo gerenciamento de pagamentos e uma suíte de testes automatizados implementada com o framework Mocha.

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
     └── trabalho-final-cicd.yml
```

---

## Pipeline de Integração Contínua

A pipeline foi implementada utilizando GitHub Actions e possui três formas de execução, conforme solicitado na atividade.

### 1. Execução por Push

A pipeline é executada automaticamente sempre que ocorre um push para a branch principal (`main`).

```yaml
push:
  branches:
    - main
```

### 2. Execução Manual

Também é possível executar a pipeline manualmente através da aba **Actions** do GitHub utilizando o gatilho `workflow_dispatch`.

```yaml
workflow_dispatch:
```

### 3. Execução Agendada

Também foi configurada uma execução automática diária utilizando o recurso `schedule` do GitHub Actions.

A expressão cron utilizada foi:

```yaml
schedule:
  - cron: '0 11 * * *'
```

Essa configuração executa a pipeline todos os dias às **11:00 UTC**, que corresponde a **08:00 no horário de Brasília (UTC-3)**.

O objetivo desse tipo de execução é validar periodicamente o projeto mesmo quando não há novas alterações enviadas ao repositório.

---

## Fluxo de Execução da Pipeline

A pipeline executa as seguintes etapas:

1. Realiza o checkout do código-fonte.
2. Configura o ambiente Node.js.
3. Instala as dependências do projeto.
4. Executa os testes automatizados e gera um relatório de testes no formato JUnit XML.
5. Publica o relatório como Artifact da execução.

---

## Testes Automatizados

Os testes foram implementados utilizando o framework Mocha.

Atualmente a suíte de testes possui os seguintes cenários:

* Validar que o pagamento é adicionado com categoria "cara";
* Validar que o pagamento é adicionado com categoria "padrão";
* Validar que retorna apenas o último pagamento realizado;
* Validar que lança erro quando o valor do pagamento for igual a zero;
* Validar que lança erro quando o valor do pagamento for menor ou igual a zero.

Resultado obtido:

```text
5 testes executados
0 falhas
```

Todos os testes foram executados com sucesso tanto localmente quanto no ambiente do GitHub Actions.

---

## Relatório de Testes

Para geração do relatório foi utilizado o pacote:

```text
mocha-junit-reporter
```

O relatório é gerado no formato JUnit XML, amplamente utilizado em pipelines de Integração Contínua.

Arquivo gerado:

```text
reports/test-results.xml
```

O relatório contém informações como:

* Quantidade de testes executados;
* Quantidade de falhas;
* Tempo de execução;
* Casos de teste executados.

Exemplo de resultado:

```xml
<testsuites tests="5" failures="0">
```

---

## Publicação do Relatório

Após a execução dos testes, o relatório é publicado na própria execução da pipeline através do recurso de Artifacts do GitHub Actions.

Artifact gerado:

```text
relatorio-junit
```

Dessa forma, o relatório pode ser baixado e consultado posteriormente diretamente pela interface do GitHub.

---

## Como Executar Localmente

### Instalar as dependências

```bash
npm install
```

### Executar os testes

```bash
npm test
```

### Gerar o relatório JUnit XML

```bash
npm run test:junit
```

---

## Evidências da Execução

As evidências da atividade podem ser visualizadas na aba **Actions** do repositório GitHub, contendo:

* Execução bem-sucedida da pipeline;
* Execução dos testes automatizados;
* Geração do relatório JUnit XML;
* Publicação do Artifact `relatorio-junit`.

---

## Repositório

O código-fonte e a pipeline desenvolvidos para esta atividade estão disponíveis em:

https://github.com/qraMarcos/trabalho-final-disciplina-cicd

---

## Conclusão

Com a implementação desta solução foi possível aplicar na prática os conceitos de Integração Contínua estudados na disciplina.

A utilização do GitHub Actions permitiu automatizar a execução dos testes, disponibilizar relatórios de execução e garantir que alterações enviadas ao repositório sejam validadas automaticamente, contribuindo para a qualidade e confiabilidade do software.
