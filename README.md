# Página Em Construção

Uma página moderna e responsiva "Em Construção" criada com Next.js que exibe informações da empresa a partir de variáveis de ambiente.

## Características

- Design moderno e minimalista
- Layout responsivo para todos os dispositivos
- Exibe nome da empresa a partir de variável de ambiente
- Link para Instagram configurável
- Estilização com CSS Modules

## Configuração

### Pré-requisitos

- Node.js (versão 14.x ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone [url-do-repositorio]
   cd [nome-da-pasta]
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure o arquivo de ambiente:
   - Faça uma cópia do arquivo `.env.local.example` e renomeie para `.env.local`
   ```bash
   cp .env.local.example .env.local
   ```
   - Edite o arquivo `.env.local` e defina suas variáveis:
     - `NEXT_PUBLIC_COMPANY_NAME`: Nome da sua empresa
     - `NEXT_PUBLIC_INSTAGRAM_URL`: URL do Instagram da sua empresa

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Personalização

Você pode personalizar facilmente o site alterando:

- As variáveis de ambiente no arquivo `.env.local`
- O ícone de construção no componente `ConstructionIcon.js`
- Os estilos no arquivo `styles/Home.module.css`

## Produção

Para gerar uma versão de produção:

```bash
npm run build
npm start
# ou
yarn build
yarn start
```