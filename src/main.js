// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
require("typeface-roboto");
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTerminal,
  faPenFancy,
  faAsterisk
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faCodepen,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Tweet, Moment, Timeline } from "vue-tweet-embed";

library.add(
  faTerminal,
  faPenFancy,
  faAsterisk,
  faLinkedin,
  faGithub,
  faCodepen,
  faTwitter
);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("FA-Icon", FontAwesomeIcon);
  Vue.component("Timeline", Timeline);
}
