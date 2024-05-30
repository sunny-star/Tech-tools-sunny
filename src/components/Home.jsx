import React from 'react';
import Carousal from './Carousal';
import { combined } from '../combined';
import Card from './Card';
import {Stack } from '@mui/material';

export default function Home() {
    return (
        <div>
            <div className='container bg-muted'>
                <br />
                <h3 className='heading'>Most Visited Websites</h3>
                <Carousal />
                <br />
                <h3 className='heading'>Try out this : </h3>
                <br/>
            </div>
            <Stack overflowY="auto" direction="row" flexWrap="wrap" justifyContent="center" gap={1.5}>
            {combined.map((item, idx) => ( 
                <Card item={item} key={idx} />
            ))}
            </Stack>
        </div>
    )
}
