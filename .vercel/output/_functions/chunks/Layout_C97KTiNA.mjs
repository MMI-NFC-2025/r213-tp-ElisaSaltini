import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, n as renderHead, k as renderComponent, o as renderSlot } from './astro/server_BhcMEgpZ.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="border-b border-gray-200 bg-cyan-900"> <div class="flex items-center gap-6 px-4 py-7"> <a href="/" class="text-sm font-semibold text-gray-200 hover:underline">Accueil</a> <a href="/offres" class="text-sm font-semibold text-gray-200 hover:underline">Offres</a> </div> </nav>`;
}, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-10 border-t border-gray-200 bg-cyan-900"> <div class="mx-auto max-w-5xl px-6 py-9 text-center text-sm text-gray-200">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Agence immobilière - Tous droits réservés.
</div> </footer>`;
}, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titre } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><title>${titre}</title>${renderHead()}</head> <body class="min-h-screen bg-white text-gray-900 flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-1"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
