# Cuide.Me
Este projeto é uma interface de **login simples** desenvolvida com **React**, hospedada na [Vercel](https://cuideme-react-app.vercel.app/).

## 🧪 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Vercel](https://vercel.com/)
- [Figma](https://www.figma.com/design/DxWpBdgOfYNC2rOi6pcmtJ/Cuideme-Design-System?node-id=4-3&t=tUUrViI5BBBHITnW-1)

## 🌐 Acesso ao Figma

Você pode acessar o Design System:  
🔗 [Figma](https://www.figma.com/design/DxWpBdgOfYNC2rOi6pcmtJ/Cuideme-Design-System?node-id=4-3&t=tUUrViI5BBBHITnW-1)

---

## 🖥️ Como Executar Localmente

Siga os passos abaixo para rodar o projeto na sua máquina local:

### 🔧 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- storybook (opcional)

### 🚀 Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Victor-SB/cuideme-react-app.git
2. **Acesse a pasta do projeto**
   ```bash
   cd cuideme-react-app
3.  **Instale as dependências**
    ```bash
    npm install
4. **Rodar testes**
    ```bash
   npm test    
5. **Inicie o servidor de desenvolvimento**
    ```bash
    npm start
6. **Acesse no navegador**
    ```bash
    Abra o navegador e vá até:
    👉 http://localhost:5173 (para Vite)
    ou
    👉 http://localhost:3000 (para Create React App)
7. **Instalar o Storybook**
    ```bash
    npx storybook@latest init
8. **Iniciar o Storybook**
    ```bash
   npm run storybook
9. **Obs**
   * Dependendo da instalacao do Storybook, pode ser que ele crie um arquivo de configuracao indesejado,
   fazendo com que o restante dos componentes nao aparecam corretamente. Caso isso ocorra,
   delete o arquivo que foi criado em src/stories/Configure.mdx