import React from 'react';
import { connect } from 'react-redux'

import { IConnect } from '../../../reducers';

import { switchFilterTag } from '../../../actions';

import './tags.scss';


type TProps = {
    tags: string[],
}
const Tags: React.FC<TProps & IConnect<typeof storeEnchancer>> = ({
    tags,
    switchFilterTag
}) => {

    const tagsElements = tags.map((tag, index) => {
        return (
            <div key={index} className="tag" onClick={() => switchFilterTag(tag)}>
                {tag}
            </div>
        )
    })

    return (
        <div className="tags">
            {tagsElements}
        </div>
    )
}

const mapDispatchToProps = {
    switchFilterTag
}
const storeEnchancer = connect(() => { return {} }, mapDispatchToProps);

export default storeEnchancer(Tags) as React.FC<TProps>;