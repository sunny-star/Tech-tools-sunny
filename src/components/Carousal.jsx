import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/matlab1.png'
import img2 from './images/java.png'
import img3 from './images/autocad.png'
import img4 from './images/codeblocks.png'

export default function Carousal() {
    return (
        <div className='container-fluid'>
            <Carousel controls={false} indicators={false} data-bs-theme='dark'>
                <Carousel.Item interval={2000}>
                    <img src={img1} alt="vscode" className='d-block w-100' />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img src={img3} alt="autocad" className='d-block w-100' />
                </Carousel.Item>
                <Carousel.Item interval={2300}>
                    <img src={img4} alt="codeblocks" className='d-block w-100' />
                </Carousel.Item>
                <Carousel.Item interval={2300}>
                    <img src={img2} alt="java" className='d-block w-100' />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
