import {
  CounterAction,
  CounterState,
  COUNTER_DECREASE,
  COUNTER_INCREASE,
} from '../models/CounterModel';

export default function counterReducer(
  state: CounterState = {} as CounterState,
  action: CounterAction,
): CounterState {
  var newState = { ...state };

  switch (action.type) {
    case COUNTER_INCREASE:
      newState.value += action.data.value;
      break;
    case COUNTER_DECREASE:
      newState.value -= action.data.value;
      break;
    default:
      break;
  }

  return newState;
}
