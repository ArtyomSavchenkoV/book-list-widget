import { TAction } from '../reducers';
import { IApiService } from '../services/api-service';


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
    (ApiService: IApiService): (arg0: any) => void
}
const fetchDictionaryRequest: IFetchDictionaryRequest = (ApiService) => (dispatch) => {
    dispatch(fetchDictionaryRequested());
    ApiService.getDictionaryRequest().then((request)=>{        
        dispatch(fetchDictionarySuccess(request));
    })
    .catch(()=>{
        dispatch(fetchDictionaryFailure());
    })

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


export {
    fetchDictionaryRequest,
    setPage
}