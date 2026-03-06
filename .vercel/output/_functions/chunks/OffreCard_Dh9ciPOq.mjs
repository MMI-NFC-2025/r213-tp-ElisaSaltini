import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, l as renderScript } from './astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import 'clsx';
import { c as getImageUrl } from './backend_Dkz0R-Sm.mjs';

const $$Astro$1 = createAstro();
const $$PbImages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PbImages;
  const {
    record,
    imageField,
    width = 300,
    height = 500
  } = Astro2.props;
  const imageURL = await getImageUrl(record, imageField);
  return renderTemplate`${imageURL && renderTemplate`${maybeRenderHead()}<img${addAttribute(imageURL, "src")}${addAttribute(record.nomMaison || "Image", "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")}>`}`;
}, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/components/PbImages.astro", void 0);

const $$Astro = createAstro();
const $$OffreCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OffreCard;
  const { offre } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`offre-card h-full flex flex-col rounded-lg border border-gray-200 p-4 ${offre.favori ? "bg-slate-100" : "bg-white"}`, "class")}${addAttribute(offre.favori.toString(), "data-favori")}> <header class="flex items-start justify-between gap-3"> <h2 class="text-lg font-semibold">${offre.nomMaison}</h2> <button class="star-button" aria-label="Favori"> ${offre.favori ? renderTemplate`<svg class="h-6 w-6 text-slate-700" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path> </svg>` : renderTemplate`<svg class="h-6 w-6 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path> </svg>`} </button> </header> <div class="mt-4 h-64 w-full overflow-hidden rounded-md"> ${renderComponent($$result, "PbImages", $$PbImages, { "record": offre, "imageField": "images", "width": 400, "height": 500, "class": "w-full h-full object-cover" })} </div> <p class="mt-3 text-sm text-gray-600">${offre.adresse}</p> <p class="mt-2 text-sm"> ${offre.nbChambres} chambres • ${offre.nbSdb} sdb • ${offre.surface} m²
</p> <p class="mt-2 mb-4 font-semibold">${offre.prix} €</p> <a${addAttribute(`/offres/${offre.id}`, "href")} class="mt-auto rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 text-center">
Voir plus
</a> </article> ${renderScript($$result, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/components/OffreCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/components/OffreCard.astro", void 0);

export { $$OffreCard as $ };
