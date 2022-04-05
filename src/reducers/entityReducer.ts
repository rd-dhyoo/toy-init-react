import { EntityAction, EntityState, ENTITY_UPDATE } from '../models/EntityModels';

export default function entityReducer(
  state: EntityState = {} as EntityState,
  action: EntityAction,
): EntityState {
  var newState = { ...state };

  switch (action.type) {
    case ENTITY_UPDATE:
      newState.data = action.data;
      break;
    default:
      break;
  }

  return newState;
}
