import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Clock, MessageCircle, Users, Zap, Heart, Scale, Calendar, Phone, Mail } from 'lucide-react'
import './App.css'

// Import das imagens
import heroImage from './assets/hero-image.png'
import featureAutomation from './assets/feature-automation.png'
import featureHumanized from './assets/feature-humanized.png'
import featureEfficiency from './assets/feature-efficiency.png'

function App() {
  const [activeTab, setActiveTab] = useState('terapeutas')

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "Atendimento 24/7",
      description: "Nunca perca um lead ou uma dúvida, mesmo fora do horário comercial.",
      image: featureAutomation
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Atendimento Humanizado",
      description: "IA treinada para interagir de forma empática e profissional.",
      image: featureHumanized
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Otimização de Tempo",
      description: "Libere sua agenda para focar no que realmente importa.",
      image: featureEfficiency
    }
  ]

  const benefits = {
    terapeutas: [
      "Acolhimento empático de novos pacientes",
      "Agendamento e reagendamento automático",
      "Respostas a dúvidas frequentes sobre serviços",
      "Lembretes de consultas e sessões",
      "Triagem inicial de necessidades",
      "Integração com sistemas de agendamento"
    ],
    advogados: [
      "Triagem inteligente de casos jurídicos",
      "Qualificação automática de leads",
      "Agendamento de consultas jurídicas",
      "Respostas sobre áreas de atuação",
      "Coleta de documentos necessários",
      "Lembretes de prazos e consultas"
    ]
  }

  const testimonials = [
    {
      name: "Dr. Ana Silva",
      profession: "Psicóloga",
      text: "O assistente de IA revolucionou meu consultório. Agora posso focar 100% nos meus pacientes enquanto a IA cuida do atendimento inicial.",
      rating: 5
    },
    {
      name: "Dr. Carlos Mendes",
      profession: "Advogado",
      text: "A triagem automática de casos me economiza horas por dia. Só recebo leads realmente qualificados.",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "Como funciona a integração com o WhatsApp?",
      answer: "Utilizamos a API oficial do WhatsApp Business para garantir total segurança e conformidade. A integração é simples e não interfere no seu número atual."
    },
    {
      question: "A IA pode substituir completamente o atendimento humano?",
      answer: "Não, e nem é esse o objetivo. A IA cuida do atendimento inicial, triagem e tarefas repetitivas, liberando você para focar no atendimento especializado que só você pode oferecer."
    },
    {
      question: "É seguro para dados sensíveis?",
      answer: "Sim, seguimos todas as normas da LGPD e utilizamos criptografia de ponta a ponta. Para profissionais da saúde e advocacia, temos protocolos específicos de segurança."
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer: "A implementação básica leva de 3 a 5 dias úteis. Incluímos treinamento da IA com suas informações específicas e suporte completo durante o processo."
    }
  ]

  const pricingPlans = [
    {
      name: "Essencial",
      price: "R$ 497",
      description: "Solução de entrada para desafogar o atendimento inicial.",
      features: [
        "Atendimento 24/7 no WhatsApp (500 interações/mês)",
        "Triagem inteligente de casos (perguntas básicas)",
        "Agendamento automatizado (integração com Google Calendar)",
        "Base de conhecimento jurídica (FAQ básico)",
        "Suporte técnico padrão (e-mail, 48h)",
        "Conformidade LGPD"
      ],
      highlight: false
    },
    {
      name: "Profissional",
      price: "R$ 750",
      description: "Solução robusta e completa para otimização e eficiência.",
      features: [
        "Atendimento 24/7 no WhatsApp (ilimitado)",
        "Triagem inteligente de casos (avançada)",
        "Agendamento automatizado (integração com Google Calendar)",
        "Base de conhecimento jurídica (FAQ completo e dinâmico)",
        "Relatórios e analytics (métricas de atendimento e leads)",
        "Suporte técnico prioritário (WhatsApp, 24h)",
        "Conformidade LGPD",
        "Integração com CRM jurídico (via API)",
        "Personalização de fluxo de atendimento (até 3 fluxos)"
      ],
      highlight: true
    },
    {
      name: "Premium",
      price: "R$ 1.497",
      description: "Solução de ponta com suporte estratégico e personalização máxima.",
      features: [
        "Todos os recursos do Plano Profissional",
        "Atendimento 24/7 no WhatsApp (ilimitado, prioritário)",
        "IA treinada com documentos específicos do escritório",
        "Gestão de múltiplos números de WhatsApp",
        "Relatórios e analytics avançados (dashboards personalizados)",
        "Suporte técnico VIP (canal exclusivo, 4h)",
        "Sessões de treinamento e consultoria mensais (1h/mês)",
        "Desenvolvimento de fluxos de atendimento personalizados (ilimitado)",
        "Integração com sistemas legados (sob demanda, via API)"
      ],
      highlight: false
    }
  ]

  const whatsappNumber = "5551991892501";
  const typebotLink = "https://chat.webmarketing360.com.br/my-typebot-ddnjfj5";

  const getWhatsappLink = (message) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">IA WhatsApp Pro</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Recursos</a>
              <a href="#benefits" className="text-gray-600 hover:text-green-600 transition-colors">Benefícios</a>
              <a href="#pricing" className="text-gray-600 hover:text-green-600 transition-colors">Preços</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contato</a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700" onClick={() => window.open(getWhatsappLink('Olá! Gostaria de agendar uma demonstração do Assistente de IA para WhatsApp.'), '_blank')}>
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">
                Atendimento Humanizado por IA
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Otimize seu Tempo e 
                <span className="text-green-600"> Humanize</span> seu Atendimento
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Com o Assistente de IA para WhatsApp, profissionais autônomos como você podem focar no que realmente importa, 
                enquanto a IA acolhe leads, gerencia agendamentos e tira dúvidas, garantindo um atendimento 24/7, eficiente e personalizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => window.open(getWhatsappLink('Desejo agendar a minha consultoria gratuita.'), '_blank')}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Demonstração Gratuita
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open(getWhatsappLink('Olá! Gostaria de falar com um especialista sobre o Assistente de IA para WhatsApp.'), '_blank')}>
                  <Phone className="mr-2 h-5 w-5" />
                  Falar com Especialista
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Assistente de IA para WhatsApp" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher Nosso Assistente de IA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido especificamente para profissionais que valorizam a qualidade do atendimento 
              e a otimização do tempo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-24 h-24 mx-auto rounded-lg"
                    />
                  </div>
                  <CardTitle className="flex items-center justify-center gap-2">
                    {feature.icon}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Específicas para Seu Nicho
            </h2>
            <p className="text-xl text-gray-600">
              Escolha seu perfil profissional e veja como nossa IA pode transformar seu atendimento.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <Button
                variant={activeTab === 'terapeutas' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('terapeutas')}
                className={activeTab === 'terapeutas' ? 'bg-green-600 hover:bg-green-700' : ''}
              >
                <Heart className="mr-2 h-4 w-4" />
                Terapeutas
              </Button>
              <Button
                variant={activeTab === 'advogados' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('advogados')}
                className={activeTab === 'advogados' ? 'bg-green-600 hover:bg-green-700' : ''}
              >
                <Scale className="mr-2 h-4 w-4" />
                Advogados
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {activeTab === 'terapeutas' ? 'Para Terapeutas e Profissionais de Saúde' : 'Para Advogados e Escritórios'}
              </h3>
              <div className="space-y-4">
                {benefits[activeTab].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {activeTab === 'terapeutas' ? 
                    <Heart className="h-8 w-8 text-green-600" /> : 
                    <Scale className="h-8 w-8 text-green-600" />
                  }
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Resultado Comprovado
                </h4>
                <p className="text-gray-600 mb-6">
                  {activeTab === 'terapeutas' ? 
                    'Terapeutas economizam até 6 horas por semana com nossa automação.' :
                    'Advogados aumentam em 40% a qualificação de leads com nossa triagem inteligente.'
                  }
                </p>
                <Button className="bg-green-600 hover:bg-green-700" onClick={() => window.open(typebotLink, '_blank')}>
                  Ver Demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que Nossos Clientes Dizem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.profession}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Invista no Seu Tempo e no Seu Negócio
            </h2>
            <p className="text-xl text-gray-600">
              Um investimento que se paga com o tempo e a eficiência que você ganha.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.highlight ? 'border-2 border-green-500' : ''}`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-green-600 text-white text-center py-2">
                    <span className="font-semibold">Mais Escolhido</span>
                  </div>
                )}
                <CardHeader className={plan.highlight ? 'pt-12 text-center' : 'text-center'}>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full bg-green-600 hover:bg-green-700 mt-6" onClick={() => window.open(getWhatsappLink(`Olá! Tenho interesse no plano ${plan.name} do Assistente de IA para WhatsApp.`), '_blank')}>
                    Começar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Transforme seu Atendimento Agora!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agende sua demonstração gratuita e veja o Assistente de IA em ação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => window.open(getWhatsappLink('Desejo agendar a minha consultoria gratuita.'), '_blank')}>
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Demonstração
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" onClick={() => window.open(getWhatsappLink('Olá! Gostaria de falar com um especialista sobre o Assistente de IA para WhatsApp.'), '_blank')}>
              <Phone className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
                <span className="text-xl font-bold">IA WhatsApp Pro</span>
              </div>
              <p className="text-gray-400">
                Otimize seu tempo e humanize seu atendimento com nossa solução de IA para WhatsApp.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span className="text-gray-400">(51) 99189-2501</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-green-600" />
                  <span className="text-gray-400">contato@webmarketing360.com.br</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <div className="space-y-2">
                <a href="#features" className="block text-gray-400 hover:text-white transition-colors">Recursos</a>
                <a href="#benefits" className="block text-gray-400 hover:text-white transition-colors">Benefícios</a>
                <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors">Preços</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 IA WhatsApp Pro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 

export default App

