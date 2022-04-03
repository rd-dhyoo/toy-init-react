import './App.css';
import { Provider } from 'react-redux';
import CounterComponent from './components/tests/CounterComponent';
import configureStore from './configureStore';
import { decreaseCounter, increaseCounter } from './actions/tests/counterActions';
import { CounterState } from './models/CounterModel';

const counterReducer: CounterState = { id: '', value: 0 };
export const store = configureStore({ counterReducer });

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <CounterComponent />
        </div>
        <div>
          <button
            onClick={() => {
              const action = increaseCounter();
              store.dispatch(action);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              const action = decreaseCounter();
              store.dispatch(action);
            }}
          >
            -
          </button>
        </div>
      </div>
    </Provider>
  );
}

export default App;
