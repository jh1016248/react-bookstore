const INIT_MESSAGE_LSIT = 'INIT_MESSAGE_LSIT'
const ADD_MESSAGE = 'ADD_MESSAGE'

let MessageList = (state, action) => {
    if(!state) {
        state = {
            messageList: []
        }
    }
    switch (action.type) {
        case INIT_MESSAGE_LSIT: 
            return {
                messageList: action.list
            }
        case ADD_MESSAGE:
            return {
                messageList: [...state.messageList, action.item]
            }
        default:
            return state
    }
}

export default MessageList

