import Header from './Header';
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './Navbar';


const Homepage = () => {


    return (
        <div>
            <Header/>
            <h1>Hompage</h1>
            
            <Navbar/>
        </div>
    );
}

export default Homepage;