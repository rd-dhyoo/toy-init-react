import { CounterState } from './CounterModel';
import { EntityCollectionState, EntityState } from './EntityModels';

export interface SystemStore {
  counterReducer: CounterState;
  entityReducer: EntityState;
  entityCollectionReducer: EntityCollectionState;
}
