import {
  EntityCollectionAction,
  EntityCollectionState,
  ENTITY_COLLECTION_ADD,
  ENTITY_COLLECTION_INIT,
} from '../models/EntityModels';

export default function entityCollectionReducer(
  state: EntityCollectionState = {} as EntityCollectionState,
  action: EntityCollectionAction,
): EntityCollectionState {
  var newState = { ...state };

  switch (action.type) {
    case ENTITY_COLLECTION_INIT:
      newState.data.collections = action.data;
      break;
    case ENTITY_COLLECTION_ADD:
      newState.data.collections = newState.data.collections.concat(action.data);
      break;
    default:
      break;
  }

  return newState;
}
