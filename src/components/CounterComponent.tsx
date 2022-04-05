import { useSelector } from 'react-redux';
import { SystemStore } from '../models/Common';

const CounterComponent: React.FC = () => {
  const value = useSelector((state: SystemStore) => state.counterReducer.value);

  return <div>counter : {value} </div>;
};

export default CounterComponent;
