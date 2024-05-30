import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export default function Card({item,idx}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    const navigate = useNavigate();

    const handleMouseEnter = (idx) => {
        setHoveredIndex(idx);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleClick = ()=>{
        navigate(`/software/${item.name.toLowerCase()}`); 
        window.scrollTo(0,0);
    }

    return (
        <>
            
                <div
                    className="card"
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                    key={idx}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                >
                    <div className={`card-inner ${hoveredIndex === idx ? 'flipped' : ''}`}>

                        <div className="card-image-section card-body">
                            <img className="img-fluid" src={item.image} alt={item.name} style={{width:'512px',height:'auto'}} />
                        </div>
                        <div className="card-info-section card-body">
                            <p className="card-text">{item.information}</p>
                        </div>
                    </div>

                    <h4 className="heading card-title text-center text-secondary" style={{ marginBottom: '2px' }}>{item.name}</h4>
                    <p className="heading" align="center">
                        <hr color='grey' />
                        <a className="btn btn-primary m-0.5" href={item.download} target='_blank' rel="noopener noreferrer">Download</a>
                        <a className="btn btn-secondary m-1" href={item.installation} target='_blank' rel="noopener noreferrer">Installation</a>
                        <a className='btn btn-success m-0.5' href={item.tutorial} target='_blank' rel="noopener noreferrer">Tutorial</a>
                    </p>
                    <div style={{ padding: 2 }} />
                </div>
        </>
    );
};
