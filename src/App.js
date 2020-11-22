import AddForm from './Todo/AddForm.jsx'
import TodoList from './Todo/TodoList.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AddForm />
      <TodoList />
    </div>
  );
}

export default App;