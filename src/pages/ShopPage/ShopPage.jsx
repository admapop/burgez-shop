import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer.jsx';
import CollectionPageContainer from '../Collection/CollectionPageContainer';

import { fetcCollectionsStartAsync } from '../../redux/shop/shop.actions.js';

class ShopPage extends Component {

  componentDidMount() {
    const { fetcCollectionsStartAsync } = this.props
    fetcCollectionsStartAsync()
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <div className='shop-page'>
          <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
          <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetcCollectionsStartAsync: () => dispatch(fetcCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)