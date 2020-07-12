import React from 'react';

import './tag.scss';


type TProps = {
    children: string,
    switchFilterTag: (tag: string) => void
}
const Tag: React.FC<TProps> = ({
    children,
    switchFilterTag
}) => {

    return (
        <div className="tag" onClick={() => switchFilterTag(children)}>
            {children}
        </div>
    )
}


export default Tag;