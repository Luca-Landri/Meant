import { useState } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './Navbar';
import UploadForm from './UploadForm';
import { useEffect } from 'react';
import { read_cookie, delete_cookie } from 'sfcookies';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getStorage, ref, getDownloadURL, listAll  } from "firebase/storage";

const Title = styled.h1`
    font-size: 30px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 600;
    text-align: center;
    color: black;
`

const Homepage = () => {
    const openForm = useSelector ((state) => state.app.formOpened)
    const dispatch = useDispatch()
    const nameCookie = read_cookie("name")
    const navigate = useNavigate()
    const storage = getStorage();
    const starsRef = ref(storage, 'images/');
    const [images, setImages] = useState([]);

    useEffect(() => {
        listAll(starsRef).then(res => {
            res.items.forEach((itemRef) => {
                setImages(prevState => [...prevState, itemRef._location.path])
            });
        }).catch(err => {
            console.log(err)
        })

        console.log(images)
    }, [])
    
    const showImages = () => {
        console.log(images)
    }

    return (
        <div>
            <Header/>
            <Title onClick={showImages}>HI {nameCookie}</Title>

            { openForm ? <UploadForm/> : null }
            
            <Navbar/>
        </div>
    );
}

export default Homepage;