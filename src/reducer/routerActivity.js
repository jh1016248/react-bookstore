const CHANGE_DIRECTION = 'CHANGE_DIRECTION'
const CHANGE_NAV_INDEX = 'CHANGE_NAV_INDEX'
const CHANGE_LOADING = 'CHANGE_LOADING'

let RouterActivity = (state, action) => {
    if(!state) {
        state = {
            direction: 'forward',
            navIndex: 0,
            isLoading: true,
        }
    }
    switch (action.type) {
        case CHANGE_DIRECTION: 
            return {
                ...state,
                direction: action.direction
            }
        case CHANGE_NAV_INDEX:
            return {
                ...state,
                navIndex: action.index
            }
        case CHANGE_LOADING: 
            return {
                ...state,
                isLoading: action.loading
            }
        default:
            return state
    }
}

export default RouterActivity

