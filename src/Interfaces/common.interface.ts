import {FetchStatus} from "../Enums/api.enums";


export interface IDataObject<T> {
    data: T,
    status: FetchStatus
}