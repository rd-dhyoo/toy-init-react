import { CounterAction, CounterState, DECREASE, INCREASE } from '../../models/CounterModel';

const initState = {
  id: '',
  value: 0,
};

export default function counterReducer(
  state: CounterState = initState,
  action: CounterAction,
): CounterState {
  var newState = { ...state };

  switch (action.type) {
    case INCREASE:
      newState.value += action.value;
      break;
    case DECREASE:
      newState.value -= action.value;
      break;
    default:
      break;
  }

  return newState;
}
