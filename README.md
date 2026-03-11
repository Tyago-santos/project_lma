![Logo](public/logo.png)

📄 **Acompanhamento de Pessoas**

---

## 🎯 Objetivo

Este projeto foi desenvolvido para **relatar e acompanhar o progresso das pessoas** atendidas pelos missionários da Igreja de Jesus Cristo dos Santos dos Últimos Dias.  
Com a aplicação, colaboradores e membros que trabalham junto aos missionários conseguem:

- Visualizar evolução pessoal
- Acompanhar metas e planos
- Conferir desempenho semanal 🎯
- Organizar visualizações por unidade da igreja (organização)

O sistema também permite monitorar o trabalho dos missionários em tempo real.

---

## 📱 Ecosistema

Além da interface web principal, há um **aplicativo React/Expo** onde (repositório disponível em https://github.com/Tyago-santos/lma-mobile):

- Usuários podem **inserir todos os planos e metas** das reuniões
- Dados são sincronizados com a aplicação web
- Facilita registros durante visitas e estudos

---

## ⚙️ Tecnologias Utilizadas

| Tipo          | Ferramenta / Biblioteca                     |
| ------------- | ------------------------------------------- |
| Front-end web | React + Vite                                |
| Estilização   | Styled-components / GlobalStyle             |
| Estado        | Redux Toolkit (`themeSlice` etc.)           |
| Roteamento    | React Router                                |
| Configurações | `package.json`, `vite.config.js`            |
| Linter        | ESLint                                      |
| Outros        | Firebase (presumido por `fiebaseConfig.js`) |

> 🔧 O projeto está organizado em componentes reutilizáveis, reducers para temas, e rotas para diferentes telas.

---

## 🚀 Como Usar

1. **Clonar o repositório**

    ```bash
    git clone https://github.com/Tyago-santos/project_lma
    cd project_lma
    ```

2. **Instalar dependências**

    ```bash
    npm install
    ```

3. **Executar em modo de desenvolvimento**

    ```bash
    npm run dev
    ```

    - Acesso geralmente em `http://localhost:3000` (ver `vite.config.js`)

4. **Aplicativo mobile**
    - Navegue até a pasta do app Expo (se existir)
    - Instale dependências e execute com `expo start`

---

## ⚙️ Funcionalidades Principais

- ✅ Exibição de progresso **por semana**
- ✅ Filtros por **organização da igreja**
- ✅ Criação e edição de **metas e planos**
- ✅ Visualização do andamento do trabalho missionário
- 📊 Interface de acompanhamento orientada por usuário e por organização

---

```

```
