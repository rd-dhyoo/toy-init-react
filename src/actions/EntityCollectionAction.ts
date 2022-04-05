import { Entity, EntityCollectionAction, ENTITY_COLLECTION_ADD } from '../models/EntityModels';

export const AddEntityCollectionAction = (collections: Entity[]): EntityCollectionAction => ({
  type: ENTITY_COLLECTION_ADD,
  data: collections,
});

export const demoAddEntityCollectionAction = (): EntityCollectionAction => {
  var value = Math.floor(Math.random() * 10000);
  var id = 'id-' + value;

  const collections: Entity[] = [{ id: id, value: value }];
  var action = AddEntityCollectionAction(collections);
  return action;
};
