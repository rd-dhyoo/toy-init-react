import { useSelector } from 'react-redux';
import { SystemStore } from '../models/Common';

const EntityComponent: React.FC = () => {
  const entity = useSelector((state: SystemStore) => state.entityReducer.data);

  return (
    <div>
      <div>id : {entity.id} </div>
      <div>value : {entity.value} </div>
    </div>
  );
};

export default EntityComponent;
