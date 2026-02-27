import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos de Uso do site Roberto Sartoro Advogado.',
};

export default function TermosDeUsoPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <div className="container-custom">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Termos de <span className="text-gold-400">Uso</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="space-y-8 text-secondary-600 leading-relaxed">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    1. Sobre Este Site
                  </h2>
                  <p>
                    Este site é de propriedade do escritório Roberto Sartoro
                    Advogado, inscrito na OAB/SP sob nº 000.000. Todo o conteúdo
                    publicado tem caráter meramente informativo e educativo, nos
                    termos do Provimento 205/2021 do Conselho Federal da OAB.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    2. Caráter Informativo
                  </h2>
                  <p>
                    As informações disponibilizadas neste site não constituem
                    aconselhamento jurídico, parecer legal ou qualquer forma de
                    consultoria. Para orientação específica sobre seu caso,
                    procure atendimento profissional.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    3. Propriedade Intelectual
                  </h2>
                  <p>
                    Todo o conteúdo deste site, incluindo textos, imagens,
                    logotipos e layout, é protegido por direitos autorais e não
                    pode ser reproduzido sem autorização prévia.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    4. Limitação de Responsabilidade
                  </h2>
                  <p>
                    O escritório não se responsabiliza por decisões tomadas com
                    base exclusivamente nas informações publicadas neste site. A
                    aplicação do Direito depende da análise de cada caso
                    concreto.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary-500 mb-4">
                    5. Contato
                  </h2>
                  <p>
                    O envio de mensagens pelo formulário de contato não
                    estabelece relação advogado-cliente. Para formalizar o
                    atendimento, é necessária a celebração de contrato de
                    prestação de serviços.
                  </p>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                  <p className="text-primary-600 text-sm">
                    <strong>Última atualização:</strong> Fevereiro de 2026.
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
