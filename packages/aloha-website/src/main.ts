import "./app.css";
import App from "./App.svelte";
import "@aloha-ui/components/dist/components";
import "../../aloha-style/dist/index.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
