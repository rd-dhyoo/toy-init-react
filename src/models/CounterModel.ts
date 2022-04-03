export const INCREASE = 'counter/INCREASE' as const;
export const DECREASE = 'counter/DECREASE' as const;

export interface SystemStore {
  counterReducer: CounterState;
}

export interface CounterState {
  id: string;
  value: number;
}

export interface CounterAction {
  type: string;
  value: number;
}
