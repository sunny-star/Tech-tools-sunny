import React from 'react';
import { useParams } from 'react-router-dom';
import { Stack,Box } from '@mui/material';
import { combined } from '../combined';
import Card from './Card';
// import notFound from '../../src/components/images/notFound.png'

export default function SearchFeed() {

    const { searchTerm } = useParams();

    const filteredItems = combined.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (filteredItems?.length >= 1) ?
        (
            <>
                <h3 className='heading' style={{ margin: '20px 15px' }}>Results for {searchTerm}</h3>
                <Stack overflowY="auto" direction="row" flexWrap="wrap" justifyContent="center" gap={1.5}>
                    {filteredItems.map((item, idx) => (
                        <Card item={item} key={idx} />
                    ))}
                </Stack>
            </>
        )
        : (
            <>
                <div style={{minHeight:'70vh'}}>
                    <h3 style={{ margin: '20px 15px' }}>No results Found</h3>
                    <Box sx={{ textAlign: "center" , marginTop:{xs:'4cm',md:'0px'} }}>
                        <img id='notFound' src="https://cdni.iconscout.com/illustration/premium/thumb/no-search-found-2511608-2133696.png" alt="Not Found" style={{ width: '50%',opacity:'0.8' ,height: 'auto' }} />
                    </Box>
                </div>
            </>
        )
}