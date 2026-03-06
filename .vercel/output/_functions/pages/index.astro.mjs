import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BhcMEgpZ.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C97KTiNA.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Accueil" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Accueil</h1> ` })}`;
}, "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/index.astro", void 0);

const $$file = "C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
