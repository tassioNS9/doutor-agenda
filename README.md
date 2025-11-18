# Doutor Agenda

Doutor Agenda é um SaaS de agendamento para clínicas, permitindo o gerenciamento de consultas, pacientes, médicos e horários disponíveis de forma eficiente e segura.

## Tecnologias e Bibliotecas Principais
- **Next.js**: Framework React para aplicações web modernas.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **Drizzle ORM**: ORM para integração e manipulação de banco de dados.
- **React Query**: Gerenciamento de estado assíncrono e cache de dados.
- **Tailwind CSS**: Utilitário CSS para estilização rápida e responsiva.
- **ESLint**: Padronização e análise de código.
- **PostCSS**: Processamento de CSS.

## Padrões de Projeto
- **Componentização**: Componentes reutilizáveis em `src/components`.
- **Separação de responsabilidades**: Lógica de negócio em `src/actions`, componentes de UI em `src/components/ui`.
- **Rotas protegidas**: Estrutura de rotas privadas em `src/app/(protected)`.
- **Validação de dados**: Schemas de validação para formulários e ações.

## Setup do Projeto

1. **Clone o repositório:**
	```bash
	git clone <repo-url>
	cd doutor-agenda
	```

2. **Instale as dependências:**
	```bash
	npm install
	# ou
	yarn install
	```

3. **Configure as variáveis de ambiente:**
	- Crie um arquivo `.env.local` na raiz do projeto com as configurações necessárias (exemplo: conexão com banco de dados, chaves de autenticação).

4. **Execute as migrações do banco de dados:**
	```bash
	npm run db:migrate
	```
	*(Ajuste o comando conforme o ORM utilizado)*

5. **Inicie o servidor de desenvolvimento:**
	```bash
	npm run dev
	```

## Scripts Principais
- `npm run dev`: Inicia o servidor de desenvolvimento Next.js
- `npm run build`: Gera a build de produção
- `npm run lint`: Executa o linter

## Observações
- Certifique-se de configurar corretamente as variáveis de ambiente para funcionamento do banco de dados e autenticação.
- O projeto segue boas práticas de componentização e separação de responsabilidades.

---

Desenvolvido para facilitar o agendamento e gestão de clínicas médicas.
