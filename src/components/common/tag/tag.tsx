import React from 'react';
import { connect } from 'react-redux'

import { IConnect } from '../../../reducers';

import { switchFilterTag } from '../../../actions';

import './tag.scss';


type TProps = {
    tag: string,
}
const Tag: React.FC<TProps & IConnect<typeof storeEnchancer>> = ({
    tag,
    switchFilterTag
}) => {

    return (
        <div className="tag" onClick={() => switchFilterTag(tag)}>
            {tag}
        </div>
    )
}

const mapDispatchToProps = {
    switchFilterTag
}
const storeEnchancer = connect(() => { return {} }, mapDispatchToProps);

export default storeEnchancer(Tag) as React.FC<TProps>;