import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router).mount("#app");

// module.exports = {
//   devServer: {
//     Proxy: {
//       "/api": {
//         target: "http://localhost:3000",
//       },
//     },
//   },
// };
