export const ENTITY_UPDATE = 'entity/UPDATE' as const;

export interface Entity {
  id: string;
  value: number;
}

export interface EntityState {
  data: Entity;
}

export interface EntityAction {
  type: string;
  data: Entity;
}

export const ENTITY_COLLECTION_INIT = 'entity-collation/INIT' as const;
export const ENTITY_COLLECTION_ADD = 'entity-collation/ADD' as const;

export interface EntityCollection {
  maxCount: number;
  collections: Entity[];
}

export interface EntityCollectionState {
  data: EntityCollection;
}

export interface EntityCollectionAction {
  type: string;
  data: Entity[];
}
