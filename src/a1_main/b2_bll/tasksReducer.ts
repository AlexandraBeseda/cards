
const initialState= {}

export const tasksReducer = (state: typeof initialState= initialState, action: ActionsType)/*: TasksStateType*/ => {
    switch (action.type) {

        default:
            return state
    }
}

type ActionsType=ReturnType<typeof addTaskAC>;

export const addTaskAC = (task: string) =>
    ({type: 'ADD-TASK', task} as const)

// actions

// thunks

// types


