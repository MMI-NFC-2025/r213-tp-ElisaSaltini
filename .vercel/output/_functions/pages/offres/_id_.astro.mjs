import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C97KTiNA.mjs';
import { b as getOffre } from '../../chunks/backend_Dkz0R-Sm.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const offre = await getOffre(id);
  if (!offre) {
    return new Response("Offre introuvable", { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": offre.nomMaison }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 py-6"> <h2 class="text-3xl font-bold">${offre.nomMaison}</h2> <ul class="mt-4 space-y-2"> <li><strong>Adresse :</strong> ${offre.adresse}</li> <li><strong>Surface :</strong> ${offre.surface} m²</li> <li><strong>Chambres :</strong> ${offre.nbChambres}</li> <li><strong>SDB :</strong> ${offre.nbSdb}</li> <li><strong>Prix :</strong> ${offre.prix} €</li> </ul> <a href="/offres" class="mt-8 inline-block rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
Retour aux offres
</a> </div> ` })}`;
}, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/[id].astro", void 0);

const $$file = "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/[id].astro";
const $$url = "/offres/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
