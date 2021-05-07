import React from 'react';
import TodoItem from './TodoItem';
import './TodoItemList.scss';

const TodoItemList = props => {
   const {todos, onRemove, onToggle} = props;
   return(
      <div className="TodoItemList">
         {todos.map((todo)=>(
            <TodoItem 
               todo={todo} 
               key={todo.id}
               onRemove={onRemove}
               onToggle={onToggle}
            />
         ))}
      </div>
   );
}

export default TodoItemList;