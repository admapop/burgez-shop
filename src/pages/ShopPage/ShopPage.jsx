import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.jsx';
import CollectionPage from '../Collection/CollectionPage.jsx';

const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage;
