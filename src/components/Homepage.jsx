import { useSelector, useDispatch } from 'react-redux'


const Homepage = () => {

    const dispatch = useDispatch();
    const img = useSelector(state => state.data.img)

    return (
        <div>
        <h1>Homepage</h1>
        <img src={img} alt="" />
        </div>
    );
}

export default Homepage;