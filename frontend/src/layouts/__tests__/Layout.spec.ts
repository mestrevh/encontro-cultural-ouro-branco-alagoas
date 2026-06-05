import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test, describe } from 'vitest';
import Layout from '../Layout.astro';

describe('Layout Component', () => {
  test('renders base html structure and slot', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Layout, {
      props: { title: 'Página Teste' },
      slots: { default: '<main id="test-main">Conteudo</main>' }
    });
    
    expect(result).toContain('<html');
    expect(result).toContain('<head>');
    expect(result).toContain('<body');
    
    expect(result).toContain('<title>Página Teste</title>');
    expect(result).toContain('<main id="test-main">Conteudo</main>');
  });
});
