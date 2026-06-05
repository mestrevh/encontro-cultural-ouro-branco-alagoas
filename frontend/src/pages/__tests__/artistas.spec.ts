import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test, describe } from 'vitest';
import Artistas from '../artistas.astro';

describe('Página de Artistas', () => {
  test('renderiza os artistas do mock com grid estruturada', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Artistas);
    
    // Testa o Título
    expect(result).toContain('Artistas Confirmados');
    
    // Testa se o artista João das Neves (do mock) é renderizado
    expect(result).toContain('João das Neves');
    
    // Testa o subtítulo/gênero (Forró Pé de Serra)
    expect(result).toContain('Forró Pé de Serra');
    
    // Checa se imagens/estruturas semânticas foram criadas
    expect(result).toContain('<img');
    expect(result).toContain('<article');
  });
});
