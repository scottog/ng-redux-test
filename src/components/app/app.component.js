import * as CounterActions from "../../actions/counter";

class CounterController {
  constructor($ngRedux, $scope) {
    /* ngRedux will merge the requested state's slice and actions onto this,
    you don't need to redefine them in your controller */

    let unsubscribe = $ngRedux.connect(
      this.mapStateToThis,
      CounterActions
    )(this);
    $scope.$on("$destroy", unsubscribe);
  }

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    return {
      value: state.counter
    };
  }
}

const appComponent = {
  template: `
<div>
    <p>Clicked: {{$ctrl.value}} times </p>
    <button ng-click='$ctrl.increment()'>+</button>
    <button ng-click='$ctrl.decrement()'>-</button>
    <button ng-click='$ctrl.incrementIfOdd()'>Increment if odd</button>
    <button ng-click='$ctrl.incrementAsync()'>Increment Async</button>
</div>
`,
  controller: CounterController
};

export default appComponent;
