import { combineReducers } from 'redux';
import FireBaseUserReducer from './firebase_user_reducer';

import TabIndex from './tabs_index_reducer';

const rootReducer = combineReducers({
    currentUser: FireBaseUserReducer,
    tabIndex: TabIndex,
});

export default rootReducer;
