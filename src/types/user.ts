export interface User  {

    staticID: string
    sessionID: string
    createdAt: Date
    updateAt: Date    
}

export interface Chat {

    staticIDs: string //unione dei due static ID ordinati alfabeticamente e hashati
    createdAt: Date
    updateAt: Date
    messages: Message[]
}

export interface Message {

    senderID: string
    message: string 
    createdAt: Date
    staticIDs: string //
}

export interface StaticID {

    createdAt: Date
    staticID: string

}

export interface SessionID {

    createdAt: Date
    sessionID: string
}

export interface AuthState {
    isAuthenticated: boolean
    user?: User

}