
import { Box,Flex } from '@chakra-ui/react';
import { useSelector } from "react-redux";
import { Todo } from "./Todo";
import { getTodosbyFilter } from "../redux/reducer/selector";
import { Iitems } from '../redux/reducer/todos';
import { RootState } from '../redux/reducer';

export const TodoList = () => {
    
    const { todos }  = useSelector((state: RootState) => state);
    const { visibilityFilter } = useSelector((state: RootState) => state);
    const filterTodos = getTodosbyFilter(todos, visibilityFilter);
    return (
        
        <Box paddingTop={30} >

                <Flex direction={{ base: 'column-reverse' }}>
                    {filterTodos.length ? filterTodos.map((todo: Iitems) => (
                        <Todo key={`todo-${todo.id}`} todo={todo} />
                    )) : <Box>No todos</Box>}
                </Flex>
       </Box >      
    )
}
  

