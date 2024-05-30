import React from 'react';
import { Stack } from '@mui/material';
import { combined } from '../combined';
import Card from './Card';
import { useParams } from 'react-router-dom';

export default function Category() {

    const {branch} = useParams();

    const filteredItems = combined.filter((item) =>
        item.branch.toLowerCase().includes(branch)
    );

    return (
        <>
            <h2 className='heading' style={{margin:"20px 15px"}}>{(branch.toUpperCase()==='LANGUAGES')?(`${branch.toUpperCase()}`):(`${branch.toUpperCase()} branch realated softwares`)}</h2>
            <Stack overflowY="auto" minHeight='99vh' direction="row" flexWrap="wrap" justifyContent="center" gap={1.5}>
                {
                    filteredItems.map((item,idx)=>(
                        <Card item={item} idx={idx} />
                    ))
                }
            </Stack>
        </>
    );
}
