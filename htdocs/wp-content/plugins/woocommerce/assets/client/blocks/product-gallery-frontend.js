(()=>{"use strict";const e=window.wc.__experimentalInteractivity,t=t=>(0,e.getContext)(t),{state:o}=(0,e.store)("woocommerce/product-gallery"),s=(e,t)=>{const o=e[e.isDialogOpen?"dialogVisibleImagesIds":"visibleImagesIds"],s=o.indexOf(e.selectedImage),c="next"===t?Math.min(s+1,o.length-1):Math.max(s-1,0);e.selectedImage=o[c]},c=e=>{e.isDialogOpen=!1,e.selectedImage=e.firstMainImageId},n={state:{get isSelected(){const{selectedImage:e,imageId:o}=t();return e===o},get pagerDotFillOpacity(){return o.isSelected?1:.2}},actions:{closeDialog:()=>{const e=t();c(e)},openDialog:()=>{t().isDialogOpen=!0},selectImage:()=>{const e=t();e.selectedImage=e.imageId},selectNextImage:e=>{e.stopPropagation();const o=t();s(o,"next")},selectPreviousImage:e=>{e.stopPropagation();const o=t();s(o,"previous")}},callbacks:{watchForChangesOnAddToCartForm:()=>{const e=t(),o=document.querySelector(`form[data-product_id="${e.productId}"]`);if(!o)return;const s=new MutationObserver((function(t){for(const o of t){const t=o.target.getAttribute("current-image");"attributes"===o.type&&t&&e.visibleImagesIds.includes(t)&&(e.selectedImage=t)}}));s.observe(o,{attributes:!0});const c=document.querySelector(".wp-block-add-to-cart-form .reset_variations"),n=()=>{e.selectedImage=e.firstMainImageId};return c&&c.addEventListener("click",n),()=>{s.disconnect(),document.removeEventListener("click",n)}},keyboardAccess:()=>{const e=t();let o=!0;const n=t=>{o&&e.isDialogOpen&&(o=!1,requestAnimationFrame((()=>{o=!0})),"Escape"===t.code&&c(e),"ArrowLeft"===t.code&&s(e,"previous"),"ArrowRight"===t.code&&s(e,"next"))};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}}};(0,e.store)("woocommerce/product-gallery",n)})();