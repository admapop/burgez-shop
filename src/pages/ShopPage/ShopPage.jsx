import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.jsx';
import CollectionPage from '../Collection/CollectionPage.jsx';
import WithSpinner from '../../components/with-spinner/WithSpinner.jsx';

import { fetcCollectionsStartAsync } from '../../redux/shop/shop.actions.js';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetcCollectionsStartAsync } = this.props
    fetcCollectionsStartAsync()
  }
  
  render() {
    const { match, isCollectiongFetching } = this.props
    return (
      <div>
        <div className='shop-page'>
          <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectiongFetching} {...props}/>} />
          <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isCollectiongFetching} {...props}/>} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectiongFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
  fetcCollectionsStartAsync: () => dispatch(fetcCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)