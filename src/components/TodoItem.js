import React from 'react';
import './TodoItem.scss';
import cn from 'classnames';
import {GrCheckbox, GrCheckboxSelected} from 'react-icons/gr';
import {IoMdRemoveCircleOutline} from 'react-icons/io';

const TodoItem = props => {
   const {todo, onRemove, onToggle} = props;
   const {text, checked, id} = todo;

   return(
      <div className="TodoItem">
         <div className={cn('checkbox', {checked})} onClick={()=>onToggle(id)}>
            {checked ? <GrCheckboxSelected/> : <GrCheckbox/>}
         </div>
         <div className="text">
            {text}
         </div>
         <div className="remove" onClick={()=>onRemove(id)}>
            <IoMdRemoveCircleOutline/>
         </div>
      </div>
   );
}

export default TodoItem;