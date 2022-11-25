import React from 'react'
import {DemoContainer, DemoH1, DemoManipulation} from './DemoElements'
import DropFileInput from './drop-file-input'

const Demo =() =>{

  const onFileChange = (files) => {
    console.log(files);
}


  
  return (
    <DemoContainer>
        <DemoH1>Démonstration du projet OCR</DemoH1>
        <DemoManipulation>
            <DropFileInput onFileChange={(files) => onFileChange(files)}/>

        </DemoManipulation>
    </DemoContainer>
  )
}

export default Demo