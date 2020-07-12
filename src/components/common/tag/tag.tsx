import React from 'react';

import './tag.scss';


type TProps = {
    tag: string,
    onClick: () => void
}
const Tag: React.FC<TProps> = ({
    tag,
    onClick
}) => {

    return (
        <div className="tag" onClick={onClick}>
            {tag}
        </div>
    )
}


export default Tag;