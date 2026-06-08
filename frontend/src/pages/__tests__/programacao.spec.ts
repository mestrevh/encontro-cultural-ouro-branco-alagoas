import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test, describe } from 'vitest';
import Programacao from '../programacao.astro';

describe('Página de Programação', () => {
  test('renderiza a programação consumindo o mock local', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Programacao);
    
    // Checa o título
    expect(result).toContain('Programação do Evento');
    
    // Checa se os dados do mock estão no HTML renderizado
    expect(result).toContain('Sexta-feira, 15 de Julho');
    expect(result).toContain('Banda Raízes');
    expect(result).toContain('20:30');
    expect(result).toContain('Palco Principal');
    
    // TDD Subplan 3: Layout Timeline (flex-col no mobile)
    expect(result).toMatch(/flex-col.*md:flex-row/);
  });
});
