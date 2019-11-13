import React from 'react';
import './directory.styles.scss';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/MenuItem';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {
        sections.map(({ title, imageUrl, id, size, linkUrl }) => ( // or (id, ...otherSectionProps)
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
          // or key={id} {...otherSectionProps}
        ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

// const mapDispatchToProps = {
  
// }

export default connect(mapStateToProps)(Directory);