/**
 * TODO
 * React Hooks化
 * 現状Reduxとの共存方法がわからないので、クラスコンポーネントで記載することにした。
 * 共存可能かどうかわかってから、Hooks化の対応を行う
 */

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