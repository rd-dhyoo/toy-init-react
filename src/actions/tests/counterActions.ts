import { CounterAction, DECREASE, INCREASE } from '../../models/CounterModel';

export function increaseCounter(): CounterAction {
  return {
    type: INCREASE,
    value: 1,
  };
}

export function decreaseCounter(): CounterAction {
  return {
    type: DECREASE,
    value: 1,
  };
}
