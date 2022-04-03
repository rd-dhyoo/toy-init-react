import { useState } from 'react';
import { store } from '../../App';

const CounterComponent: React.FC = () => {
  store.subscribe(() => {
    const counter = store.getState().counterReducer.value;
    setValue(counter);
  });

  const [value, setValue] = useState(0);

  return <div>counter :{value} </div>;
};

export default CounterComponent;
