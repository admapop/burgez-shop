import { takeLatest, call, put } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import {
    fetcCollectionsSuccess,
    fetcCollectionsFailure
} from './shop.actions'

import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)         
        yield put(fetcCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetcCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}