import './App.css'
import Todo from './components/Todo';

const App =()=> {
   return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
