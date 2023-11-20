import React from 'react';
import { DownloadContainer, ImageContainer, DownloadButtons, DownloadVersion, DownloadInfo } from './DownloadSection.elements';

import appIcon from '../../images/app-icon.png'; // Replace with your actual image paths
import appStoreIcon from '../../images/app-store-icon.png'; // Replace with your actual image paths
import playStoreIcon from '../../images/play-store-icon.png';

const DownloadSection = () => {
  return (
    <DownloadContainer>
      <ImageContainer>
        <img src={appIcon} alt="appIcon" />
      </ImageContainer>
      <DownloadVersion><p>오늘의 식냥 ver 0.1.3</p></DownloadVersion>
      <DownloadInfo><p>Android API 19+<br/>iOS, iPadOS 12.0+</p></DownloadInfo>
      <DownloadButtons>
        <a href="https://play.google.com/store/apps/details?id=com.hyu.clars.daily_hyu_menu_frontend" target="_blank" rel="noopener noreferrer">
          <img src={playStoreIcon} alt="Play Store Download" />
        </a>
        <a href="https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98%EC%9D%98-%EC%8B%9D%EB%83%A5/id6469571610" target="_blank" rel="noopener noreferrer">
          <img src={appStoreIcon} alt="App Store Download" />
        </a>
      </DownloadButtons>
    </DownloadContainer>
  );
};

export default DownloadSection;
