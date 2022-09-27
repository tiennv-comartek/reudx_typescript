import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormControl,Flex,Input,Button } from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');

    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue(e.target.value);
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
          dispatch(addTodo(value));
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <Flex>
                <FormControl>
                    <Input type="text" value={value} onChange={handleInput}/>
                </FormControl>
                <Button type="submit" disabled={!value}>Add</Button>
            </Flex>
        </form>
    )
}