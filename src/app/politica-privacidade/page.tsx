import type { Metadata } from 'next';
import { Shield } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade do escritório Roberto Sartoro Advogado, em conformidade com a LGPD.',
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <div className="container-custom">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              LGPD
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Política de <span className="text-gold-400">Privacidade</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº
              13.709/2018).
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <AnimatedSection>
              <div className="space-y-8 text-secondary-600 leading-relaxed">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    1. Informações Gerais
                  </h2>
                  <p>
                    Esta Política de Privacidade descreve como o escritório
                    Roberto Sartoro Advogado (&quot;nós&quot;, &quot;nosso&quot;)
                    coleta, usa, armazena e protege suas informações pessoais em
                    conformidade com a Lei Geral de Proteção de Dados (LGPD —
                    Lei nº 13.709/2018).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    2. Dados Coletados
                  </h2>
                  <p>Podemos coletar os seguintes dados pessoais:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Mensagens enviadas pelo formulário de contato</li>
                    <li>
                      Dados de navegação (cookies, endereço IP, tipo de
                      navegador)
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    3. Finalidade do Tratamento
                  </h2>
                  <p>Os dados coletados são utilizados para:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      Responder a consultas e solicitações de informação
                    </li>
                    <li>Melhorar a experiência de navegação no site</li>
                    <li>Cumprir obrigações legais e regulatórias</li>
                    <li>
                      Análise estatística de acesso (de forma anonimizada)
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    4. Compartilhamento de Dados
                  </h2>
                  <p>
                    Seus dados pessoais não serão compartilhados com terceiros,
                    exceto quando necessário para cumprimento de obrigação legal
                    ou por determinação judicial.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    5. Seus Direitos
                  </h2>
                  <p>
                    Conforme a LGPD, você tem direito a: confirmação da
                    existência de tratamento, acesso aos dados, correção de
                    dados, anonimização ou eliminação de dados desnecessários,
                    portabilidade, e revogação do consentimento.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    6. Cookies
                  </h2>
                  <p>
                    Utilizamos cookies essenciais para o funcionamento do site e
                    cookies analíticos (mediante consentimento) para melhorar a
                    experiência de navegação. Você pode gerenciar suas
                    preferências de cookies a qualquer momento.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    7. Segurança
                  </h2>
                  <p>
                    Adotamos medidas técnicas e organizacionais adequadas para
                    proteger seus dados pessoais contra acesso não autorizado,
                    perda, alteração ou destruição.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    8. Contato
                  </h2>
                  <p>
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta
                    Política de Privacidade, entre em contato através do e-mail:
                    contato@robertosartoro.adv.br
                  </p>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                  <p className="text-primary-600 text-sm">
                    <strong>Última atualização:</strong> Fevereiro de 2026.
                    Esta política pode ser atualizada periodicamente. Recomendamos
                    a consulta regular.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
