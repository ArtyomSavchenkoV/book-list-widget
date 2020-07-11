import React from 'react';

import Layout from './views/layout';
import PageSelector from '../page-selector';


type TProps = {

}
const Controller: React.FC<TProps> = () => {

    return (
        <Layout
            header={<PageSelector />}
            body={<></>}
        />
    )
}


export default Controller;