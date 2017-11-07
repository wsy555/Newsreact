import * as actionTypes from '../constants/index'
const initState = {}

export default function userinfo(state=initState , action) {
    console.log('userinfo was called with state', state, 'and action', action)
    switch (action.type){
        case actionTypes.USERINFO_LOGIN:
            return action.data

        case actionTypes.UPDATE_CITYNAME:
            return action.data

        default:
            return state

    }
}