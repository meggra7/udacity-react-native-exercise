import { all } from 'redux-saga/effects'
import animal from "../screens/DataManagementWithRedux/AnimalLog/sagas"

export default function* rootSaga() {
    yield all([
        // TODO add feature sagas here
        animal(),
    ])
}
