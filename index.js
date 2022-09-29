import Viewer from "./viewer.js";

const install = function (app) {
  app.component(Viewer.name, Viewer);
};

export default install;