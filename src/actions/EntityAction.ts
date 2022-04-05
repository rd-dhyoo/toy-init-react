import { Entity, EntityAction, ENTITY_UPDATE } from '../models/EntityModels';

export const updateEntityAction = (state: Entity): EntityAction => ({
  type: ENTITY_UPDATE,
  data: state,
});
