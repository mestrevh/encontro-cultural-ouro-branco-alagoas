# Astro Framework Best Practices

1. **TypeScript First:** É obrigatório o uso de TypeScript no frontmatter (`---`). Tipar explicitamente `Props` e usar interfaces.
2. **Partial Hydration (Ilhas):** Componentes estáticos não devem conter a diretiva `client:`. Utilize `client:load`, `client:idle`, ou `client:visible` **apenas** em componentes que exigem interatividade client-side (React/Preact/Svelte ou Web Components).
3. **Semântica HTML5:** Priorizar uso de tags semânticas (`<nav>`, `<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`).
4. **Performance:** Evitar carregar scripts pesados. Usar os componentes `<Image>` ou `<Picture>` nativos do Astro para otimização automática de imagens.
