import React, { useRef, useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import {DemoResults, Input} from './DemoElements'
import './drop-file-input.css';

import { ImageConfig } from '../config/ImageConfig'; 
import {Test} from './DemoElements'




const DropFileInput = props => {


    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
        
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
        document.getElementById('resultats').innerHTML = ''
    }
    const [postResult, setPostResult] = useState(null);
    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
      }

      const [getResult, setGetResult] = useState(null);
      const [data, setData] = useState([{}])

    
    async function handleClick() {

        var jsonData = {
            "OCR": document.getElementById("fileName").textContent
        }
        /*POST REQUEST*/
        try {
            const res = await fetch('http://localhost:5000/api', {
            mode:'no-cors',
              method: "post",
              headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
              },
              body: JSON.stringify(jsonData),
            });
      
            if (!res.ok) {
              const message = `An error has occured: ${res.status} - ${res.statusText}`;
              throw new Error(message);
            }
      
            const data = await res.json();
      
            const result = {
              status: res.status + "-" + res.statusText,
              headers: {
                "Content-Type": res.headers.get("Content-Type"),
                "Content-Length": res.headers.get("Content-Length"),
              },
              data: data,
            };
      
            setPostResult(fortmatResponse(result));
          } catch (err) {
            setPostResult(err.message);
          }


          /*get request*/

          try {
            const res = await fetch('http://localhost:5000/results', {
            mode:'cors',
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
              }
            });
      
            const data = await res.json();

            
            console.log(data['results'])
            document.getElementById('resultats').innerHTML = data['results']
      
            const result = {
              status: res.status + "-" + res.statusText,
              headers: {
                "Content-Type": res.headers.get("Content-Type"),
                "Content-Length": res.headers.get("Content-Length"),
              },
              data: data,
            };
      
            setPostResult(fortmatResponse(result));
          } catch (err) {
            setPostResult(err.message);
          }
          
      }



    return (
        <>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img  alt="" />
                </div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            L'image est prete pour l'OCR
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p id="fileName" value="{item.name}">{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
            <Test onClick={handleClick}>
            Tester
            </Test>
            <DemoResults>
              <Input id="resultats"/>
            </DemoResults>

           
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default  DropFileInput;
