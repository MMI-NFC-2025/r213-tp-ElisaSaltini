import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BhcMEgpZ.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BdiQR0cW.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/elisa/Documents/MMI1%20Elisa/Semestre%201/R/r213-tp-ElisaSaltini/","cacheDir":"file:///C:/Users/elisa/Documents/MMI1%20Elisa/Semestre%201/R/r213-tp-ElisaSaltini/node_modules/.astro/","outDir":"file:///C:/Users/elisa/Documents/MMI1%20Elisa/Semestre%201/R/r213-tp-ElisaSaltini/dist/","srcDir":"file:///C:/Users/elisa/Documents/MMI1%20Elisa/Semestre%201/R/r213-tp-ElisaSaltini/src/","publicDir":"file:///C:/Users/elisa/Documents/MMI1%20Elisa/Semestre%201/R/r213-tp-ElisaSaltini/public/","buildClientDir":"file:///C:/Users/elisa/Documents/MMI1%20Elisa/Semestre%201/R/r213-tp-ElisaSaltini/dist/client/","buildServerDir":"file:///C:/Users/elisa/Documents/MMI1%20Elisa/Semestre%201/R/r213-tp-ElisaSaltini/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/offres/add","isIndex":false,"type":"page","pattern":"^\\/offres\\/add\\/?$","segments":[[{"content":"offres","dynamic":false,"spread":false}],[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/offres/add.astro","pathname":"/offres/add","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CglMbFqU.css"}],"routeData":{"route":"/offres/prix/[min]/[max]","isIndex":false,"type":"page","pattern":"^\\/offres\\/prix\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"offres","dynamic":false,"spread":false}],[{"content":"prix","dynamic":false,"spread":false}],[{"content":"min","dynamic":true,"spread":false}],[{"content":"max","dynamic":true,"spread":false}]],"params":["min","max"],"component":"src/pages/offres/prix/[min]/[max].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CglMbFqU.css"}],"routeData":{"route":"/offres/prix/[prix]","isIndex":false,"type":"page","pattern":"^\\/offres\\/prix\\/([^/]+?)\\/?$","segments":[[{"content":"offres","dynamic":false,"spread":false}],[{"content":"prix","dynamic":false,"spread":false}],[{"content":"prix","dynamic":true,"spread":false}]],"params":["prix"],"component":"src/pages/offres/prix/[prix].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CglMbFqU.css"}],"routeData":{"route":"/offres/surface/[surface]","isIndex":false,"type":"page","pattern":"^\\/offres\\/surface\\/([^/]+?)\\/?$","segments":[[{"content":"offres","dynamic":false,"spread":false}],[{"content":"surface","dynamic":false,"spread":false}],[{"content":"surface","dynamic":true,"spread":false}]],"params":["surface"],"component":"src/pages/offres/surface/[surface].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CglMbFqU.css"}],"routeData":{"route":"/offres/[id]","isIndex":false,"type":"page","pattern":"^\\/offres\\/([^/]+?)\\/?$","segments":[[{"content":"offres","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/offres/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CglMbFqU.css"}],"routeData":{"route":"/offres","isIndex":true,"type":"page","pattern":"^\\/offres\\/?$","segments":[[{"content":"offres","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/offres/index.astro","pathname":"/offres","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CglMbFqU.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/prix/[min]/[max].astro",{"propagation":"none","containsHead":true}],["C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/prix/[prix].astro",{"propagation":"none","containsHead":true}],["C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/surface/[surface].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/offres/add@_@astro":"pages/offres/add.astro.mjs","\u0000@astro-page:src/pages/offres/prix/[min]/[max]@_@astro":"pages/offres/prix/_min_/_max_.astro.mjs","\u0000@astro-page:src/pages/offres/prix/[prix]@_@astro":"pages/offres/prix/_prix_.astro.mjs","\u0000@astro-page:src/pages/offres/surface/[surface]@_@astro":"pages/offres/surface/_surface_.astro.mjs","\u0000@astro-page:src/pages/offres/[id]@_@astro":"pages/offres/_id_.astro.mjs","\u0000@astro-page:src/pages/offres/index@_@astro":"pages/offres.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CFLRYxaj.mjs","C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DpGI3GeG.mjs","C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.D8D32vRH.js","C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/components/OffreCard.astro?astro&type=script&index=0&lang.ts":"_astro/OffreCard.astro_astro_type_script_index_0_lang.4eL4ep6e.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/pages/offres/index.astro?astro&type=script&index=0&lang.ts","const i=document.getElementById(\"favori-button\");let s=!1;i?.addEventListener(\"click\",()=>{s=!s,document.querySelectorAll(\".offre\").forEach(t=>{const a=t.dataset.favori===\"true\";s?(t.style.display=a?\"block\":\"none\",i.textContent=\"Afficher tout\"):(t.style.display=\"block\",i.textContent=\"Afficher les favoris\")})});const n=document.querySelectorAll(\".offre-card\");n.forEach(e=>{const t=e.querySelector(\".favori-toggle\");t&&t.addEventListener(\"click\",a=>{a.stopPropagation();const l=e.dataset.favori===\"true\";e.dataset.favori=l?\"false\":\"true\",e.classList.toggle(\"bg-indigo-100\"),e.classList.toggle(\"bg-gray-100\"),t.textContent=l?\"Standard\":\"Favori\",t.classList.toggle(\"bg-indigo-800\"),t.classList.toggle(\"text-white\"),t.classList.toggle(\"bg-slate-200\"),t.classList.toggle(\"text-indigo-950\");const o=e.closest(\".offre\");o&&(o.dataset.favori=e.dataset.favori),s&&o&&(o.style.display=e.dataset.favori===\"true\"?\"block\":\"none\")})});"],["C:/Users/elisa/Documents/MMI1 Elisa/Semestre 1/R/r213-tp-ElisaSaltini/src/components/OffreCard.astro?astro&type=script&index=0&lang.ts","const a=document.querySelectorAll(\".offre-card\");a.forEach(t=>{const e=t.querySelector(\".star-button\");e?.addEventListener(\"click\",s=>{s.preventDefault();const l=t.dataset.favori===\"true\";t.dataset.favori=l?\"false\":\"true\",t.classList.toggle(\"bg-slate-100\"),t.classList.toggle(\"bg-white\"),e.innerHTML=t.dataset.favori===\"true\"?`\n          <svg class=\"h-6 w-6 text-slate-700\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n            <path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path>\n          </svg>\n        `:`\n          <svg class=\"h-6 w-6 text-slate-700\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n            <path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"></path>\n          </svg>\n        `})});"]],"assets":["/_astro/index.CglMbFqU.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"DGDXpvvBusJ4hlZUVb7d2Tlngy3N5k2am/5/dMol4TI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
