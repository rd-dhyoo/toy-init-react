import './App.css';
import { Provider } from 'react-redux';
import CounterComponent from './components/CounterComponent';
import configureStore from './configureStore';
import { useEffect } from 'react';
import {
  counterStateFactory,
  entityStateCollectionFactory,
  entityStateFactory,
} from './factories/StateModelFactory';
import { decreaseCounterAction, increaseCounterAction } from './actions/CounterActions';
import { updateEntityAction } from './actions/EntityAction';
import { Entity } from './models/EntityModels';
import EntityComponent from './components/EntityComponent';
import { demoAddEntityCollectionAction } from './actions/EntityCollectionAction';
import EntityCollectionComponent from './components/EntityCollectionComponent';

const counterReducer = counterStateFactory();
const entityReducer = entityStateFactory();
const entityCollectionReducer = entityStateCollectionFactory();

export const store = configureStore({ counterReducer, entityReducer, entityCollectionReducer });

function App() {
  const updateCounter = () => {
    const action = increaseCounterAction();
    store.dispatch(action);
  };

  const makeEntityAsync = (): Promise<Entity> => {
    const promise = new Promise<Entity>((resolve, reject) => {
      const rnd = Math.random();
      const id = 'id-' + rnd;

      const result: Entity = {
        id: id,
        value: rnd,
      };

      resolve(result);
    });

    return promise;
  };

  const updateEntityAsync = async () => {
    var entity = await makeEntityAsync();
    const action = updateEntityAction(entity);
    store.dispatch(action);
  };

  const updateEntityCollection = () => {
    const action = demoAddEntityCollectionAction();
    store.dispatch(action);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        updateCounter();
        await updateEntityAsync();
        updateEntityCollection();
      } catch (err) {
        console.log(err);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <CounterComponent />
        </div>
        <div>
          <button
            onClick={() => {
              const action = increaseCounterAction();
              store.dispatch(action);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              const action = decreaseCounterAction();
              store.dispatch(action);
            }}
          >
            -
          </button>
        </div>
        <div>
          <EntityComponent />
        </div>
        <div>
          <EntityCollectionComponent />
        </div>
      </div>
    </Provider>
  );
}

export default App;
