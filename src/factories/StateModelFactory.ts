import { CounterState } from '../models/CounterModel';
import { EntityCollectionState, EntityState } from '../models/EntityModels';

export const counterStateFactory = (): CounterState => ({ value: 0 });
export const entityStateFactory = (): EntityState => ({ data: { id: '', value: 0 } });
export const entityStateCollectionFactory = (): EntityCollectionState => ({
  data: {
    maxCount: 0,
    collections: [],
  },
});
