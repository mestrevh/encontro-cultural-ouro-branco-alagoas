import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test, describe } from 'vitest';
import Sobre from '../sobre.astro';

describe('Página Sobre', () => {
  test('renderiza informações institucionais do mock', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Sobre);
    
    // Checa o título
    expect(result).toContain('Sobre o Evento');
    
    // Checa a historia do mock
    expect(result).toContain('O Encontro Cultural de Ouro Branco é um marco na tradição alagoana');
    
    // Checa a edição
    expect(result).toContain('15ª Edição');
  });
});
