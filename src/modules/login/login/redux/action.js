import { ADD_GUN, REMOVE_GUN } from './constants'
// action creator
export function addGun() {
    return { type: ADD_GUN }
}
export function removeGun() {
    return { type: REMOVE_GUN }
}
export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        }, 2000)
    }
}




