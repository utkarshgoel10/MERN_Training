import changeTheNumber from './incDec'

import { combineReducers } from 'redux'

const reducers = combineReducers(
    {
        changeTheNumber,        
    }
);

export default reducers;