````markdown
# 🚀 Portfólio Agência B2B — Showcase de Clientes

Projeto de **Portfólio Digital para uma Agência de Desenvolvimento Web B2B**, desenvolvido como parte da disciplina de Laboratório Web.

A aplicação apresenta uma agência de tecnologia fictícia, com foco em um layout **moderno, responsivo e acessível**, além de integrar dados dinâmicos de empresas e clientes por meio de uma API REST.

---

## 🌐 Acesse o Projeto Online

O projeto pode ser acessado diretamente pelo GitHub Pages:

🔗 **[Acessar o projeto online](https://link-do-seu-site-aqui/)**

> Substitua o link acima pela URL real do seu GitHub Pages antes de entregar o projeto.

---

## 🎨 Protótipo no Figma

O layout e os breakpoints responsivos foram desenvolvidos com base no protótipo disponibilizado no Figma.

🔗 **[Acessar o modelo no Figma — Projeto Lab Web](https://www.figma.com/design/1N1Upe2vhqcOYX0gW6AwFd/projeto-lab-web--c%C3%B3pia-?node-id=1-10&p=f&t=8bOqkB8d5pQ4hPY1-0)**

---

## 🛠️ Tecnologias e Ferramentas

- **HTML5 semântico:** estruturação das seções e conteúdo da página.
- **CSS3:** estilização, responsividade e organização dos estilos em arquivos separados.
- **Flexbox e CSS Grid:** construção dos layouts responsivos.
- **JavaScript ES6+:** interações e funcionalidades da aplicação.
- **Fetch API:** comunicação com a API REST.
- **JSONPlaceholder:** fornecimento dos dados dinâmicos dos clientes.
- **Git e GitHub:** versionamento e publicação do projeto.
- **Figma:** criação e referência do protótipo visual.

---

## 🌐 Integração com a API

A seção de **Cases de Sucesso / Clientes Atendidos** utiliza a API REST gratuita **JSONPlaceholder** para carregar os dados dos depoimentos dinamicamente.

🔗 **[JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)**

### Endpoint utilizado

```text
https://jsonplaceholder.typicode.com/users
````

### Regra de negócio

A aplicação:

1. Realiza uma requisição para a API.
2. Recebe a lista de usuários.
3. Seleciona os **5 primeiros resultados**.
4. Utiliza os dados recebidos para criar os cards de depoimentos.
5. Insere os cards dinamicamente na página.
6. Permite navegar pelos depoimentos utilizando o carrossel.

### Dados utilizados

| Informação          | Propriedade da API                   |
| ------------------- | ------------------------------------ |
| Empresa             | `company.name`                       |
| Depoimento / Slogan | `company.catchPhrase` e `company.bs` |
| Responsável         | `name`                               |
| Cidade              | `address.city`                       |

---

## 📁 Estrutura de Arquivos

```text
portfolio-b2b/
│
├── index.html
├── script.js
├── README.md
│
└── src/
    ├── css/
    │   ├── base.css
    │   ├── header.css
    │   ├── nav.css
    │   ├── hero.css
    │   ├── companies.css
    │   ├── discover.css
    │   ├── tools.css
    │   ├── customers.css
    │   ├── speed.css
    │   ├── testimonials.css
    │   ├── events.css
    │   ├── footer.css
    │   └── styles.css
    │
    ├── js/
    │   ├── nav.js
    │   └── testimonials.js
    │
    ├── icons/
    └── img/
```

### Organização do CSS

O arquivo `styles.css` funciona como arquivo principal de importação dos demais arquivos CSS.

Os estilos são separados por seção da página, facilitando a organização e manutenção do projeto.

### Organização do JavaScript

* `script.js` — inicializa as funcionalidades principais.
* `nav.js` — controla o menu responsivo da navegação.
* `testimonials.js` — realiza o consumo da API e controla o carrossel de depoimentos.

---

## 📱 Responsividade

O projeto foi desenvolvido seguindo a abordagem **Mobile First**, adaptando o layout para diferentes tamanhos de tela.

Os principais componentes responsivos incluem:

* Menu de navegação mobile.
* Seção Hero.
* Cards e grids de conteúdo.
* Seção de depoimentos com carrossel.
* Seção de eventos.
* Rodapé adaptável para dispositivos móveis e desktop.

---

## ♿ Acessibilidade

Foram aplicadas algumas práticas de acessibilidade no projeto, incluindo:

* HTML5 semântico.
* Atributos `alt` nas imagens.
* Uso de `aria-expanded` no menu responsivo.
* Estados de foco com `:focus-visible`.
* Botões e links com áreas de interação adequadas.
* Estrutura de navegação organizada.

---

## 📋 Critérios de Qualidade

* ✅ **HTML5 semântico:** estrutura organizada e utilização de elementos semânticos.
* ✅ **CSS Mobile First:** estilos desenvolvidos priorizando dispositivos móveis.
* ✅ **Responsividade:** adaptação para diferentes tamanhos de tela.
* ✅ **JavaScript modular:** funcionalidades separadas em arquivos específicos.
* ✅ **Integração com API REST:** dados dos depoimentos carregados dinamicamente.
* ✅ **Organização de código:** arquivos separados por responsabilidade.
* ✅ **Fidelidade ao design:** layout desenvolvido com base nas diretrizes do Figma.
* ✅ **Acessibilidade:** aplicação de atributos e estados de interação.

---

## 👨‍💻 Projeto Acadêmico

Projeto desenvolvido para a disciplina de **Laboratório Web**, com o objetivo de aplicar conceitos de:

* Desenvolvimento Front-End.
* HTML5.
* CSS3.
* JavaScript.
* APIs REST.
* Responsividade.
* Versionamento com Git.
* Prototipação no Figma.

````

### ⚠️ Um detalhe importante

No seu README original aparece:

```text
components.css
````

mas na estrutura que estamos trabalhando atualmente **não existe esse arquivo**. Em compensação, existe:

```text
companies.css
```

Então eu corrigi isso no README para ficar de acordo com seu projeto atual.

Também deixei o link do GitHub Pages como placeholder porque você ainda precisa colocar a **URL real do seu projeto**.
