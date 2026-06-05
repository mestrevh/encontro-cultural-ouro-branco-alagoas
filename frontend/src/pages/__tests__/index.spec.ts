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
  });
});
