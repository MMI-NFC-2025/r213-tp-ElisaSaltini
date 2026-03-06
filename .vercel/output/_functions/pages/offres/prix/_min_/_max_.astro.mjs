import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_C97KTiNA.mjs';
import { $ as $$OffreCard } from '../../../../chunks/OffreCard_Dh9ciPOq.mjs';
import { g as getOffres } from '../../../../chunks/backend_Dkz0R-Sm.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const $$max = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$max;
  const { min, max } = Astro2.params;
  const minPrix = Number(min);
  const maxPrix = Number(max);
  const offres = (await getOffres()).filter((o) => {
    const p = Number(o.prix);
    return p >= minPrix && p <= maxPrix;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": `Prix entre ${minPrix}\u20AC et ${maxPrix}\u20AC` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 py-6"> <h1 class="text-4xl font-bold text-gray-900 mt-2 mb-4">
Maisons entre ${minPrix} € et ${maxPrix} €
</h1> <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${offres.map((offre) => renderTemplate`<div class="offre"${addAttribute(offre.favori?.toString() ?? "false", "data-favori")}> ${renderComponent($$result2, "Offrecard", $$OffreCard, { "offre": offre })} </div>`)} </div> <a href="/offres" class="mt-8 inline-block rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
Retour aux offres
</a> </div> ` })}`;
}, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/prix/[min]/[max].astro", void 0);

const $$file = "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/prix/[min]/[max].astro";
const $$url = "/offres/prix/[min]/[max]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$max,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
