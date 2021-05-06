import React, { useCallback, useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

const TodoInsert = ({onInsert}) => {
   const [value, setValue] = useState('');

   const onChange = useCallback(e=>{
      setValue(e.target.value);
   }, []);

   const onSubmit = useCallback(e=> {
      onInsert(value);
      setValue('');
      e.preventDefault();
   },[onInsert, value]);

   return(
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input 
            type="text" 
            placeholder="할 일을 입력하세요" 
            value={value}
            onChange={onChange}
         />
         <button type="submit">
            <AiOutlinePlus/>
         </button>
      </form>
   );
}

export default TodoInsert;