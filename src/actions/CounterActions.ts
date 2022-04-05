import { CounterAction, COUNTER_DECREASE, COUNTER_INCREASE } from '../models/CounterModel';

export function increaseCounterAction(): CounterAction {
  return {
    type: COUNTER_INCREASE,
    data: {
      value: 1,
    },
  };
}

export function decreaseCounterAction(): CounterAction {
  return {
    type: COUNTER_DECREASE,
    data: {
      value: 1,
    },
  };
}
