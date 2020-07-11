import React from 'react';

import Layout from './views/layout';
import PageSelector from '../page-selector';
import BooksList from '../books-list';


type TProps = {

}
const Controller: React.FC<TProps> = () => {

    return (
        <Layout
            header={<PageSelector />}
            body={<BooksList />}
        />
    )
}


export default Controller;