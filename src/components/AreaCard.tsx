'use client';

import Link from 'next/link';
import {
  Briefcase,
  Users,
  Heart,
  Landmark,
  ShieldCheck,
  Building2,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Users,
  Heart,
  Landmark,
  ShieldCheck,
  Building2,
};

interface AreaCardProps {
  iconName: string;
  title: string;
  description: string;
  href?: string;
  delay?: number;
}

export default function AreaCard({
  iconName,
  title,
  description,
  href = '/areas-de-atuacao',
  delay = 0,
}: AreaCardProps) {
  const Icon = iconMap[iconName] || Briefcase;
  return (
    <AnimatedSection delay={delay}>
      <Link href={href} className="block group">
        <div className="card p-8 h-full border border-secondary-100 hover:border-gold-400/50 group-hover:-translate-y-1">
          <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-500/10 transition-colors">
            <Icon className="w-7 h-7 text-primary-500 group-hover:text-gold-500 transition-colors" />
          </div>
          <h3 className="text-xl font-serif font-bold text-primary-500 mb-3">
            {title}
          </h3>
          <p className="text-secondary-600 text-sm leading-relaxed mb-4">
            {description}
          </p>
          <span className="inline-flex items-center text-sm font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
            Saiba mais
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </AnimatedSection>
  );
}
