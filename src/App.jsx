import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskManager from './components/TaskManager.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <h1>Todo</h1>
        <TaskManager />
      </div>
    </Provider>
  );
}

export default App;
