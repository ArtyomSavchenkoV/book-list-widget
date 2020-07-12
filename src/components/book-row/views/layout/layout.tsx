import React from 'react';

import './layout.scss';


type TProps = {
    changeStatusButton: JSX.Element,
    id: string,
    author: string,
    title: string,
    description: string,
    tags: JSX.Element[]
}
const Layout: React.FC<TProps> = ({
    changeStatusButton,
    id,
    author,
    title,
    description,
    tags
}) => {

    return (
        <div className="book-row">
            <div className="header">
                <div className="book-requisites">
                    <div className="author">
                        {author}
                    </div>
                    <div className="title">
                        {title}
                    </div>
                </div>
                <div className="action">
                    {changeStatusButton}
                </div>
            </div>
            <div className="content">
                {description}
            </div>
            <div className="tags">
                {tags}
            </div>
        </div>
    )
}


export default Layout;