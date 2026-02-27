'use client';

import AnimatedSection from './AnimatedSection';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  delay?: number;
}

export default function TestimonialCard({
  text,
  author,
  role,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="card p-8 h-full border border-secondary-100 relative">
        <Quote className="w-10 h-10 text-primary-100 absolute top-6 right-6" />
        <p className="text-secondary-600 leading-relaxed mb-6 italic relative z-10">
          &ldquo;{text}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-500 font-bold text-sm">
              {author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-medium text-primary-500 text-sm">{author}</p>
            <p className="text-secondary-500 text-xs">{role}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
