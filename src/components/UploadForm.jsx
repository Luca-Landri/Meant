import React, { useState } from "react";
import { getApp } from "firebase/app";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import styled from 'styled-components';
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useDispatch  } from "react-redux";
import { setFormOpened } from '../app/app';


const UploadButton = styled.button`
    align-items: center;
    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 20px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-weight: 500;

    &:hover, &:hover {
        outline: 0;
    }

    span {
        background-color: rgb(5, 6, 45);
        padding: 12px 24px;
        border-radius: 6px;
        width: 100%;
        height: 100%;
        transition: 300ms;
    }

`

const FormContainer = styled.form`
    border: 1px solid hsla(0, 0%, 65%, 0.158);
    box-shadow: 0 0 36px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(20px);
    z-index: 99;
    padding: 2rem;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    width: 30%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.4rem;

    @media (max-width: 768px) {
        width: 70%;    
    }
`

const InputFile = styled.input`
    color: white;
    font-family: "Roboto", sans-serif;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`

const  Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
`


const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const firebaseApp = getApp();
    const storage = getStorage(firebaseApp, "gs://landrigram.appspot.com");
    const dispatch = useDispatch();

    const metadata = {
        contentType: 'image/jpeg'
    };

    const types = ['image/png', 'image/jpeg'];

    const ChangeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    useEffect (() => {
        console.log(file);
    }, [file]);

    const UploadFirebase = () => {
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        if (file) {
            uploadBytesResumable(storageRef, file, metadata).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });

            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');

                if (progress === 100) {
                    console.log('Upload completed!');
                }
            }, (error) => {}, () => {
                console.log(error)
            }
        );
        }
    }


    return(
        <FormContainer action="">
            <Header>
                <Title>Upload your image</Title>
                <Icon icon="akar-icons:circle-x-fill" width="35px" color="white" onClick={() => {dispatch(setFormOpened())}}/>
            </Header>
            <InputFile type="file" onChange={ChangeHandler} />
            <div className="output">
                {/* {error && <div className="error">{error}</div>} */}
                {file && <div>{file.name}</div>}
                {/* {file && <ProgressBar file={file} setFile={setFile}/>} */}
            </div>
            <UploadButton type="button" onClick={UploadFirebase}><span>Upload</span></UploadButton>
        </FormContainer>
    )
}

export default UploadForm