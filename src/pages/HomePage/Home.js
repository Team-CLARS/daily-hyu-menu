import React from 'react';
import { InfoSection, DownloadCounter } from '../../components';
import { homeObjOne} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <DownloadCounter/>
        </>
    )
}

export default Home;