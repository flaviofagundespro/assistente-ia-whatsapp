# 🤖 Assistente de IA para WhatsApp

Landing page moderna para um assistente de IA que automatiza atendimento no WhatsApp para terapeutas e advogados.

## 🚀 Tecnologias

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **Framer Motion** - Animações

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy

### Vercel (Recomendado)

1. **Conectar com GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/assistente-ia-whatsapp.git
   git push -u origin main
   ```

2. **Deploy na Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Conecte sua conta GitHub
   - Importe o repositório
   - Configure as variáveis de ambiente (se necessário)

### Configurações Vercel

**Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Environment Variables:**
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://seu-dominio.vercel.app
```

## 📊 Google Analytics

1. **Criar conta no Google Analytics 4**
2. **Obter Measurement ID** (formato: G-XXXXXXXXXX)
3. **Substituir no código:**

```jsx
// Em src/App.jsx
<GoogleAnalytics measurementId="G-XXXXXXXXXX" />

// Em index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

## 🔧 Configurações

### Meta Tags
- SEO otimizado para terapeutas e advogados
- Open Graph para redes sociais
- Twitter Cards
- WhatsApp Business API

### Performance
- Lazy loading de imagens
- Preconnect para fontes
- Otimização de bundle

## 📱 Funcionalidades

- ✅ Landing page responsiva
- ✅ Seções: Hero, Features, Benefits, Pricing, Testimonials
- ✅ Tabs interativas (Terapeutas/Advogados)
- ✅ Google Analytics integrado
- ✅ SEO otimizado
- ✅ Meta tags completas

## 🎨 Design

- **Cores:** Verde (#16a34a) como primária
- **Gradiente:** Azul para verde
- **Tipografia:** Sistema de fontes do Tailwind
- **Componentes:** shadcn/ui

## 📈 Analytics e Tracking

### Eventos Recomendados
```javascript
// Botão de demonstração
gtag('event', 'click', {
  event_category: 'engagement',
  event_label: 'demo_button'
});

// Mudança de tab
gtag('event', 'click', {
  event_category: 'navigation',
  event_label: 'tab_' + activeTab
});

// Scroll de seção
gtag('event', 'scroll', {
  event_category: 'engagement',
  event_label: 'section_' + sectionName
});
```

## 🔒 Segurança

- HTTPS obrigatório
- CSP headers (configurar no Vercel)
- Sanitização de inputs
- Rate limiting (se necessário)

## 📞 Suporte

Para dúvidas ou sugestões:
- Email: contato@ia-whatsapp-pro.com
- WhatsApp: (11) 99999-9999

---

**Desenvolvido com ❤️ para otimizar o atendimento de profissionais autônomos** 