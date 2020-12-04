import { TAction } from '../types/actions-types';


interface IFetchDictionaryRequested {
    (): TAction
}
const fetchDictionaryRequested: IFetchDictionaryRequested = () => {
    return {
        type: 'FETCH_DICTIONARY_REQUESTED'
    }
}


interface IFetchDictionarySuccess {
    (dictionary: {}): TAction
}
const fetchDictionarySuccess: IFetchDictionarySuccess = (dictionary) => {
    return {
        type: 'FETCH_DICTIONARY_SUCCESS',
        payload: dictionary
    }
}


interface IFetchDictionaryFailure {
    (): TAction
}
const fetchDictionaryFailure: IFetchDictionaryFailure = () => {
    return {
        type: 'FETCH_DICTIONARY_FAILURE'
    }
}


interface IFetchDictionaryRequest {
    (): TAction
}
const fetchDictionaryRequest: IFetchDictionaryRequest = () => {
    return {
        type: 'FETCH_DICTIONARY_REQUEST'
    }
}


interface ISetPage {
    (newPage: 'TO_READ' | 'IN_PROGRESS' | 'DONE'): TAction
}
const setPage: ISetPage = (newPage) => {
    return {
        type: 'SET_PAGE',
        payload: newPage
    }
}


interface ISetPageAndTags {
    (arg0: {
        page: 'TO_READ' | 'IN_PROGRESS' | 'DONE',
        tags: string[]
    }): TAction
}
const setPageAndTags: ISetPageAndTags = (payload) => {    
    return {
        type: 'SET_PAGE_AND_TAGS',
        payload: payload
    }
}


export {
    fetchDictionaryRequest,
    fetchDictionaryRequested,
    fetchDictionarySuccess,
    fetchDictionaryFailure,
    setPage,
    setPageAndTags
}