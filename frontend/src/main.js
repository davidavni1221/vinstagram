import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChartLine,
  faChildren,
  faHome,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import ElementPlus from 'element-plus';
import { EmojiPickerPlugin } from 'vue-emoji-picker'
import "./styles/styles.scss";

const app = createApp(App)

library.add(faChartLine, faChildren, faHome, faAddressCard)

app.use(router)
app.use(store)
app.use(ElementPlus);
app.use(EmojiPickerPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
