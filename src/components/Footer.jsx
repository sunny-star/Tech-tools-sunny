import React from 'react';
import { Box } from "@mui/material";
import { Facebook,LinkedIn,Instagram,GitHub,Email, } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {

    const iconStyle = {
        color: '#595959',
        margin: '15px',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    }
    
    return (
        <Box>
            <br />
            <hr color='#363636' />
            
            <p className='text-center '>Follow us on : </p>
            <Box sx={{height:'1.4cm'}} className='text-center bg-warning'>
                <br />
                <a href='https://www.facebook.com/profile.php?id=100025448063447&mibextid=JRoKGi' target="_blank" rel="noopener noreferrer" style={{ ...iconStyle }} onMouseEnter={(e) => e.target.style.color = '#333'} onMouseLeave={(e) => e.target.style.color = '#595959'}><Facebook /></a>
                <a href='https://www.linkedin.com/in/sunnychiluka/' target="_blank" rel="noopener noreferrer" style={{ ...iconStyle }} onMouseEnter={(e) => e.target.style.color = '#333'} onMouseLeave={(e) => e.target.style.color = '#595959'}><LinkedIn /></a>
                <a href='https://github.com/sunny-star' target="_blank" rel="noopener noreferrer" style={{ ...iconStyle }} onMouseEnter={(e) => e.target.style.color = '#333'} onMouseLeave={(e) => e.target.style.color = '#595959'}><GitHub /></a>
                <a href='mailto:sunnysunny968667@gmail.com' target="_blank" rel="noopener noreferrer" style={{ ...iconStyle }} onMouseEnter={(e) => e.target.style.color = '#333'} onMouseLeave={(e) => e.target.style.color = '#595959'}><Email /></a>
                <a href='https://www.instagram.com/sunny_chiluka07?igsh=eGVjZDA2enF1bXo4' target="_blank" rel="noopener noreferrer" style={{ ...iconStyle }} onMouseEnter={(e) => e.target.style.color = '#333'} onMouseLeave={(e) => e.target.style.color = '#595959'}><Instagram /></a>
                
            </Box>

            <div className='text-center  bg-warning text-info p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <Link to='/' style={{ color: '#363636',textDecoration:'none' }} > Built with ❤️ by SUNNY </Link>
            </div>
        </Box>
    );
}
