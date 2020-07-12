import React from 'react';

import './book.scss';


type TProps = {

}
const Book: React.FC<TProps> = ({

}) => {

    return (
        <div className="book">
            <div className="header">
                <div className="book-requisites">
                    <div className="author">
                    Douglas Crockford
                    </div>
                    <div className="title">
                    JavaScript: The Good Parts
                    </div>
                </div>
                <div className="action">
                    ##action
                </div>
            </div>
            <div className="content">
            With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.
            </div>
            <div className="tags">
                ##tags
            </div>
        </div>
    )
}


export default Book;