import styled from "styled-components";

export const DownloadContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-background-color);
`;

export const ImageContainer = styled.div`
  img {
    height: 100px;
  }
`;

export const DownloadVersion = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #fff;
  opacity: 0.6;
`;

export const DownloadInfo = styled.div`
  font-size: 0.8rem;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
  opacity: 0.6;
`;

export const DownloadButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  a {
    text-decoration: none;
    background-color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    width: 200px;
    height: 60px;
    padding: 10px 27px;
    border-radius: 100px;
    transition: 0.3s ease-out;

    &:hover {
      background-color: #8095de;
    }
    img {
      width: 150px;
    }
  }
`;
