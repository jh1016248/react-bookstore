const SET_BOOK_ID = 'SET_BOOK_ID'
const SET_BOOK_CHAPTERS = 'SET_BOOK_CHAPTERS'
const SET_SOURCE_LIST = 'SET_SOURCE_LIST'

let Book = (state, action) => {
    if(!state) {
        state = {
            _bookId: '',
            sourceList: [],
            chapterList: [],
        }
    }
    switch (action.type) {
        case SET_BOOK_ID: 
            return {
                ...state,
                _bookId: action._bookId,
            }
        case SET_BOOK_CHAPTERS: 
            return {
                ...state,
                chapterList: action.chapterList
            }
        case SET_SOURCE_LIST: 
            return {
                ...state,
                sourceList: action.sourceList
            }
        default:
            return state
    }
}

export default Book