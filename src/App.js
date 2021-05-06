import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoItemList from './components/TodoItemList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 과제 하기",
      checked: true
    },
    {
      id: 2,
      text: "집에가기",
      checked: false
    },
    {
      id: 3,
      text: "전화하기",
      checked: false
    }
  ]);
  const id = useRef(4);

  const onInsert = useCallback(text=>{
    const newTodo = {
      id:id.current,
      text:text,
      checked: false
    }
    setTodos(todos.concat(newTodo));
    id.current +=1;
  },[todos]);

  const onRemove = useCallback(id=>{
    setTodos(todos.filter(todo=>(
      todo.id !== id
    )));
  }, [todos])

  const onToggle = useCallback(id=> {
    setTodos(todos.map(todo=>
      todo.id === id ? {...todo, checked: !todo.checked} : todo
    ));
  }, [todos]);

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoItemList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
