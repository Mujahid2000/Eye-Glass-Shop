
import Banner from '../Banner';
import Stats from '../Stats';
import ModelCard from '../ModelCard';
import AboutUs from '../AboutUs';
import ProductCard from '../ProductCard';



const Home = () => {
    return (
        <div className='mt-14 '>
            <Banner/>
            <Stats/>
            <ModelCard/>
            <AboutUs/>
            <ProductCard/>
            
        </div>
    );
};

export default Home;