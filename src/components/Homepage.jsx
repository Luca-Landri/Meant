import { useState } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './Navbar';
import UploadForm from './UploadForm';
import { useEffect } from 'react';
import { read_cookie, delete_cookie } from 'sfcookies';
import { useNavigate } from 'react-router-dom';



const Homepage = () => {
    const openForm = useSelector ((state) => state.app.formOpened)
    const dispatch = useDispatch()
    const nameCookie = read_cookie("name")
    const navigate = useNavigate()

    return (
        <div>
            <Header/>
            <h1>HI {nameCookie}</h1>

            { openForm ? <UploadForm/> : null }
            
            <Navbar/>
        </div>
    );
}

export default Homepage;