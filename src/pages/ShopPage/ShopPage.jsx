import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer.jsx';
import CollectionPageContainer from '../Collection/CollectionPageContainer';

import { fetcCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends Component {

  componentDidMount() {
    const { fetcCollectionsStart } = this.props
    fetcCollectionsStart()
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
  fetcCollectionsStart: () => dispatch(fetcCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)