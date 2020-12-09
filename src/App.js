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
  const AppStyle = {
    width: '800px',
    margin: '0 auto'
  }

  const h1 = {
    textAlign: 'center',
    fontSize: '24pt',
    marginTop: '48px'
  }

  const form = {
    width: '400px',
    margin: '0 auto',
    paddingTop: '32px'
  }

  return (
    <div className="App" style={AppStyle}>
      <h1 style={h1}>TODO LIST</h1>
      <div className="form-area" style={form}>
        <AddForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;