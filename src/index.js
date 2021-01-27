
import angular from "angular";
import ngRedux from "ng-redux";
import thunk from "redux-thunk";
import rootReducer from "./redusers";
import { appComponent } from "./components";

const app = angular.module("app", [ngRedux]).config($ngReduxProvider => {
  $ngReduxProvider.createStoreWith(
    rootReducer,
    [thunk]
    /*[
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    ] */
  );
});

app.component("app", appComponent);

angular.bootstrap(document.getElementById("root"), ["app"]);
