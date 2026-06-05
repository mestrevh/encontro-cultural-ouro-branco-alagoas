import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test, describe } from 'vitest';
import Header from '../Header.astro';

describe('Header Component', () => {
  test('renders semantic header and navigation', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Header);
    
    expect(result).toContain('<header');
    expect(result).toContain('<nav');
    
    // Checa se os links principais estão presentes de alguma forma
    expect(result).toContain('href="/"');
    
    // Checa acessibilidade do botão mobile
    expect(result).toContain('<button');
    expect(result).toContain('aria-label="Menu"');
    expect(result).toContain('aria-expanded="false"');
  });
});
