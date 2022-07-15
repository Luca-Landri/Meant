import { useState } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './Navbar';
import UploadForm from './UploadForm';
import { useEffect } from 'react';
import { read_cookie, delete_cookie } from 'sfcookies';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: #ffffff;
    text-align: center;

`


const Homepage = () => {
    const openForm = useSelector ((state) => state.app.formOpened)
    const dispatch = useDispatch()
    const nameCookie = read_cookie("name")
    const navigate = useNavigate()

    return (
        <div>
            <Header/>
            <Title>HI {nameCookie}</Title>

            { openForm ? <UploadForm/> : null }
            
            <Navbar/>
        </div>
    );
}

export default Homepage;