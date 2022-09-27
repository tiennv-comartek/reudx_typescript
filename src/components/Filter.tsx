import React from "react";
import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";
import {visiableFilter} from "../contants";


export const Filter = () => {
    const dispatch = useDispatch();
    return (
        <Container centerContent>
            <Tabs>
                <TabList>
                    {Object.keys(visiableFilter).map((filterkey: string) => {
                        const currentFilter = filterkey;
                        return (
                            <Tab key={`filter-key-${currentFilter}`} onClick={()=>dispatch(setFilter(currentFilter))}>
                                {currentFilter}
                            </Tab>
                        )
                    })}
                </TabList>
        </Tabs>

        </Container>
    )
}