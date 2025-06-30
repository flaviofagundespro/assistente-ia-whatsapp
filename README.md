# Site IA Webmarketing

Projeto privado de assistente web para automação e marketing digital, desenvolvido em React, Vite e TailwindCSS, com deploy no Cloudflare Pages.

---

## 🚀 Como rodar localmente

Pré-requisitos:
- Node.js 20+ (veja `.nvmrc`)
- pnpm (veja https://pnpm.io/installation)

```bash
pnpm install
pnpm dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 🏗️ Build para produção

```bash
pnpm build
```
Os arquivos finais estarão em `dist/`.

---

## 🌐 Deploy

- O deploy é feito no [Cloudflare Pages](https://pages.cloudflare.com/).
- O build é disparado automaticamente a cada push no branch `main`.
- O Node.js usado no deploy é o especificado em `.nvmrc` (atualmente 20).

---

## 🗂️ Estrutura do Projeto

- `src/` — código-fonte React (componentes, páginas, hooks, libs)
- `public/` — arquivos estáticos
- `vite.config.js` — configuração do Vite
- `.nvmrc` — versão do Node recomendada
- `pnpm-lock.yaml` — lockfile de dependências

---

## 📦 Scripts úteis

- `pnpm dev` — roda o projeto em modo desenvolvimento
- `pnpm build` — gera o build de produção
- `pnpm lint` — checa problemas de lint

---

## 📝 Observações

- O projeto usa React 19, Vite 6, TailwindCSS, Radix UI e Lucide Icons.
- Para garantir compatibilidade, use sempre a versão do Node especificada em `.nvmrc`.
- Se precisar atualizar dependências: `pnpm update`
- Se for usar variáveis de ambiente, crie um arquivo `.env` e documente aqui.

---

## 📚 Organização de código

- Componentes reutilizáveis ficam em `src/components/`
- Hooks customizados em `src/hooks/`
- Utilitários em `src/lib/`
- Estilos globais em `src/index.css` e `tailwind.config.js`

---

## 📜 Licença

Projeto privado. Uso pessoal.

---

> Documentação gerada automaticamente por IA para facilitar manutenção futura. 