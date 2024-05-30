import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { combined } from '../combined';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Disclaimer from './Disclaimer';
import Card from './Card';

export default function Info() {

    const { id } = useParams();

    const [iframeLoaded, setIframeLoaded] = useState(false);

    const handleIFrameLoad = () => {
        setIframeLoaded(true);
    };


    const softwareItem = combined.find(item => item.name.toLowerCase() === id);
    const filteredItems = combined.filter((item) =>
        (item.branch.toLowerCase().includes(softwareItem.branch) && item !== softwareItem)
    );
    return (
        <>
            <div className='container'>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className='heading'>{softwareItem.name}</h3>
                    <a className='heading btn btn-lg btn-primary' style={{ border: '1px solid white',textDecoration:'none',color:'white', borderRadius: "35px" }} target='_blank' rel="noreferrer" href={softwareItem.download}>Download</a>
                </div>
                <img src={softwareItem.image} style={{ marginLeft: '25px' }} width='300px' height='auto' alt='logo' />
                <h4 className='heading' style={{ textDecoration: 'underline' }}>Overview :</h4>
                <h6 className='card-text' style={{ color: 'grey' }}>{softwareItem.information}</h6>
                <br />
                <Stack overflowY="auto" direction="row" flexWrap="wrap" gap={3} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                    <Link to={softwareItem.installation} style={{ textDecoration: 'none' }} target='_blank'>
                        <h4 className='heading'>Click to know about installation</h4>
                        {iframeLoaded ? (
                            <iframe
                                width="368px"
                                height="250px"
                                src={softwareItem.installation}
                                title={softwareItem.name}
                                onLoad={handleIFrameLoad}
                            ></iframe>
                        ) : (
                            <img
                                src="https://cdni.iconscout.com/illustration/premium/thumb/unable-to-load-2511611-2133699.png?f=webp"
                                alt={softwareItem.name}
                                style={{ width: '368px', height: '250px', border: '1px solid grey', borderRadius: '10px' }}
                            />
                        )}
                    </Link>
                    <Link to={`https://www.youtube.com/watch?v=${softwareItem.tutorial}`} style={{ textDecoration: 'none', }} target='_blank'>
                        <h4 className='heading'>Check out Video </h4>
                        <iframe width="368px"
                            height="250px"
                            style={{ borderRadius: '10px' }}
                            src={`https://www.youtube.com/embed/${softwareItem.tutorial}`}
                            title={softwareItem.name} >
                        </iframe>
                    </Link>
                </Stack>
                <br />
                <hr />
                <br />
                <Disclaimer />
                <br />
                <hr />
            </div>
            <br />
            <h3 className='m-3 heading'>Recommended</h3>
            <Stack overflowY="auto" direction="row" flexWrap="wrap" justifyContent="center" gap={1.5}>
                {
                    filteredItems.map((item, idx) => (
                        <Card item={item} idx={idx} />
                    ))
                }
            </Stack>

        </>

    )
}