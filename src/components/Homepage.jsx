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
import { randomWord, definition } from '../app/app';


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

    const addWords = () =>  {
        dispatch(randomWord())
        setTimeout(() => {
            dispatch(definition())
        }, 1000)
    }

    return (
        <div>
            <Header/>
            <Title>HI {nameCookie}</Title>

            { openForm ? <UploadForm/> : null }
            <div>
                <button onClick={() => addWords()}>parola random</button>
            </div>
            
            <Navbar/>
        </div>
    );
}

export default Homepage;