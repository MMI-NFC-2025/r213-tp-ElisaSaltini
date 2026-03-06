import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate } from '../../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import 'clsx';
import { a as addOffre } from '../../chunks/backend_Dkz0R-Sm.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await addOffre(formData);
    message = response.message;
  }
  return renderTemplate`${maybeRenderHead()}<h1 class="text-lg">Ajouter une offre</h1> ${message && renderTemplate`<p class="text-red-600"> ${message} </p>`} <form action="/offres/add" method="POST" enctype="multipart/form-data"> <input type="text" name="nomMaison" placeholder="Nom de la maison" required class="w-full mt-2 p-2 border border-gray-300 rounded-md"> <input type="number" name="prix" placeholder="Prix"> <input type="number" name="nbSdb" placeholder="Nombre de salles de bain"> <input type="number" name="nbChambres" placeholder="Nombre de chambres"> <input type="number" name="surface" placeholder="Superficie"> <input type="file" name="images"> <button type="submit">Ajouter</button> </form>`;
}, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/add.astro", void 0);

const $$file = "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/add.astro";
const $$url = "/offres/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
