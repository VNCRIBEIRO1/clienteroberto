import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Blog Jurídico',
  description:
    'Artigos informativos sobre Direito Civil, Trabalhista, Família, Previdenciário e mais. Conteúdo educativo sem caráter de aconselhamento jurídico.',
};

const blogPosts = [
  {
    title: 'Seus Direitos Trabalhistas: O que Todo Trabalhador Deve Saber',
    excerpt:
      'Entenda quais são os principais direitos garantidos pela CLT e como identificar irregularidades na relação de trabalho. Conheça os prazos e procedimentos para garantir seus direitos.',
    date: '20 Fev 2026',
    readTime: '5 min',
    slug: 'direitos-trabalhistas',
    category: 'Direito Trabalhista',
  },
  {
    title: 'Guarda Compartilhada: Entenda Como Funciona na Prática',
    excerpt:
      'Saiba como funciona a guarda compartilhada, quais são os direitos dos pais e como é feita a definição judicial. Entenda as diferenças entre guarda compartilhada e alternada.',
    date: '15 Fev 2026',
    readTime: '4 min',
    slug: 'guarda-compartilhada',
    category: 'Direito de Família',
  },
  {
    title: 'LGPD e Seus Direitos: Proteção de Dados Pessoais no Brasil',
    excerpt:
      'Conheça seus direitos em relação à proteção de dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD) e saiba como exercê-los.',
    date: '10 Fev 2026',
    readTime: '6 min',
    slug: 'lgpd-direitos',
    category: 'Direito Civil',
  },
  {
    title: 'Aposentadoria após a Reforma: O que Mudou para o Trabalhador',
    excerpt:
      'Entenda as principais mudanças trazidas pela Reforma da Previdência e como elas afetam o planejamento da sua aposentadoria.',
    date: '05 Fev 2026',
    readTime: '7 min',
    slug: 'aposentadoria-reforma',
    category: 'Direito Previdenciário',
  },
  {
    title: 'Direitos do Consumidor: Como Agir em Cobranças Indevidas',
    excerpt:
      'Saiba quais são seus direitos quando você é vítima de cobranças indevidas e como proceder para resolver a situação de forma eficiente.',
    date: '01 Fev 2026',
    readTime: '5 min',
    slug: 'cobrancas-indevidas',
    category: 'Direito do Consumidor',
  },
  {
    title: 'Usucapião: Quando e Como é Possível Regularizar um Imóvel',
    excerpt:
      'Conheça os requisitos legais para o usucapião, os tipos existentes e o passo a passo para regularizar a posse de um imóvel.',
    date: '28 Jan 2026',
    readTime: '8 min',
    slug: 'usucapiao-imovel',
    category: 'Direito Imobiliário',
  },
  {
    title: 'Divórcio Consensual e Litigioso: Diferenças e Procedimentos',
    excerpt:
      'Entenda as diferenças entre o divórcio consensual e litigioso, os documentos necessários e os prazos envolvidos em cada modalidade.',
    date: '25 Jan 2026',
    readTime: '6 min',
    slug: 'divorcio-tipos',
    category: 'Direito de Família',
  },
  {
    title: 'Acidente de Trabalho: Direitos e Procedimentos do Trabalhador',
    excerpt:
      'Saiba quais são os direitos do trabalhador em caso de acidente de trabalho, como emitir a CAT e quais benefícios podem ser solicitados.',
    date: '20 Jan 2026',
    readTime: '5 min',
    slug: 'acidente-trabalho',
    category: 'Direito Trabalhista',
  },
  {
    title: 'Pensão Alimentícia: Como Funciona e Como é Calculada',
    excerpt:
      'Informações sobre como funciona a pensão alimentícia no Brasil, critérios de cálculo, revisão e consequências do não pagamento.',
    date: '15 Jan 2026',
    readTime: '6 min',
    slug: 'pensao-alimenticia',
    category: 'Direito de Família',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Blog Jurídico
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Artigos <span className="text-gold-400">Informativos</span>
            </h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Conteúdo educativo para esclarecer dúvidas jurídicas comuns. Este
              blog tem caráter meramente informativo, sem constituir
              aconselhamento jurídico.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Artigos */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} {...post} delay={index * 0.05} />
            ))}
          </div>

          {/* Aviso */}
          <AnimatedSection className="mt-16">
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 text-center max-w-3xl mx-auto">
              <p className="text-primary-600 text-sm">
                <strong>Aviso:</strong> Os artigos publicados neste blog têm
                caráter meramente informativo e educativo, não constituindo
                aconselhamento jurídico. Para orientação específica sobre seu
                caso, entre em contato com nosso escritório.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
