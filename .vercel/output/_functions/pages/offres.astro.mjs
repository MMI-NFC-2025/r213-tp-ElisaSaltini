import { e as createComponent, f as createAstro, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C97KTiNA.mjs';
import { $ as $$OffreCard } from '../chunks/OffreCard_Dh9ciPOq.mjs';
import { f as filterByPrix, g as getOffres } from '../chunks/backend_Dkz0R-Sm.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let offres;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const minPrix = parseInt(data.get("minPrix"));
    const maxPrix = parseInt(data.get("maxPrix"));
    if (minPrix > 0 && maxPrix > 0 && maxPrix > minPrix) {
      console.log(`Filtrage des offres entre ${minPrix}\u20AC et ${maxPrix}\u20AC`);
      offres = await filterByPrix(minPrix, maxPrix);
      console.log(`Offres trouv\xE9es : ${offres.length}`);
      if (offres.length === 0) ;
    }
  } else {
    offres = await getOffres();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Offres" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 py-6"> <h1 class="text-4xl font-bold text-gray-900 mt-2 mb-4">OFFRES</h1> <form action="/offres" method="POST" class="space-y-5"> <input type="number" name="minPrix" placeholder="Prix minimum" class="border border-gray-300 rounded-md px-3 py-2 mr-2"> <input type="number" name="maxPrix" placeholder="Prix maximum" class="border border-gray-300 rounded-md px-3 py-2 mr-2"> <input type="submit" value="Filtrer par prix" class="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-800"> </form> <div class="flex flex-row flex-wrap items-center gap-3 mb-6"> <button id="favori-button" class="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
Afficher les favoris
</button> <a href="/offres/surface/80" class="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
Voir les maisons de plus de 80 m²
</a> <a href="/offres/prix/3000" class="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
Voir les maisons à moins de 3000 €
</a> <a href="/offres/prix/1500/300000000" class="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
Voir les maisons entre 1500 € et 300000000 €
</a> </div> <div class="mt-5 flex gap-6 overflow-x-auto pb-4"> ${offres?.map((offre) => renderTemplate`<div class="offre shrink-0 w-\[420px\]"${addAttribute(offre.favori?.toString() ?? "false", "data-favori")}> ${renderComponent($$result2, "Offrecard", $$OffreCard, { "offre": offre })} </div>`)} </div> </div> ` })} ${renderScript($$result, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/index.astro", void 0);

const $$file = "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/index.astro";
const $$url = "/offres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
