# 🚀 Guia: Subir Projeto para GitHub

## 📋 Passo a Passo

### 1. Criar Repositório no GitHub

1. **Acesse [github.com](https://github.com)**
2. **Faça login na sua conta**
3. **Clique no botão "+" no canto superior direito**
4. **Selecione "New repository"**
5. **Configure o repositório:**
   - **Repository name:** `assistente-ia-whatsapp`
   - **Description:** `Landing page moderna para assistente de IA que automatiza atendimento no WhatsApp para terapeutas e advogados`
   - **Visibility:** Public (ou Private se preferir)
   - **NÃO marque** "Add a README file" (já temos um)
   - **NÃO marque** "Add .gitignore" (já temos um)
   - **NÃO marque** "Choose a license" (por enquanto)

6. **Clique em "Create repository"**

### 2. Copiar URL do Repositório

Após criar, você verá uma página com instruções. Copie a URL que aparece, será algo como:
```
https://github.com/SEU_USUARIO/assistente-ia-whatsapp.git
```

### 3. Executar Comandos no Terminal

Agora execute estes comandos no terminal (substitua SEU_USUARIO pelo seu nome de usuário do GitHub):

```bash
# Adicionar repositório remoto
git remote add origin https://github.com/SEU_USUARIO/assistente-ia-whatsapp.git

# Renomear branch para main (padrão atual)
git branch -M main

# Fazer push para o GitHub
git push -u origin main
```

### 4. Verificar se Funcionou

1. **Acesse seu repositório no GitHub**
2. **Verifique se todos os arquivos estão lá**
3. **Confirme que o README.md aparece na página inicial**

## 🔧 Comandos Rápidos (Copie e Cole)

Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub:

```bash
git remote add origin https://github.com/SEU_USUARIO/assistente-ia-whatsapp.git
git branch -M main
git push -u origin main
```

## 📁 Estrutura que será enviada:

```
assistente-ia-whatsapp/
├── README.md
├── VERCEL_SETUP.md
├── vercel.json
├── package.json
├── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── components/
│   │   ├── GoogleAnalytics.jsx
│   │   ├── EventTracker.jsx
│   │   └── ui/
│   └── assets/
└── public/
```

## 🎯 Próximos Passos Após o GitHub:

1. **Configurar Vercel** (importar do GitHub)
2. **Configurar Google Analytics**
3. **Configurar domínio personalizado**
4. **Monitorar métricas**

---

**💡 Dica:** Se você não tiver o Git configurado, pode ser necessário configurar seu email e nome primeiro:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
``` 