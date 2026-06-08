import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test, describe } from 'vitest';
import Index from '../index.astro';

describe('Landing Page (Hero)', () => {
  test('renders Hero Section and Call to Actions', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Index);
    
    // Testa Título Principal
    expect(result).toContain('Encontro Cultural');
    expect(result).toContain('Ouro Branco');
    
    // Testa Call To Actions
    expect(result).toContain('Garantir Ingresso');
    expect(result).toContain('Ver Programação');
    
    // TDD Subplan 2: Layout responsivo (Hero e CTAs)
    // Verifica se o título principal usa 'text-4xl' para mobile (antes era 5xl)
    expect(result).toMatch(/text-4xl.*md:text-6xl/);
    
    // Verifica se o container dos botões usa 'gap-6' para espaçamento mais amigável ao toque no mobile
    expect(result).toContain('gap-6');
  });
});
