import * as actionTypes from '../constants/index'
const initState = {}
export default function page(state=initState , action) {
    console.log('page was called with state', state, 'and action', action)

    switch (action.type){

        case actionTypes.ACTIVE_PAGE:
            return action.activePage

        case actionTypes.DRAWER_OPEN:
            return action

        default:
            return state

    }
}