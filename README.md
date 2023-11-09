Este é um projeto [Next.js](https://nextjs.org/).

## Como Testar

Primeiramente, instale as dependencias do projeto:

```bash
npm install
```

Será necessário criar um arquivo `.env.local` para adicionar as seguintes variaveis

```
NEXT_PUBLIC_API_URL="https://api.github.com/"
NEXT_PUBLIC_GITHUB_TOKEN="SEU-TOKEN"
```

Para gerar o seu token, acesse o link abaixo:
[Link do github tokens](https://github.com/settings/tokens)

Para rodar o projeto localmente, basta executar o comando:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para visualizar o projeto.