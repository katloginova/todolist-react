import { typesTask } from "./types";

export function saveToStorage(name: string | undefined, tasks: typesTask[] | undefined) {
    if (name && tasks) {
        localStorage.setItem( name, JSON.stringify( tasks ) );
    }
}