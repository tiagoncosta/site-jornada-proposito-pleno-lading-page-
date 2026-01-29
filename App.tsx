import React, { useEffect } from 'react';
import { 
  HeartIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  SparklesIcon, 
  CheckBadgeIcon,
  SunIcon,
  VideoCameraIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const App: React.FC = () => {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          entry.target.classList.remove('reveal-hidden');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
      el.classList.add('reveal-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const checkoutLink = "https://pay.hub.la/RBS2l0kJ8JIuPjA14Nr5";
  const whatsappNumber = "5562985187659";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen selection:bg-[#b37a5d] selection:text-white antialiased">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#e9e5d9]/90 backdrop-blur-md border-b border-stone-300/30">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SunIcon className="w-6 h-6 text-[#b37a5d] flex-shrink-0" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#433832] hidden sm:block">Jornada Propósito Pleno</span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#433832] sm:hidden">Propósito Pleno</span>
          </div>
          <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest bg-[#433832] text-white px-5 py-2.5 hover:bg-[#b37a5d] transition-all rounded-sm shadow-sm whitespace-nowrap">
            Quero Me Inscrever
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen pt-20 pb-20 md:pt-32 md:pb-40 px-6 relative overflow-hidden bg-[#e9e5d9] flex flex-col items-center">
        
        {/* Top Scroll Indicator */}
        <div className="mt-12 mb-12 flex flex-col items-center space-y-2 opacity-40 animate-pulse cursor-pointer hover:opacity-100 transition-opacity" onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#433832]">Role para explorar</span>
          <ChevronDownIcon className="w-4 h-4 text-[#b37a5d]" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center flex-grow">
          <div className="reveal text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-8 serif text-[#433832]">
              Transforme seu lar em um <span className="italic text-[#b37a5d]">refúgio sagrado</span>.
            </h1>
            <div className="w-20 h-1 bg-[#433832] mb-8"></div>
            <p className="text-lg md:text-2xl font-light leading-relaxed mb-10 text-[#433832] max-w-xl">
              Um programa de devocionais de 14 semanas desenhado para alinhar cada aspecto da vida ao seu chamado divino.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="bg-[#433832] text-white px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#b37a5d] transition-all text-center shadow-xl">
                Começar Minha Jornada
              </a>
            </div>
          </div>
          
          <div className="reveal flex justify-center order-first md:order-last mb-12 md:mb-0">
            <div className="relative p-12 md:p-16 bg-[#f4f1ea] border border-stone-200 shadow-2xl rounded-sm max-w-[320px] md:max-w-sm w-full transition-transform hover:scale-[1.02]">
              <div className="absolute inset-4 border border-stone-200 pointer-events-none"></div>
              <div className="flex flex-col items-center">
                <SunIcon className="w-20 h-20 md:w-24 md:h-24 text-[#b37a5d] mb-6" />
                <h3 className="text-xl md:text-2xl serif italic text-[#6b705c] text-center">Propósito Pleno</h3>
                <p className="text-[9px] uppercase tracking-[0.3em] mt-4 opacity-50">Caminho para a Vocação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section id="sobre" className="py-24 bg-white border-y border-stone-100 px-6">
        <div className="max-w-6xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl serif mb-8 text-[#433832] max-w-3xl mx-auto leading-tight">Deixe o "fazer" ser reflexo do "ser" em Cristo</h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-stone-500 mb-16 max-w-4xl mx-auto">
            Através de princípios bíblicos e ferramentas práticas, você aprenderá a edificar um lar de paz, fortalecer relacionamentos e construir um legado de fé e saúde duradouro.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { pilar: 'Pilar 1', semanas: '1 - 2', titulo: 'Fundamentos' },
              { pilar: 'Pilar 2', semanas: '3 - 4', titulo: 'Mente & Espírito' },
              { pilar: 'Pilar 3', semanas: '5 - 6', titulo: 'Corpo & Alma' },
              { pilar: 'Pilar 4', semanas: '7 - 12', titulo: 'Relacionamentos' },
              { pilar: 'Pilar 5', semanas: '13 - 14', titulo: 'Vocação & Legado' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col p-8 bg-[#f4f1ea] border-b-4 border-[#b37a5d] rounded-sm group hover:bg-stone-50 transition-all h-full text-center sm:text-left shadow-sm">
                <div className="text-[10px] font-black text-[#b37a5d] mb-2 uppercase tracking-widest">{item.semanas}</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase mb-4">{item.pilar}</div>
                <div className="text-xs font-bold uppercase text-[#433832] tracking-wider mt-auto">{item.titulo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS DETAILS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-32 md:space-y-48">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="reveal">
              <span className="text-[#b37a5d] text-xs font-bold uppercase tracking-widest mb-4 block">Semanas 1 e 2</span>
              <h3 className="text-3xl md:text-4xl serif mb-8 text-[#433832] leading-tight">Fundamentos e Audição Divina</h3>
              <p className="text-stone-600 leading-relaxed mb-10 text-lg">
                Identificação do chamado divino e práticas de silêncio para ouvir a voz de Deus.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-1 bg-[#b37a5d] h-10 flex-shrink-0"></div>
                  <div className="text-sm font-bold uppercase tracking-wide">Mapeamento do Propósito</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-1 bg-[#b37a5d] h-10 flex-shrink-0"></div>
                  <div className="text-sm font-bold uppercase tracking-wide">Escuta Espiritual</div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <span className="text-[#b37a5d] text-xs font-bold uppercase tracking-widest mb-4 block">Semanas 3 e 4</span>
              <h3 className="text-3xl md:text-4xl serif mb-8 text-[#433832] leading-tight">Mente & Espírito</h3>
              <p className="text-stone-600 leading-relaxed mb-10 text-lg">
                Vencendo a ansiedade através do domínio próprio e disciplinas espirituais profundas.
              </p>
              <div className="bg-[#f4f1ea] p-8 rounded-sm border-l-4 border-[#b37a5d]">
                 <h4 className="text-xs font-black uppercase mb-4 text-[#433832]">Resiliência Espiritual</h4>
                 <p className="text-sm opacity-70 leading-relaxed italic">"Levando cativo todo pensamento à obediência de Cristo."</p>
              </div>
            </div>
          </div>

          <div className="reveal relative bg-white border border-stone-200 p-8 md:p-24 shadow-2xl rounded-sm">
             <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <span className="text-[#6b705c] text-xs font-bold uppercase tracking-widest mb-6 block">Semanas 5 e 6</span>
                <h3 className="text-3xl md:text-5xl serif mb-10 text-[#433832]">Pilar 3: Corpo & Alma</h3>
                <p className="text-stone-600 leading-relaxed mb-12 text-lg max-w-2xl">
                  O corpo como santuário: equilíbrio entre saúde física, nutrição e vigor espiritual como ato de adoração.
                </p>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left w-full">
                   <div className="p-8 border-l-4 border-[#6b705c] bg-stone-50 transition-colors hover:bg-stone-100">
                      <h4 className="font-bold text-sm uppercase mb-3 text-[#433832]">Vigor Físico</h4>
                      <p className="text-sm text-stone-600 leading-relaxed">Cuidado com o templo para cumprir a missão com excelência.</p>
                   </div>
                   <div className="p-8 border-l-4 border-[#6b705c] bg-stone-50 transition-colors hover:bg-stone-100">
                      <h4 className="font-bold text-sm uppercase mb-3 text-[#433832]">Nutrição Consciente</h4>
                      <p className="text-sm text-stone-600 leading-relaxed">Alinhamento alimentar para maior clareza e energia.</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-stretch">
            <div className="reveal flex flex-col">
              <span className="text-[#b37a5d] text-xs font-bold uppercase tracking-widest mb-4 block">Semanas 7 a 12</span>
              <h3 className="text-3xl md:text-4xl serif mb-8 text-[#433832] leading-tight">Relacionamentos que Edificam</h3>
              <p className="text-stone-600 leading-relaxed mb-10 text-lg">
                Princípios bíblicos para namoro, casamento e a construção de comunidades saudáveis.
              </p>
              <div className="space-y-4 flex-grow">
                 <div className="flex items-center justify-between p-5 bg-stone-50 border border-stone-100 hover:border-[#b37a5d]/30 transition-all cursor-default">
                    <span className="text-xs font-bold uppercase tracking-wider">Família & Casamento</span>
                    <HeartIcon className="w-5 h-5 text-[#b37a5d]" />
                 </div>
                 <div className="flex items-center justify-between p-5 bg-stone-50 border border-stone-100 hover:border-[#b37a5d]/30 transition-all cursor-default">
                    <span className="text-xs font-bold uppercase tracking-wider">Comunidade Cristã</span>
                    <UserGroupIcon className="w-5 h-5 text-[#b37a5d]" />
                 </div>
              </div>
            </div>

            <div className="reveal flex flex-col">
              <span className="text-[#b37a5d] text-xs font-bold uppercase tracking-widest mb-4 block">Semanas 13 e 14</span>
              <h3 className="text-3xl md:text-4xl serif mb-8 text-[#433832] leading-tight">Vocação & Legado</h3>
              <p className="text-stone-600 leading-relaxed mb-10 text-lg">
                O trabalho como ministério e o planejamento estratégico de um legado eterno.
              </p>
              <div className="bg-[#433832] text-white p-10 rounded-sm mt-auto shadow-xl relative overflow-hidden group">
                 <div className="flex items-center space-x-4 mb-6 relative z-10">
                    <CheckBadgeIcon className="w-8 h-8 text-[#b37a5d] flex-shrink-0" />
                    <h4 className="text-lg font-bold uppercase tracking-widest">Plano de Legado</h4>
                 </div>
                 <p className="text-sm opacity-80 leading-relaxed relative z-10">Construindo diretrizes para as próximas décadas de vida e serviço.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section className="py-32 bg-[#433832] text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-6xl serif mb-6">O que você vai receber</h2>
            <div className="w-24 h-1 bg-[#b37a5d] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="reveal p-10 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all flex flex-col items-center text-center md:items-start md:text-left h-full">
              <VideoCameraIcon className="w-12 h-12 text-[#b37a5d] mb-8" />
              <h4 className="text-xl font-bold uppercase mb-4 tracking-tight">14 Módulos</h4>
              <p className="text-sm opacity-60 leading-relaxed">Video aulas profundas divididas em módulos estratégicos para cada pilar da sua jornada.</p>
            </div>
            <div className="reveal p-10 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all flex flex-col items-center text-center md:items-start md:text-left h-full">
              <BookOpenIcon className="w-12 h-12 text-[#b37a5d] mb-8" />
              <h4 className="text-xl font-bold uppercase mb-4 tracking-tight">70 Devocionais</h4>
              <p className="text-sm opacity-60 leading-relaxed">Cinco devocionais por módulo + E-book complementar exclusivo para aprofundamento diário.</p>
            </div>
            <div className="reveal p-10 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all flex flex-col items-center text-center md:items-start md:text-left h-full">
              <UserGroupIcon className="w-12 h-12 text-[#b37a5d] mb-8" />
              <h4 className="text-xl font-bold uppercase mb-4 tracking-tight">Comunidade</h4>
              <p className="text-sm opacity-60 leading-relaxed">Grupo exclusivo com serviço de suporte, conteúdos inéditos e chamadas semanais ao vivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="oferta" className="py-32 px-6 bg-[#f4f1ea]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-5xl serif mb-6 text-[#433832]">Quanto Vale sua Intimidade?</h2>
            <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-50">Compare o Valor com o Preço</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="bg-white p-10 md:p-12 border border-stone-200 shadow-lg reveal flex flex-col">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-stone-400">Entrega de Valor Estimada</h3>
              <ul className="space-y-6 text-sm font-bold text-[#433832] flex-grow">
                <li className="flex justify-between border-b border-stone-100 pb-4 items-center">
                  <span>Portal de Membros</span>
                  <span className="whitespace-nowrap ml-4 text-stone-400">R$ 2.000,00</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-4 items-center">
                  <span>Chamadas ao Vivo</span>
                  <span className="whitespace-nowrap ml-4 text-stone-400">R$ 1.000,00</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-4 items-center">
                  <span>Grupo Exclusivo</span>
                  <span className="whitespace-nowrap ml-4 text-stone-400">R$ 1.000,00</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-4 items-center">
                  <span>Material Didático</span>
                  <span className="whitespace-nowrap ml-4 text-stone-400">R$ 1.000,00</span>
                </li>
                <li className="flex flex-col pt-8">
                  <div className="flex flex-col sm:flex-row justify-between text-2xl serif items-start sm:items-center text-[#b37a5d]">
                    <span>Total em Valor</span>
                    <span className="font-bold">R$ 5.000,00</span>
                  </div>
                  
                  {/* Highlighted box for the discount hook */}
                  <div className="mt-8 p-6 bg-[#b37a5d]/5 border border-[#b37a5d]/20 rounded-sm text-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#b37a5d]"></div>
                    <p className="text-sm md:text-base font-bold italic text-[#b37a5d] leading-relaxed">
                      "se eu te desse 70% de desconto seria nosso membro agora?"
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#433832] text-white p-10 md:p-12 shadow-2xl relative reveal border-t-8 border-[#b37a5d] flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b37a5d] text-white px-8 py-2 text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap z-20">Oferta Exclusiva</div>
              <div className="text-center py-8">
                <span className="block text-white/30 line-through text-sm mb-6 font-medium">De R$ 5.000,00 por R$ 1.775,60</span>
                <span className="text-[10px] uppercase font-black tracking-widest block mb-6 opacity-60">Invista hoje apenas</span>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-xl md:text-2xl font-light italic serif">10x de</span>
                  <span className="text-5xl md:text-7xl font-bold serif text-[#b37a5d]">118,37</span>
                </div>
              </div>
              <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#b37a5d] hover:bg-[#c98b6d] text-white py-6 rounded-sm font-black uppercase tracking-[0.4em] text-sm transition-all shadow-xl active:scale-95 text-center mt-auto">
                Garantir Minha Vaga
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#e9e5d9] pt-24 pb-12 px-6 border-t border-stone-300 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 reveal">
            <SunIcon className="w-12 h-12 text-[#b37a5d] mb-10 mx-auto" />
            <div className="space-y-8 text-[#433832] font-light text-lg md:text-xl leading-relaxed text-left md:text-center max-w-3xl mx-auto whitespace-pre-line">
              <p className="font-medium serif text-2xl md:text-3xl text-[#b37a5d] italic text-center">
                Olá, tudo bem?
              </p>
              
              <p>
                Meu nome é Guilherme Koichi, tenho 34 anos e moro em Itapetininga, interior de SP. Desde 2018, produzo conteúdo na internet sobre a única coisa que importa verdadeiramente na vida: o amor de Deus por nós.
              </p>

              <p className="py-4"> </p>

              <p>
                Em 2023 comecei a escrever devocionais, e a partir de então, meus perfis tiveram um salto de quantidade de público e hoje eu posso compartilhar diariamente com uma comunidade de mais de 500.000 pessoas (entre instagram e Tik Tok) mensagens sobre Deus e a Bíblia, enquanto divido meu dia a dia regado a muita corrida, exercícios, leitura, café e viagens ao lado de minha esposa Aline e do Senninha, meu cachorro e fiel companheiro, amado pelos meus seguidores.
              </p>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 border-t border-stone-300/50 pt-10">
              <div className="flex items-center justify-center space-x-3">
                <MapPinIcon className="w-4 h-4 text-[#b37a5d]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#433832]/60">Itapetininga - SP</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-4 h-4 text-[#b37a5d]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#433832]/60">@guilhermekoichi</span>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-stone-300/50 w-full mb-16"></div>

          <div className="text-center space-y-12">
            <h3 className="text-2xl md:text-3xl serif text-[#433832]">Ainda tem alguma dúvida?</h3>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-5 p-6 border border-stone-300 hover:border-[#b37a5d] transition-all bg-white/50 group rounded-sm shadow-sm max-w-sm w-full mx-auto">
              <DevicePhoneMobileIcon className="w-8 h-8 text-[#b37a5d]" />
              <div className="text-left">
                <div className="text-[10px] font-black uppercase opacity-50 tracking-widest">Suporte WhatsApp</div>
                <div className="text-sm font-bold text-[#433832]">(62) 9 8518-7659</div>
              </div>
            </a>
            
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 pt-12">
              © 2024 Jornada Propósito Pleno • Guilherme Koichi
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
         <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.555-5.332 11.887-11.887 11.887-2.007 0-3.974-.506-5.717-1.472l-6.268 1.7zm11.831-21.68c-5.419 0-9.828 4.409-9.828 9.829 0 2.122.674 4.088 1.821 5.698l-1.121 4.09 4.195-1.103c1.516.828 3.22 1.265 4.953 1.265 5.418 0 9.828-4.41 9.828-9.829 0-2.624-1.022-5.091-2.878-6.946-1.857-1.856-4.324-2.877-6.947-2.877zm5.385 13.047c-.295-.147-1.742-.859-2.012-.957-.27-.098-.466-.147-.662.147-.196.295-.76.957-.931 1.154-.171.196-.343.221-.637.074-.294-.148-1.243-.458-2.368-1.462-.876-.782-1.467-1.748-1.639-2.043-.171-.295-.018-.455.13-.601.133-.131.295-.343.442-.515.147-.172.196-.295.295-.49.098-.196.05-.368-.024-.515-.074-.147-.662-1.595-.908-2.184-.24-.574-.484-.497-.662-.505-.171-.008-.368-.01-.565-.01s-.515.074-.785.368c-.27.294-1.03 1.006-1.03 2.454 0 1.448 1.055 2.846 1.202 3.042.147.196 2.074 3.167 5.023 4.444.701.304 1.248.485 1.674.621.705.224 1.346.193 1.853.117.565-.085 1.742-.712 1.987-1.4.246-.687.246-1.277.172-1.4-.074-.123-.27-.197-.565-.344z"/></svg>
      </a>

    </div>
  );
};

export default App;