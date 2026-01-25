
import React, { useEffect } from 'react';
import { 
  HeartIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  SparklesIcon, 
  CheckBadgeIcon,
  SunIcon,
  ArrowRightIcon,
  VideoCameraIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const App: React.FC = () => {
  
  // Script para animação de revelação após o React montar o DOM
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
    <div className="min-h-screen selection:bg-[#b37a5d] selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#e9e5d9]/95 backdrop-blur-md border-b border-stone-300/30">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SunIcon className="w-6 h-6 text-[#b37a5d]" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#433832]">Jornada Propósito Pleno</span>
          </div>
          <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest bg-[#433832] text-white px-6 py-2.5 hover:bg-[#b37a5d] transition-all rounded-sm shadow-sm">
            Quero Me Inscrever
          </a>
        </div>
      </nav>

      {/* HERO SECTION - Slide 1 e 2 */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-40 px-6 relative overflow-hidden bg-[#e9e5d9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 serif text-[#433832]">
              Transforme seu lar em um <span className="italic text-[#b37a5d]">refúgio sagrado</span>.
            </h1>
            <div className="w-24 h-1 bg-[#433832] mb-10"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 text-[#433832] max-w-xl">
              Um programa de devocionais de 14 semanas desenhado para alinhar cada aspecto da vida ao seu chamado divino.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="bg-[#433832] text-white px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#b37a5d] transition-all text-center shadow-xl">
                Começar Minha Jornada
              </a>
            </div>
          </div>
          
          <div className="reveal flex justify-center">
            <div className="relative p-16 bg-[#f4f1ea] border border-stone-200 shadow-2xl rounded-sm max-w-sm w-full">
              <div className="absolute inset-4 border border-stone-200 pointer-events-none"></div>
              <div className="flex flex-col items-center">
                <SunIcon className="w-24 h-24 text-[#b37a5d] mb-6" />
                <h3 className="text-2xl serif italic text-[#6b705c] text-center">Propósito Pleno</h3>
                <p className="text-[9px] uppercase tracking-[0.3em] mt-4 opacity-50">Caminho para a Vocação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT - Slide 2 */}
      <section id="sobre" className="py-24 bg-white border-y border-stone-100 px-6">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl serif mb-10 text-[#433832]">Deixe o "fazer" ser reflexo do "ser" em Cristo</h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-stone-500 mb-16">
            Através de princípios bíblicos e ferramentas práticas, você aprenderá a edificar um lar de paz, fortalecer relacionamentos e construir um legado de fé e saúde duradouro.
          </p>
          
          {/* Timeline de Semanas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { pilar: 'Pilar 1', semanas: '1 - 2', titulo: 'Fundamentos' },
              { pilar: 'Pilar 2', semanas: '3 - 4', titulo: 'Mente & Espírito' },
              { pilar: 'Pilar 3', semanas: '5 - 6', titulo: 'Corpo & Alma' },
              { pilar: 'Pilar 4', semanas: '7 - 12', titulo: 'Relacionamentos' },
              { pilar: 'Pilar 5', semanas: '13 - 14', titulo: 'Vocação & Legado' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-[#f4f1ea] border-b-4 border-[#b37a5d] rounded-sm group hover:bg-stone-50 transition-colors">
                <div className="text-[10px] font-black text-[#b37a5d] mb-2 uppercase tracking-widest">{item.semanas}</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase mb-4">{item.pilar}</div>
                <div className="text-xs font-bold uppercase text-[#433832] tracking-wider">{item.titulo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS DETAILS - Slides 3 ao 7 */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-40">
          
          {/* Pilar 1 & 2 */}
          <div className="grid md:grid-cols-2 gap-24">
            <div className="reveal">
              <span className="text-[#b37a5d] text-xs font-bold uppercase tracking-widest mb-4 block">Semanas 1 e 2</span>
              <h3 className="text-4xl serif mb-8 text-[#433832]">Fundamentos e Audição Divina</h3>
              <p className="text-stone-600 leading-relaxed mb-10 text-lg">
                Mapeamento do Propósito e Intimidade. Desenvolvimento de práticas de silêncio e escuta espiritual fundamentado em <span className="font-bold">Jeremias 29:11</span>.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-1 bg-[#b37a5d] h-10"></div>
                  <div className="text-sm font-bold uppercase tracking-wide">Mapa do Propósito</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-1 bg-[#b37a5d] h-10"></div>
                  <div className="text-sm font-bold uppercase tracking-wide">Oração Contemplativa</div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <span className="text-[#b37a5d] text-xs font-bold uppercase tracking-widest mb-4 block">Semanas 3 e 4</span>
              <h3 className="text-4xl serif mb-8 text-[#433832]">Mente & Espírito</h3>
              <p className="text-stone-600 leading-relaxed mb-10 text-lg">
                Gestão da Ansiedade e Disciplinas Espirituais. Aprenda a "levar cativo todo pensamento" através de oração, jejum e meditação.
              </p>
              <div className="bg-[#f4f1ea] p-8 rounded-sm">
                 <h4 className="text-xs font-black uppercase mb-4 text-[#433832]">Meios de Graça</h4>
                 <p className="text-sm opacity-70 leading-relaxed italic">"Construindo hábitos inabaláveis para sustentar a caminhada espiritual sem o peso do legalismo."</p>
              </div>
            </div>
          </div>

          {/* Pilar 3 - Visual Impact */}
          <div className="reveal relative bg-white border border-stone-200 p-12 md:p-24 shadow-2xl rounded-sm">
             <div className="max-w-4xl mx-auto text-center">
                <span className="text-[#6b705c] text-xs font-bold uppercase tracking-widest mb-6 block">Semanas 5 e 6</span>
                <h3 className="text-4xl md:text-5xl serif mb-10 text-[#433832]">Pilar 3: Corpo & Alma</h3>
                <blockquote className="text-2xl md:text-3xl serif italic text-[#b37a5d] mb-12">
                  "Acaso não sabem que o corpo de vocês é santuário do Espírito Santo?" <br/>
                  <span className="text-sm not-italic font-bold text-stone-400 uppercase tracking-widest">— 1 Coríntios 6:19</span>
                </blockquote>
                <div className="grid md:grid-cols-2 gap-12 text-left">
                   <div className="p-8 border-l-4 border-[#6b705c]">
                      <h4 className="font-bold text-sm uppercase mb-4">Atividade como Adoração</h4>
                      <p className="text-sm text-stone-600 leading-relaxed">Conectando o vigor físico ao propósito ministerial através do cuidado com o templo de Deus.</p>
                   </div>
                   <div className="p-8 border-l-4 border-[#6b705c]">
                      <h4 className="font-bold text-sm uppercase mb-4">Nutrição Consciente</h4>
                      <p className="text-sm text-stone-600 leading-relaxed">Alinhando o que consumimos com a necessidade de energia para cumprir nossa missão com excelência.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Pilar 4 & 5 */}
          <div className="grid md:grid-cols-2 gap-24">
            <div className="reveal">
              <span className="text-[#b37a5d] text-xs font-bold uppercase tracking-widest mb-4 block">Semanas 7 a 12</span>
              <h3 className="text-4xl serif mb-8 text-[#433832]">Relacionamentos que Edificam</h3>
              <p className="text-stone-500 italic mb-10 italic">"Ferro afia ferro" — Provérbios 27:17</p>
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-4 bg-stone-50 border border-stone-100">
                    <span className="text-xs font-bold uppercase">Namoro Cristão Intencional</span>
                    <HeartIcon className="w-5 h-5 text-[#b37a5d]" />
                 </div>
                 <div className="flex items-center justify-between p-4 bg-stone-50 border border-stone-100">
                    <span className="text-xs font-bold uppercase">Casamento como Ministério</span>
                    <UserGroupIcon className="w-5 h-5 text-[#b37a5d]" />
                 </div>
                 <div className="flex items-center justify-between p-4 bg-stone-50 border border-stone-100">
                    <span className="text-xs font-bold uppercase">Comunidade e Amizades</span>
                    <SparklesIcon className="w-5 h-5 text-[#b37a5d]" />
                 </div>
              </div>
            </div>

            <div className="reveal">
              <span className="text-[#b37a5d] text-xs font-bold uppercase tracking-widest mb-4 block">Semanas 13 e 14</span>
              <h3 className="text-4xl serif mb-8 text-[#433832]">Vocação & Legado</h3>
              <p className="text-stone-600 leading-relaxed mb-10 text-lg">
                Redefinindo a carreira como campo missionário. O serviço como forma de adoração baseada em <span className="font-bold">Colossenses 3:23-24</span>.
              </p>
              <div className="bg-[#433832] text-white p-10 rounded-sm">
                 <div className="flex items-center space-x-3 mb-6">
                    <CheckBadgeIcon className="w-6 h-6 text-[#b37a5d]" />
                    <h4 className="text-lg font-bold uppercase tracking-widest">Manifesto de Vida</h4>
                 </div>
                 <p className="text-sm opacity-80 leading-relaxed">Escrita de um plano de vida para as próximas décadas (5, 10 e 20 anos) integrando fé, família e vocação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION - Slide 8 e 9 */}
      <section className="py-32 bg-[#433832] text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-6xl serif mb-6">O que você vai receber</h2>
            <div className="w-24 h-1 bg-[#b37a5d] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="reveal p-10 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all">
              <VideoCameraIcon className="w-12 h-12 text-[#b37a5d] mb-8" />
              <h4 className="text-xl font-bold uppercase mb-4 tracking-tight">14 Módulos</h4>
              <p className="text-sm opacity-60 leading-relaxed">Videoaulas profundas divididas em módulos estratégicos para cada pilar da sua jornada.</p>
            </div>
            <div className="reveal p-10 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all">
              <BookOpenIcon className="w-12 h-12 text-[#b37a5d] mb-8" />
              <h4 className="text-xl font-bold uppercase mb-4 tracking-tight">70 Devocionais</h4>
              <p className="text-sm opacity-60 leading-relaxed">Cinco devocionais por módulo + E-book complementar exclusivo para aprofundamento diário.</p>
            </div>
            <div className="reveal p-10 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all">
              <UserGroupIcon className="w-12 h-12 text-[#b37a5d] mb-8" />
              <h4 className="text-xl font-bold uppercase mb-4 tracking-tight">Comunidade</h4>
              <p className="text-sm opacity-60 leading-relaxed">Grupo exclusivo com troca de experiências, conteúdos inéditos e chamadas semanais ao vivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING - Slide 11, 12 e 13 */}
      <section id="oferta" className="py-32 px-6 bg-[#f4f1ea]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-5xl serif mb-6 text-[#433832]">Quanto Vale sua Intimidade?</h2>
            <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-50">Compare o Valor com o Preço</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Valor Teórico */}
            <div className="bg-white p-12 border border-stone-200 shadow-lg reveal">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-stone-400">Entrega de Valor Estimada</h3>
              <ul className="space-y-6 text-sm font-bold text-[#433832]">
                <li className="flex justify-between border-b border-stone-100 pb-4">
                  <span>Portal de Membros</span>
                  <span>R$ 2.000,00</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-4">
                  <span>Chamadas ao Vivo</span>
                  <span>R$ 1.000,00</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-4">
                  <span>Grupo Exclusivo</span>
                  <span>R$ 1.000,00</span>
                </li>
                <li className="flex justify-between border-b border-stone-100 pb-4">
                  <span>Material Didático</span>
                  <span>R$ 1.000,00</span>
                </li>
                <li className="flex justify-between text-2xl serif pt-8 text-[#b37a5d]">
                  <span>Total em Valor</span>
                  <span>R$ 5.000,00</span>
                </li>
              </ul>
              <div className="mt-12 p-6 bg-[#f4f1ea] border border-[#b37a5d]/30 text-center">
                 <p className="text-sm italic opacity-80 leading-relaxed">"Se eu te desse 70% de desconto seria nosso membro agora?"</p>
              </div>
            </div>

            {/* Oferta Irresistível */}
            <div className="bg-[#433832] text-white p-12 shadow-2xl relative reveal border-t-8 border-[#b37a5d]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b37a5d] text-white px-8 py-2 text-[10px] font-black uppercase tracking-[0.4em]">Oferta Exclusiva</div>
              
              <div className="text-center py-10">
                <span className="block text-white/30 line-through text-sm mb-6 font-medium">De R$ 5.000,00 por R$ 1.775,60</span>
                <span className="text-[10px] uppercase font-black tracking-widest block mb-6 opacity-60">Invista hoje apenas</span>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-2xl font-light italic serif">10x de</span>
                  <span className="text-7xl font-bold serif text-[#b37a5d]">118,37</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold">ou à vista no PIX com desconto adicional</p>
              </div>

              <div className="space-y-6 mb-12">
                 <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-sm">
                    <CheckBadgeIcon className="w-6 h-6 text-[#b37a5d]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Acesso Imediato e Vitalício</span>
                 </div>
                 <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-sm">
                    <CheckBadgeIcon className="w-6 h-6 text-[#b37a5d]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Todos os 5 Pilares Inclusos</span>
                 </div>
                 <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-sm">
                    <CheckBadgeIcon className="w-6 h-6 text-[#b37a5d]" />
                    <span className="text-xs font-bold uppercase tracking-wider">7 Dias de Garantia Total</span>
                 </div>
              </div>

              <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#b37a5d] hover:bg-[#c98b6d] text-white py-6 rounded-sm font-black uppercase tracking-[0.4em] text-sm transition-all shadow-xl active:scale-95 text-center">
                Garantir Minha Vaga
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - Slide 10 */}
      <footer className="bg-[#e9e5d9] py-32 px-6 border-t border-stone-300">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-6xl md:text-8xl serif italic text-[#433832]/10 absolute -mt-12 pointer-events-none select-none">Dúvidas?</h2>
          <SunIcon className="w-16 h-16 text-[#b37a5d] mb-12 relative" />
          <h3 className="text-2xl serif mb-12 text-[#433832] relative">Ainda tem alguma dúvida sobre a Jornada?</h3>
          <div className="flex flex-col md:flex-row gap-8 mb-24 w-full justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-6 border border-stone-300 hover:border-[#b37a5d] transition-all bg-white/50 min-w-[280px]">
              <div className="w-12 h-12 bg-[#b37a5d]/10 rounded-full flex items-center justify-center">
                <DevicePhoneMobileIcon className="w-6 h-6 text-[#b37a5d]" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-black uppercase opacity-50">WhatsApp Suporte</div>
                <div className="text-xs font-bold">(62) 9 8518-7659</div>
              </div>
            </a>
          </div>
          
          <div className="pt-20 border-t border-stone-300/50 w-full">
            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#433832] opacity-30 mb-8 italic">Jornada Propósito Pleno • Transformando Vidas</p>
            <div className="flex space-x-12 justify-center text-[9px] font-bold uppercase tracking-widest opacity-40">
               <a href="#" className="hover:text-[#b37a5d]">Privacidade</a>
               <a href="#" className="hover:text-[#b37a5d]">Termos</a>
               <a href="#" className="hover:text-[#b37a5d]">LGPD</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
         <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.555-5.332 11.887-11.887 11.887-2.007 0-3.974-.506-5.717-1.472l-6.268 1.7zm11.831-21.68c-5.419 0-9.828 4.409-9.828 9.829 0 2.122.674 4.088 1.821 5.698l-1.121 4.09 4.195-1.103c1.516.828 3.22 1.265 4.953 1.265 5.418 0 9.828-4.41 9.828-9.829 0-2.624-1.022-5.091-2.878-6.946-1.857-1.856-4.324-2.877-6.947-2.877zm5.385 13.047c-.295-.147-1.742-.859-2.012-.957-.27-.098-.466-.147-.662.147-.196.295-.76.957-.931 1.154-.171.196-.343.221-.637.074-.294-.148-1.243-.458-2.368-1.462-.876-.782-1.467-1.748-1.639-2.043-.171-.295-.018-.455.13-.601.133-.131.295-.343.442-.515.147-.172.196-.295.295-.49.098-.196.05-.368-.024-.515-.074-.147-.662-1.595-.908-2.184-.24-.574-.484-.497-.662-.505-.171-.008-.368-.01-.565-.01s-.515.074-.785.368c-.27.294-1.03 1.006-1.03 2.454 0 1.448 1.055 2.846 1.202 3.042.147.196 2.074 3.167 5.023 4.444.701.304 1.248.485 1.674.621.705.224 1.346.193 1.853.117.565-.085 1.742-.712 1.987-1.4.246-.687.246-1.277.172-1.4-.074-.123-.27-.197-.565-.344z"/>
         </svg>
      </a>

    </div>
  );
};

export default App;
