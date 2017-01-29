import { combineReducers } from 'redux';
import FireBaseUserReducer from './firebase_user_reducer';

import TabIndex from './tabs_index_reducer';
import Authenticated from './authenticated_reducer';

const rootReducer = combineReducers({
    currentUser: FireBaseUserReducer,
    tabIndex: TabIndex,
    auth: Authenticated
});

export default rootReducer;
