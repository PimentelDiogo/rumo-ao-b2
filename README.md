# Rumo ao B2

Projeto de estudo de inglês para sair do nível **A2** e alcançar o **B2** (chegando ao C1 na reta final), com um plano de **130 dias de aula** que você faz no seu ritmo: **3, 6 ou 12 meses**. A rotina base é de cerca de 1 hora por dia.

O projeto é um caderno de estudo que roda direto no navegador, sem instalar nada: [pimenteldiogo.github.io/rumo-ao-b2](https://pimenteldiogo.github.io/rumo-ao-b2/) ou abra o [index.html](index.html).

## Objetivo

Chegar ao nível B2 de inglês, validando a evolução com testes periódicos e, ao final, prestando uma prova de certificação (por exemplo, o B2 First).

## Funcionalidades

- **Ritmo ajustável:** plano de 3, 6 ou 12 meses, escolhido num seletor.
- **Adiantar aulas:** puxe a próxima aula para qualquer dia, inclusive sábado e domingo.
- **Revisar temas:** use um dia para rever um assunto já assistido.
- **Resumo para o tutor:** texto pronto para colar no Claude com o que você estudou.
- **Listening no YouTube:** vídeos do mesmo tema das aulas, com link para abrir ou copiar.
- **Progresso salvo:** fica no navegador e, quando disponível, sincroniza com a sua conta.

## Como o plano está organizado

O conteúdo é dividido em 26 "semanas de estudo", cada uma com **10 vídeos** de gramática, vocabulário e situações de fala (*speaking*), seguindo o cronograma de 6 meses do canal [Nação Fluente](https://www.nacaofluente.com/blog/como-aprender-ingles-no-youtube/). Cada dia de aula tem 2 vídeos, o que dá 130 dias de aula.

| Semanas de estudo | Foco |
|-------------------|------|
| 1–8 | Revisão A1–A2 |
| 9–16 | A2–B1 |
| 17–20 | B2 |
| 21–26 | C1 + reforço para a prova |

Na semana do calendário, os dias são divididos assim:

- **Segunda a sexta:** aulas em vídeo, Praktika e podcast
- **Sábado:** revisão da semana
- **Domingo:** livre (teste EF SET nas semanas de checkpoint)

## Escolha seu ritmo

O seletor **Ritmo** define quantos dias de aula cabem em cada dia útil. Em todos os ritmos as 130 aulas são cobertas, e a trilha de semanas, as fases e os checkpoints se ajustam.

| Ritmo | Aulas por dia útil | Duração |
|-------|--------------------|---------|
| 3 meses | 2 dias de aula (4 vídeos) | 13 semanas |
| 6 meses | 1 dia de aula (2 vídeos) | 26 semanas (padrão) |
| 12 meses | 1 dia de aula a cada 2 dias úteis | 52 semanas |

### Adiantar ou revisar

Em qualquer dia (inclusive sábado e domingo) há dois controles:

- **+ Adiantar próxima aula:** puxa a próxima aula ainda não agendada para aquele dia. Marcar o vídeo conta no progresso geral.
- **+ Revisar tema já visto:** escolhe um assunto já assistido e usa o dia para revisá-lo. O menu aparece depois que você marcar alguma aula como feita.

Os dois têm botão **×** para remover.

## Rotina diária (cerca de 1h)

- 20–30 min de conversação com IA no **Praktika** (inglês de negócios)
- Os vídeos do dia: pause e repita as frases em voz alta
- 10 min de **Anki** com as palavras novas
- **Podcast** no carro, na corrida ou durante tarefas domésticas

Podcasts sugeridos: *BBC 6 Minute English*, *Business English Pod* e, a partir da semana de estudo 17, um podcast de tecnologia em inglês (Java ou Flutter).

## Listening (YouTube)

Cada dia de semana sugere até 2 vídeos de uma [playlist de listening A2](https://www.youtube.com/playlist?list=PLhNRdHEdUQexUblCTMd1ATwOd5J4SxtNM) com o mesmo tema das aulas do dia, com link para abrir e botão para copiar. Nem todo tema tem vídeo equivalente; a lista completa fica no painel **Listening A2**.

## Resumo para o tutor

A seção **Resumo das atividades** junta o que você concluiu num texto pronto para colar no Claude:

- **Ainda não enviadas** (padrão): traz só o que você ainda não mandou, então dias atrasados ou extras entram juntos. Depois de enviar, use **Marcar como enviado**.
- **Toda a semana aberta:** resume a semana que você está vendo.
- As atividades são agrupadas pelo dia em que você realmente as marcou.
- Há um campo de **anotações** (dificuldades, dúvidas, frases para testar), que entra no texto.
- O texto pede uma conversa curta em inglês sobre os temas, correção dos erros no final e 5 frases com a gramática nova.

## Revisão de sábado

1. Reler as anotações da semana
2. Fazer o Anki da semana
3. Escrever 5 frases com a gramática nova e mandar para correção
4. Conversa curta de 10 min sobre os temas da semana

## Checkpoints

Testes **EF SET** (90 min, gratuitos) para medir o nível. Ficam no domingo da semana em que termina a respectiva semana de estudo:

| Semana de estudo | Meta |
|------------------|------|
| 8 | Descobrir o nível de partida |
| 16 | B1 firme |
| 20 | B2 com folga, para marcar a prova |
| 26 | Último teste antes da prova |

## Como usar

1. Abra o site e escolha a **data de início** (uma segunda-feira) e o **ritmo**.
2. Marque os vídeos e tarefas conforme avança; o progresso aparece na trilha de semanas.
3. Quando quiser conversar com o tutor, copie o **Resumo das atividades** e cole no Claude.

## Desenvolvimento

O código está em TypeScript (`src/`) e compila para `dist/app.js`, que é o que o `index.html` carrega. O `dist/` fica versionado porque o GitHub Pages publica direto da branch, sem build.

```
npm install
npm run build   # gera dist/app.js
```

Depois de alterar o TypeScript, rode o build antes de fazer o commit.

## Cronogramas em PDF

- [cronograma-3-meses.pdf](cronograma-3-meses.pdf)
- [cronograma-6-meses.pdf](cronograma-6-meses.pdf)
- [cronograma-12-meses.pdf](cronograma-12-meses.pdf)
