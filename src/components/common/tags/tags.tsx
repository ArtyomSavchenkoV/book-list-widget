import React from 'react';
import { connect } from 'react-redux'

import { IConnect } from '../../../reducers';

import { switchFilterTag } from '../../../actions';

import Tag from '../tag';

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
            <Tag key={index} switchFilterTag={switchFilterTag}>
                {tag}
            </Tag>
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