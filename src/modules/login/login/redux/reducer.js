import { ADD_GUN, REMOVE_GUN } from './constants'
// reducer
export function counter(state = 10, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1
        case REMOVE_GUN:
            return state - 1
        default:
            return state
    }
}