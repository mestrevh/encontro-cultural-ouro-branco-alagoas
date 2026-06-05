import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test, describe } from 'vitest';
import Footer from '../Footer.astro';

describe('Footer Component', () => {
  test('renders semantic footer and basic info', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);
    
    // Semantic validation
    expect(result).toContain('<footer');
    
    // Content validation
    expect(result).toContain('Ouro Branco');
    expect(result).toContain('Todos os direitos reservados');
    
    // Social links/Navigation validation
    expect(result).toContain('<a');
  });
});
