# 🚀 Guia Completo: Deploy na Vercel

## 📋 Pré-requisitos

1. **Conta GitHub** criada
2. **Conta Vercel** (gratuita)
3. **Google Analytics 4** configurado
4. **Domínio personalizado** (opcional)

## 🔗 Passo a Passo

### 1. Criar Repositório no GitHub

```bash
# No terminal, na pasta do projeto
git remote add origin https://github.com/SEU_USUARIO/assistente-ia-whatsapp.git
git branch -M main
git push -u origin main
```

### 2. Configurar Vercel

1. **Acesse [vercel.com](https://vercel.com)**
2. **Faça login com GitHub**
3. **Clique em "New Project"**
4. **Importe o repositório** `assistente-ia-whatsapp`

### 3. Configurações do Projeto

#### Build Settings
```
Framework Preset: Vite
Root Directory: ./
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

#### Environment Variables
```env
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site URL
VITE_SITE_URL=https://seu-dominio.vercel.app

# Ambiente
NODE_ENV=production
```

### 4. Configurar Google Analytics

#### 4.1 Criar Conta GA4
1. Acesse [analytics.google.com](https://analytics.google.com)
2. Clique em "Criar conta"
3. Configure:
   - Nome da conta: `IA WhatsApp Pro`
   - Nome da propriedade: `assistente-ia-whatsapp`
   - Fuso horário: `America/Sao_Paulo`
   - Moeda: `Real brasileiro (R$)`

#### 4.2 Obter Measurement ID
1. Vá em **Administrador** → **Propriedade** → **Configurações da propriedade**
2. Copie o **ID de medição** (formato: G-XXXXXXXXXX)

#### 4.3 Configurar no Código
```jsx
// Em src/App.jsx, linha 145
<GoogleAnalytics measurementId="G-XXXXXXXXXX" />

// Em index.html, linha 25
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### 5. Configurar Domínio Personalizado

#### 5.1 Na Vercel
1. Vá em **Settings** → **Domains**
2. Adicione seu domínio: `ia-whatsapp-pro.com`
3. Configure os nameservers no seu provedor de domínio

#### 5.2 Atualizar Meta Tags
```html
<!-- Em index.html -->
<meta property="og:url" content="https://ia-whatsapp-pro.com/">
<meta property="twitter:url" content="https://ia-whatsapp-pro.com/">
<link rel="canonical" href="https://ia-whatsapp-pro.com/">
```

### 6. Configurar SSL e Headers

#### 6.1 Security Headers
Criar arquivo `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ]
}
```

### 7. Configurar Analytics Avançado

#### 7.1 Eventos Personalizados
```javascript
// Adicionar em src/App.jsx
const trackEvent = (eventName, parameters = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
};

// Exemplo de uso nos botões
<Button 
  onClick={() => trackEvent('demo_button_click', {
    event_category: 'engagement',
    event_label: 'hero_section'
  })}
>
  Agendar Demonstração
</Button>
```

#### 7.2 Conversões
```javascript
// Tracking de conversões
const trackConversion = (plan) => {
  trackEvent('purchase', {
    event_category: 'ecommerce',
    event_label: plan,
    value: getPlanValue(plan)
  });
};
```

### 8. Configurar Performance

#### 8.1 Otimizações Vercel
- **Edge Functions** habilitadas
- **Image Optimization** automática
- **Caching** configurado

#### 8.2 Lazy Loading
```jsx
// Em src/App.jsx
const LazyImage = ({ src, alt, ...props }) => {
  return (
    <img 
      src={src} 
      alt={alt}
      loading="lazy"
      {...props}
    />
  );
};
```

### 9. Monitoramento

#### 9.1 Vercel Analytics
1. Vá em **Settings** → **Analytics**
2. Habilite **Web Analytics**
3. Configure eventos personalizados

#### 9.2 Google Search Console
1. Acesse [search.google.com](https://search.google.com)
2. Adicione sua propriedade
3. Verifique o arquivo `sitemap.xml`

### 10. Backup e Versionamento

#### 10.1 Deploy Automático
- Cada push para `main` faz deploy automático
- Preview deployments para outras branches

#### 10.2 Rollback
- Vercel mantém histórico de deploys
- Rollback com 1 clique

## 🔧 Troubleshooting

### Problema: Build falha
```bash
# Verificar logs
vercel logs

# Build local
npm run build
```

### Problema: Google Analytics não funciona
```javascript
// Verificar se está carregado
console.log('GA loaded:', typeof gtag !== 'undefined');
```

### Problema: Imagens não carregam
```bash
# Verificar se estão na pasta public
ls public/
```

## 📊 Métricas Importantes

### Performance
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### SEO
- **Core Web Vitals**: Verde
- **Mobile-friendly**: Sim
- **HTTPS**: Sim

### Analytics
- **Sessions**: Acompanhar crescimento
- **Bounce Rate**: < 50%
- **Conversion Rate**: > 2%

## 🎯 Próximos Passos

1. **Configurar Facebook Pixel**
2. **Implementar Chat ao vivo**
3. **Adicionar Blog**
4. **Configurar Email Marketing**
5. **Implementar A/B Testing**

---

**🎉 Seu site está pronto para capturar leads qualificados!** 