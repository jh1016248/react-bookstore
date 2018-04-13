const CHANGE_THEMECOLOR = 'CHANGE_THEMECOLOR';

let ThemeColor = (state, action) => {
    if(!state) {
        state = {
            themeColor: '#000'
        }
    }
    switch (action.type) {
        case CHANGE_THEMECOLOR: 
            return {
                themeColor: action.color
            }
        default: 
            return state
    }
}

export default ThemeColor

export const changeThemeColor = color => {
    return {
        type: CHANGE_THEMECOLOR,
        color
    }
}
