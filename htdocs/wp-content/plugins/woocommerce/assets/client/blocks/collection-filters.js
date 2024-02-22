(()=>{"use strict";var e,t={8903:(e,t,o)=>{o.r(t);var r=o(9196);const l=window.wp.blocks;var i=o(2911),n=o(9703);const c=window.wc.wcSettings;var a,s,d,p,u,m,w,b,v,f;const g=(0,c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),k=(g.pluginUrl,g.pluginUrl,g.buildPhase),S=(null===(a=c.STORE_PAGES.shop)||void 0===a||a.permalink,null===(s=c.STORE_PAGES.checkout)||void 0===s||s.id,null===(d=c.STORE_PAGES.checkout)||void 0===d||d.permalink,null===(p=c.STORE_PAGES.privacy)||void 0===p||p.permalink,null===(u=c.STORE_PAGES.privacy)||void 0===u||u.title,null===(m=c.STORE_PAGES.terms)||void 0===m||m.permalink,null===(w=c.STORE_PAGES.terms)||void 0===w||w.title,null===(b=c.STORE_PAGES.cart)||void 0===b||b.id,null===(v=c.STORE_PAGES.cart)||void 0===v||v.permalink,null!==(f=c.STORE_PAGES.myaccount)&&void 0!==f&&f.permalink?c.STORE_PAGES.myaccount.permalink:(0,c.getSetting)("wpLoginUrl","/wp-login.php"),(0,c.getSetting)("localPickupEnabled",!1),(0,c.getSetting)("countries",{})),y=(0,c.getSetting)("countryData",{}),O=(Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowBilling)).map((e=>[e,S[e]||""]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowBilling)).map((e=>[e,y[e].states||[]]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowShipping)).map((e=>[e,S[e]||""]))),Object.fromEntries(Object.keys(y).filter((e=>!0===y[e].allowShipping)).map((e=>[e,y[e].states||[]]))),Object.fromEntries(Object.keys(y).map((e=>[e,y[e].locale||[]]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],additional:[]}),h=((0,c.getSetting)("addressFieldsLocations",O).address,(0,c.getSetting)("addressFieldsLocations",O).contact,(0,c.getSetting)("addressFieldsLocations",O).additional,JSON.parse('{"name":"woocommerce/collection-filters","version":"1.0.0","title":"Collection Filters","description":"A block that adds product filters to the product collection.","category":"woocommerce","keywords":["WooCommerce","Filters"],"textdomain":"woocommerce","supports":{"html":false,"reusable":false},"usesContext":["query","queryId"],"providesContext":{"collectionData":"collectionData"},"attributes":{"collectionData":{"type":"object","default":{}}},"apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')),E=window.wp.blockEditor;var _=o(5736);const P=(0,c.getSetting)("attributes",[]),j=[["woocommerce/collection-active-filters",{}],["core/heading",{content:(0,_.__)("Filter by Price","woocommerce"),level:3}],["woocommerce/collection-price-filter",{}],["core/heading",{content:(0,_.__)("Filter by Stock status","woocommerce"),level:3}],["woocommerce/collection-stock-filter",{}],["core/heading",{content:(0,_.__)("Filter by Rating","woocommerce"),level:3}],["woocommerce/collection-rating-filter",{}]],T=P.find(Boolean);T&&j.push(["core/heading",{content:(0,_.sprintf)(
// translators: %s is the attribute label.
// translators: %s is the attribute label.
(0,_.__)("Filter by %s","woocommerce"),T.attribute_label),level:3}],["woocommerce/collection-attribute-filter",{attributeId:parseInt(null==T?void 0:T.attribute_id,10)}]);k>2&&(0,l.registerBlockType)(h,{icon:{src:(0,r.createElement)(i.Z,{icon:n.Z,className:"wc-block-editor-components-block-icon"})},edit:()=>{const e=(0,E.useBlockProps)(),t=(0,E.useInnerBlocksProps)(e,{template:j});return(0,r.createElement)("nav",{...t})},save:function(){return(0,r.createElement)(E.InnerBlocks.Content,null)}})},9196:e=>{e.exports=window.React},9307:e=>{e.exports=window.wp.element},5736:e=>{e.exports=window.wp.i18n},444:e=>{e.exports=window.wp.primitives}},o={};function r(e){var l=o[e];if(void 0!==l)return l.exports;var i=o[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,o,l,i)=>{if(!o){var n=1/0;for(d=0;d<e.length;d++){for(var[o,l,i]=e[d],c=!0,a=0;a<o.length;a++)(!1&i||n>=i)&&Object.keys(r.O).every((e=>r.O[e](o[a])))?o.splice(a--,1):(c=!1,i<n&&(n=i));if(c){e.splice(d--,1);var s=l();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,l,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=3418,(()=>{var e={3418:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var l,i,[n,c,a]=o,s=0;if(n.some((t=>0!==e[t]))){for(l in c)r.o(c,l)&&(r.m[l]=c[l]);if(a)var d=a(r)}for(t&&t(o);s<n.length;s++)i=n[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},o=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l=r.O(void 0,[2869],(()=>r(8903)));l=r.O(l),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["collection-filters"]=l})();