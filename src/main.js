// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
require("typeface-roboto");
//import Icon from "vue-awesome/components/Icon";
//import "vue-awesome/icons";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  //Vue.component("Icon", Icon);
}
