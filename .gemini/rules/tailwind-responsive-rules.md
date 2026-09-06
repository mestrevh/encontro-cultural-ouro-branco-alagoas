# Tailwind CSS & UI Rules

1. **Mobile-First Obrigatório:** Todo desenvolvimento visual deve começar pela versão mobile (sem prefixos). As adaptações para telas maiores devem usar `sm:`, `md:`, `lg:`, e `xl:`.
2. **Proibido CSS Inline:** Não utilize o atributo `style`. Todo o estilo deve ser feito via classes do Tailwind.
3. **Variáveis e Design System:** Utilizar as cores baseadas em HSL/RGB definidas no `tailwind.config.mjs` (ex: `bg-primary`, `text-secondary`). Evitar cores hardcoded (`#ff0000`) em componentes.
4. **Dark Mode:** Sempre prever a transição para dark mode usando o prefixo `dark:` para cores de fundo e texto, garantindo acessibilidade em ambos os temas.
