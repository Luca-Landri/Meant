import Header from './Header';
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './Navbar';
import UploadForm from './UploadForm';


const Homepage = () => {
    const openForm = useSelector ((state) => state.post.formOpened)
    const userName = useSelector ((state) => state.data.name)


    return (
        <div>
            <Header/>
            <h1>HI {userName}</h1>

            { openForm ? <UploadForm/> : null }
            
            <Navbar/>
        </div>
    );
}

export default Homepage;