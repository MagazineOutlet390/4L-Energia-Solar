import React from "react";
import { SEOHead } from "../components/common/SEOHead";
import { ShieldCheck, Lock, Mail, MessageCircle } from "lucide-react";
import { COMPANY, getWhatsAppLink } from "../data/company";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        path="/politica-de-privacidade"
        title="Política de Privacidade e LGPD | 4L Energia Solar"
        description="Diretrizes de privacidade, segurança da informação e tratamento de dados pessoais da 4L Energia Solar em estrita conformidade com a LGPD (Lei nº 13.709/2018)."
        canonical="https://4lenergiasolar.com.br/politica-de-privacidade"
        ogImage="/assets/og/og-politica-de-privacidade.jpg"
        ogImageAlt="Diretrizes de conformidade jurídica e segurança da informação da 4L Energia Solar"
        twitterCard="summary"
      />

      <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            
            <div className="border-b border-slate-100 pb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>LGPD (Lei nº 13.709/2018)</span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Política de Privacidade e Proteção de Dados
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Última atualização: Novembro de 2026
              </p>
            </div>

            <div className="prose text-slate-600 text-sm leading-relaxed space-y-6">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">1. Informações Gerais</h2>
                <p>
                  A <strong>4L Energia Solar</strong>, sediada em Campinas - SP, assume o compromisso de proteger a privacidade e os dados pessoais de todos os usuários, clientes e visitantes deste site, atuando em total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei Federal nº 13.709/2018).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">2. Dados Pessoais Coletados e Finalidade</h2>
                <p>
                  Coletamos apenas os dados estritamente necessários para a prestação dos nossos serviços e atendimento a solicitações voluntárias dos usuários:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Formulários de Simulação e Orçamento:</strong> Nome e número de WhatsApp fornecidos espontaneamente pelo usuário para o recebimento de estudos de viabilidade técnica e orçamentos fotovoltaicos.</li>
                  <li><strong>Comunicações Diretas via WhatsApp:</strong> Mensagens, faturas de energia compartilhadas voluntariamente e esclarecimentos técnicos.</li>
                  <li><strong>Dados Técnicos de Navegação:</strong> Informações anônimas de tráfego (páginas visualizadas, tipo de dispositivo) coletadas exclusivamente para melhoria contínua da performance do site, sem identificação pessoal direta.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">3. Não Compartilhamento e Sigilo</h2>
                <p>
                  A 4L Energia Solar <strong>não comercializa, não cede e não compartilha</strong> dados pessoais de clientes com terceiros para fins de publicidade externa. Os dados fornecidos são utilizados unicamente pela nossa equipe interna e por concessionárias de energia (como a CPFL Paulista) nos trâmites oficiais de homologação regulatória previamente autorizados pelo contratante.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">4. Armazenamento e Segurança</h2>
                <p>
                  Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, perdas ou incidentes de segurança, utilizando conexões seguras e criptografia SSL/TLS em todas as comunicações deste portal.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">5. Direitos dos Titulares de Dados</h2>
                <p>
                  Nos termos do art. 18 da LGPD, o titular dos dados tem o direito de solicitar a qualquer momento:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Confirmação da existência de tratamento de dados;</li>
                  <li>Acesso aos dados coletados;</li>
                  <li>Correção de dados incompletos ou inexatos;</li>
                  <li>Eliminação dos dados pessoais tratados com base no seu consentimento.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">6. Canal de Atendimento do Titular</h2>
                <p>
                  Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato diretamente pelo nosso WhatsApp oficial <strong>(19) 9 8315-5772</strong> ou no nosso endereço físico na <strong>Rua Stecca Pelegrini, Jardim Santa Lúcia, Campinas - SP</strong>.
                </p>
              </section>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <a
                href={getWhatsAppLink("Olá! Gostaria de falar sobre dados pessoais e privacidade na 4L Energia Solar.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Contato com Encarregado de Dados</span>
              </a>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};
