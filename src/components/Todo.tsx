
import { Checkbox,Box,Flex, Button,Spacer, Input } from '@chakra-ui/react';
import { ChangeEvent, useState} from 'react';
import { useDispatch } from "react-redux";
import { completeEditTodo, deleteTodo, editTodo, toggleTodo } from "../redux/actions";
import { Iitems } from '../redux/reducer/todos';

export const Todo = ({ todo }: { todo: Iitems }) => {
  const [task, setTask] = useState<string>(todo.content);
  const dispatch = useDispatch();
 
  const handleChecked = () => {
    dispatch(toggleTodo(todo.id));
  }

    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
      setTask(e.target.value);
      todo.content = task;
    }
   
  return (
    <Box marginTop={5}>
    
      {todo.edit === false ? (
        <div>{
          < Flex >
         
            <Box>
            
              <Checkbox onChange={handleChecked} defaultChecked={todo.completed}>
                {todo.completed === true ? <div style={{ color: "red", fontStyle: "italic" }}>{todo.content}</div> : <div style={{ color: "black" }}>{todo.content}</div>}
              </Checkbox>
            </Box>
            <Spacer />
            <Box>
              <Button marginLeft={5} onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
              <Button marginLeft={5} onClick={() => dispatch(editTodo(todo.id))}>Edit</Button>
            </Box>
          
          </Flex>
        }</div>)
        :
        (<div>{
          <Flex>
          <Box><Input value={task} onChange={handleInput}/></Box>
          <Spacer/>
            <Box><Button onClick={() => dispatch(completeEditTodo(task))}>Comfirm</Button></Box>
            </Flex>
        } </div>)
      }
       </Box>
    )
}