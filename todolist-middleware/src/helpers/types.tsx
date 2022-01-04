export interface typesTask{
    task: string,
    isDone?: boolean
}

export interface typesUser{
    name?: string,
    tasks?: typesTask[],
}

export interface typesUsers{
    users: typesUser[]
}

export interface typesState{
    users: typesUser[],
    user: typesUser | null,
    userName: string
}

export interface typesAction{
    type: string,
    payload: any,
}