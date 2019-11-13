import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer.jsx';
import CollectionPageContainer from '../Collection/CollectionPageContainer';

import { fetcCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetcCollectionsStart, match }) => {
  useEffect(() => {
    fetcCollectionsStart()
  }, [fetcCollectionsStart])

    return (
      <div>
        <div className='shop-page'>
          <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
          <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  fetcCollectionsStart: () => dispatch(fetcCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)