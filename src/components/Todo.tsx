
import { Checkbox,Box,Flex, Button, } from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions";
import { Iitems } from '../redux/reducer/todos';

export const Todo = ({ todo }:{todo:Iitems}) => {
      const dispatch = useDispatch();
 
  const handleChecked = () => {
    dispatch(toggleTodo(todo.id));
   
  } 
   
    return (
      <Box marginTop={5}>
        <Flex>
          <Checkbox onChange={handleChecked} defaultChecked={todo.completed}>
            {todo.completed===true? <div style={{color:"red" }}>{todo.content}</div>: <div style={{color:"black" }}>{todo.content}</div>}
            
          </Checkbox>
          <Button marginLeft={500}>Delete</Button>
          <Button marginLeft={5}>Edit</Button>
          </Flex>
       </Box>
    )
}