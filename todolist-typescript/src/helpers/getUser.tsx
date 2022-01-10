import { typesUser } from "./types";

export default function getUser(listUsers: typesUser[], name: string){
    if(isUser(name, listUsers)){
        return listUsers.find((user) => user.name === name);
    }
    else{
        const newUser = {
            name: name,
            tasks: [],
        }
        listUsers.push(newUser);
        return newUser;
    }
}

function isUser(name: string, listUsers: typesUser[]){
    return listUsers.some((user: typesUser) => user.name === name);
}