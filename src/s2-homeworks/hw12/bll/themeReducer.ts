const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdAC): InitialState => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state,themeId: action.id}
        default:
            return state
    }
}
type ChangeThemeIdAC = ReturnType<typeof changeThemeId>
export type InitialState = typeof initState
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }as const) // fix any
