import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test, describe } from 'vitest';
import Button from '../Button.astro';

describe('Button Component', () => {
  test('renders with default slot content', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {
      slots: { default: 'Clique Aqui' }
    });
    
    expect(result).toContain('Clique Aqui');
    expect(result).toContain('<button');
  });

  test('applies variant styling', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {
      props: { variant: 'secondary' },
      slots: { default: 'Secundário' }
    });
    
    expect(result).toContain('secondary');
    expect(result).toContain('bg-slate-800');
  });

  test('passes attributes correctly', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {
      props: { type: 'submit', disabled: true },
      slots: { default: 'Enviar' }
    });
    
    expect(result).toContain('type="submit"');
    expect(result).toContain('disabled');
  });
});
