import { motion } from 'motion/react';
import { 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Clock, 
  BarChart3, 
  Target, 
  Zap, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

// --- Components ---

const Button = ({ children, className = "", icon: Icon, href, ...props }: any) => {
  const baseClass = `
    group flex items-center justify-center gap-2 
    bg-emerald-600 hover:bg-emerald-700 text-white 
    font-semibold py-4 px-8 rounded-xl transition-all duration-300 
    shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1
    w-full sm:w-auto mx-auto
    ${className}
  `;

  if (href) {
    return (
      <a 
        href={href} 
        className={baseClass} 
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
        {Icon && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button 
      className={baseClass}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};

const Section = ({ children, className = "", id = "" }: any) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 ${className}`}>
    {children}
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <Card className="h-full flex flex-col items-start gap-4">
    <div className="p-3 bg-emerald-100/50 rounded-lg text-emerald-700">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </Card>
);

const StepCard = ({ number, title, description }: any) => (
  <div className="relative flex flex-col items-center text-center gap-4 p-6">
    <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-xl mb-2 z-10">
      {number}
    </div>
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FaqItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export default function App() {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5513991578027&text&type=phone_number&app_absent=0";

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-800 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Consultoria Estratégica
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Consultoria Gratuita para Advogados que Querem <span className="text-emerald-600">Mais Clientes</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Receba um diagnóstico completo do seu comercial e um plano prático para aumentar o número de clientes no seu escritório com previsibilidade e sem depender apenas de indicações.
            </p>

            <ul className="space-y-3">
              {[
                "Descubra onde seu comercial está travando",
                "Aprenda como estruturar um fluxo previsível de clientes",
                "Entenda como automatizar o primeiro atendimento"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col items-center">
              <Button href={whatsappLink} icon={Calendar} className="w-full sm:w-auto text-lg">
                AGENDAR CONSULTORIA GRATUITA
              </Button>
              <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Duração: 30-40 minutos
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gray-200"
          >
            <img 
              src="/hero-image.png" 
              alt="Consultor Especialista" 
              className="w-full h-full object-cover object-[center_25%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Resultado Médio</p>
                    <p className="font-bold text-gray-900">+40% em novos contratos</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Baseado em escritórios que implementaram nossa metodologia nos últimos 6 meses.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROBLEM SECTION --- */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Por que a maioria dos escritórios não consegue crescer?
          </h2>
          <p className="text-lg text-gray-600">
            A maioria dos escritórios cresce apenas quando surge indicação. 
            Sem um processo comercial estruturado, o fluxo de clientes se torna imprevisível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Users}
            title="Dependência de Indicação"
            description="Seu crescimento fica refém da boa vontade de terceiros, sem controle sobre a receita."
          />
          <FeatureCard 
            icon={BarChart3}
            title="Sem Previsibilidade"
            description="Meses bons e meses ruins, sem saber exatamente de onde virá o próximo cliente."
          />
          <FeatureCard 
            icon={Target}
            title="Comercial Desorganizado"
            description="Leads perdidos por falta de follow-up e processos manuais que geram falhas."
          />
          <FeatureCard 
            icon={MessageSquare}
            title="Tempo no WhatsApp"
            description="Advogados seniores perdendo horas respondendo curiosos em vez de fechar contratos."
          />
        </div>
      </Section>

      {/* --- SOLUTION SECTION --- */}
      <Section className="bg-gray-900 text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              A solução é estruturar um <span className="text-emerald-400">comercial profissional</span> no seu escritório
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Durante a consultoria vamos analisar seu momento atual e mostrar exatamente o que precisa ser ajustado para transformar seu escritório em uma máquina previsível de aquisição de clientes.
            </p>
            <div className="flex justify-center">
              <Button href={whatsappLink} icon={ArrowRight} className="bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-500/30">
                Quero estruturar meu comercial
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
               <div className="space-y-4 mt-8">
                 <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                   <Zap className="w-8 h-8 text-emerald-400 mb-4" />
                   <h3 className="font-bold text-lg">Automação</h3>
                 </div>
                 <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                   <Target className="w-8 h-8 text-emerald-400 mb-4" />
                   <h3 className="font-bold text-lg">Qualificação</h3>
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                   <BarChart3 className="w-8 h-8 text-emerald-400 mb-4" />
                   <h3 className="font-bold text-lg">Métricas</h3>
                 </div>
                 <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                   <Users className="w-8 h-8 text-emerald-400 mb-4" />
                   <h3 className="font-bold text-lg">Scripts</h3>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- BENEFITS SECTION --- */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            O que você vai descobrir na consultoria
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Diagnóstico Completo",
              desc: "Análise profunda do seu processo atual para identificar onde você está deixando dinheiro na mesa."
            },
            {
              title: "Gargalos de Crescimento",
              desc: "Identificação exata dos pontos que impedem seu escritório de escalar hoje."
            },
            {
              title: "Plano Prático",
              desc: "Um roteiro passo a passo para aumentar o fluxo de clientes nas próximas semanas."
            },
            {
              title: "Estratégia de Automação",
              desc: "Como usar tecnologia para filtrar curiosos e entregar leads prontos para o fechamento."
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- SOCIAL PROOF --- */}
      <Section className="bg-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Escritórios que aplicaram essa metodologia
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              role: "Advogado Previdenciário",
              quote: "Depois de estruturar o comercial conseguimos previsibilidade de clientes. Hoje sei exatamente quantos contratos vamos fechar no mês."
            },
            {
              role: "Advogado Trabalhista",
              quote: "Antes dependíamos de indicação, hoje temos novos leads toda semana. O processo comercial mudou o jogo do escritório."
            },
            {
              role: "Advogado Empresarial",
              quote: "Organizamos o atendimento e aumentamos nossa taxa de fechamento. Paramos de perder tempo com leads desqualificados."
            }
          ].map((testimonial, i) => (
            <Card key={i} className="relative">
              <div className="text-emerald-500 mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* --- HOW IT WORKS --- */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Como funciona
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <StepCard 
              number="1"
              title="Agende a consultoria"
              description="Escolha um horário disponível na nossa agenda que melhor se encaixe na sua rotina."
            />
            <StepCard 
              number="2"
              title="Analisamos seu escritório"
              description="Vamos entender seu momento atual, seus desafios e seus objetivos de crescimento."
            />
            <StepCard 
              number="3"
              title="Receba um plano de ação"
              description="Você sai da reunião com clareza total e sabendo exatamente o que fazer para crescer."
            />
          </div>
        </div>
      </Section>

      {/* --- OFFER / CTA SECTION --- */}
      <Section id="cta-section" className="bg-gray-900 text-white rounded-3xl mx-4 lg:mx-24 my-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center py-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Consultoria Estratégica Gratuita
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Durante essa reunião você terá acesso ao diagnóstico completo do seu comercial e às estratégias que utilizamos para estruturar o crescimento de escritórios.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-10 inline-block">
            <div className="flex items-center gap-4 text-emerald-300">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-semibold">Duração: 30 a 40 minutos</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button href={whatsappLink} icon={Calendar} className="w-full sm:w-auto text-lg px-12 py-5 shadow-emerald-900/50">
              AGENDAR CONSULTORIA
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              Poucos horários disponíveis para esta semana.
            </p>
          </div>
        </div>
      </Section>

      {/* --- GUARANTEE --- */}
      <Section className="py-12">
        <div className="max-w-3xl mx-auto text-center bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Garantia de Valor</h3>
          <p className="text-gray-600">
            Mesmo que você não se torne cliente, sairá da reunião com clareza sobre o que precisa fazer para crescer seu escritório. Nosso objetivo é gerar valor desde o primeiro contato.
          </p>
        </div>
      </Section>

      {/* --- FAQ --- */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Perguntas Frequentes</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-2">
            <FaqItem 
              question="Essa consultoria é realmente gratuita?"
              answer="Sim. Oferecemos essa sessão estratégica sem custo para entender se podemos ajudar seu escritório. Se fizer sentido, apresentaremos nossa proposta de acompanhamento. Se não, você sai com um plano de ação gratuito."
            />
            <FaqItem 
              question="Serve para qualquer área do direito?"
              answer="Nossa metodologia funciona melhor para escritórios que buscam crescimento em áreas como Trabalhista, Previdenciário, Empresarial, Família e Consumidor. Analisamos caso a caso durante a reunião."
            />
            <FaqItem 
              question="Preciso ter escritório físico?"
              answer="Não. Atendemos escritórios 100% digitais, híbridos e físicos. O processo comercial é adaptável à sua estrutura de atendimento."
            />
            <FaqItem 
              question="O que acontece depois da consultoria?"
              answer="Você receberá um diagnóstico do que precisa ser feito. Se decidir seguir sozinho, terá o caminho. Se quiser nossa ajuda para implementar, apresentaremos como funciona nossa assessoria completa."
            />
          </div>
        </div>
      </Section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Se você quer mais clientes e previsibilidade no seu escritório, <span className="text-emerald-600">essa conversa é para você.</span>
          </h2>
          <Button href={whatsappLink} icon={Calendar} className="w-full sm:w-auto text-xl px-12 py-6">
            AGENDAR CONSULTORIA GRATUITA
          </Button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Consultoria Jurídica Especializada. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}
