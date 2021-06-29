import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../directory/directory.selectors';


import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import hat from '../../hat.jpeg'
import jackets from '../../jackets.jpeg'
import sneakers from '../../sneakers.jpeg'
import women from '../../women.jpeg'
import men from '../../men.jpeg'

const Directory = ( { sections }) => (
    <div className='directory-menu'>
    {
        sections.map(({id, ...otherSectionProps})=>(
        <MenuItem key={id} {...otherSectionProps} />
        ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
  
export default connect(mapStateToProps)(Directory);