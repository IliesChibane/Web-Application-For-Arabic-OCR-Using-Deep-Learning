import React from 'react'
import {ContentContainer, ContentBg, VideoBg, ContentInfo, ContentInfoH1, ContentInfoP} from './ContentElements'
import Video from '../../video/video.mp4'

const Content = () => {
  return (
    <ContentContainer id="home">
        <ContentBg>
        <VideoBg loop autoPlay muted src={Video} type='video/mp4'/>
        </ContentBg>
        <ContentInfo>
          <ContentInfoH1>
          Projet du module OCR
          </ContentInfoH1>
          <ContentInfoP>
            Ceci est la démonstration du projet du module OCR qui consiste en la reconnaissance des caractères arabes 
          </ContentInfoP>
        </ContentInfo>
    </ContentContainer>
  )
}

export default Content