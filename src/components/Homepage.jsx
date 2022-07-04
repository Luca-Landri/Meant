import { useSelector, useDispatch } from 'react-redux'


const Homepage = () => {

    const dispatch = useDispatch();
    const email = useSelector(state => state.data.email)
    const password = useSelector(state => state.data.password)
    const img = useSelector(state => state.data.img)

    return (
        <div>
        <h1>Homepage</h1>
        <img src={img} alt="" />
        </div>
    );
}

export default Homepage;