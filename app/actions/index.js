import * as actionTypes from '../constants/index'

export function loginUser(data) {
    return {
        type:actionTypes.USERINFO_LOGIN,
        data
    }
}
export function updateCityName(data) {
    return {
        type:actionTypes.UPDATE_CITYNAME,
        data
    }
}
export function updatePageActive(data) {
    return {
        type:actionTypes.ACTIVE_PAGE,
        activePage:data
    }
}

export function updateDrawerShow(side, open) {
    return {
        type:actionTypes.DRAWER_OPEN,
        side:open
    }
}