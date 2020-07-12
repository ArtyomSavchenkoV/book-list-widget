import React from 'react';

import Layout from './views/layout';
import PageSelector from '../page-selector';
import BooksList from '../books-list';
import TagsDashboard from '../tags-dashboard';


type TProps = {

}
const Controller: React.FC<TProps> = () => {

    return (
        <Layout
            header={<PageSelector />}
        >
            <TagsDashboard />
            <BooksList />
        </Layout>
    )
}


export default Controller;