export const COUNTER_INCREASE = 'counter/INCREASE' as const;
export const COUNTER_DECREASE = 'counter/DECREASE' as const;

export interface CounterState {
  value: number;
}

export interface CounterAction {
  type: string;
  data: {
    value: number;
  };
}
