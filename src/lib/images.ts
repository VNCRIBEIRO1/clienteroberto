// Mapeamento central de imagens reais (Unsplash - uso gratuito)
// Todas as imagens são livres de direitos autorais via Unsplash License

export const IMAGES = {
  // Retrato profissional do advogado
  lawyer:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',

  // Hero background - Estátua da Justiça
  hero: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80',

  // Escritório de advocacia / ambiente profissional
  office:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
} as const;

// Imagens por área de atuação
export const AREA_IMAGES: Record<string, string> = {
  'Direito Civil':
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  'Direito Trabalhista':
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
  'Direito de Família':
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
  'Direito Previdenciário':
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
  'Direito do Consumidor':
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  'Direito Imobiliário':
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
};

// Imagens por categoria de blog (reutiliza áreas + adicionais)
export const BLOG_IMAGES: Record<string, string> = {
  ...AREA_IMAGES,
  Direito:
    'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
};

// Imagem padrão (fallback)
export const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80';

// Helper: retorna a imagem para uma categoria
export function getCategoryImage(category: string): string {
  return BLOG_IMAGES[category] || AREA_IMAGES[category] || DEFAULT_IMAGE;
}
