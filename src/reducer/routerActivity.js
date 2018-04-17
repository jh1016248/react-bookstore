const CHANGE_DIRECTION = 'CHANGE_DIRECTION'

let RouterActivity = (state, action) => {
    if(!state) {
        state = {
            direction: 'forward'
        }
    }
    switch (action.type) {
        case CHANGE_DIRECTION: 
            return {
                direction: action.direction
            }
        default:
            return state
    }
}

export default RouterActivity

