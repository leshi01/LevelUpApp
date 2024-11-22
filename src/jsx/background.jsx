import '../css/background.css';
import frogImage from '../assets/frogstand.png';
import frontlever from '../assets/frontlever.png';
import handstand from '../assets/handstand.png';
import pulup from '../assets/pulup.png';   
import Header from './Header'; 
import Days from './Days';


function Background() {
    return (
        <div className="background">
            <Header/>   
            <Days/>
            <img src={frogImage} alt="Description of Image" className='Backgroundimages frog-image'/>
            <img src={frontlever} alt="Description of Image" className='Backgroundimages frontlever-image'/>
            <img src={handstand} alt="Description of Image" className='Backgroundimages handstand-image'/>
            <img src={pulup} alt="Description of Image" className='Backgroundimages pulup-image'/>
        </div>
    );
}

export default Background;
