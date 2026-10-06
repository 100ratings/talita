# Tita, a Pata de Talita

Página estática responsiva para o exemplo de texto da 3ª série.

## Arquivos

- `index.html` — conteúdo da história e estrutura da página.
- `styles.css` — visual, fonte maior e responsividade.
- `script.js` — truque secreto ativado ao pressionar a imagem.
- `chatgpt.png` — ilustração dos patinhos.

## Truque secreto

Ao manter o dedo ou o botão do mouse pressionado sobre os patinhos, o texto da história muda temporariamente para a versão secreta. Ao soltar, o texto original volta.

A ilustração agora é exibida como **imagem de fundo do botão**, e não como uma tag `<img>`. Isso evita que o iPhone abra o menu de “Salvar no App Fotos”, “Compartilhar” e “Copiar” durante a pressão longa. O menu de contexto também é bloqueado pelo JavaScript.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie `index.html`, `styles.css`, `script.js` e `chatgpt.png` para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**, escolha a branch `main` e a pasta `/ (root)`.
5. Salve e aguarde o GitHub gerar o endereço da página.

A página usa `100svh` e `overflow: hidden` para manter o conteúdo visível sem barra de rolagem no celular.
