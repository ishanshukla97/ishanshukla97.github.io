import React from 'react';

import './tag.scss'

export const Tag = props => {
    return <div className='tag'>
        {props.content}
    </div>
}