import { useSelector } from 'react-redux';
import { SystemStore } from '../models/Common';
import { Entity } from '../models/EntityModels';

const EntityCollectionComponent: React.FC = () => {
  const entities = useSelector(
    (state: SystemStore) => state.entityCollectionReducer.data.collections,
  );

  const makeEntityComponent = (entity: Entity) => (
    <div>
      <div>id : {entity.id} </div>
      <div>value : {entity.value} </div>
    </div>
  );

  return (
    <div>
      {entities.map((entity: Entity) => {
        return makeEntityComponent(entity);
      })}
    </div>
  );
};

export default EntityCollectionComponent;
