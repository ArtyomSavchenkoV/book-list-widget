import { TGetBookResponse, transformGetBookResponse } from './api-adapters/get-books';
import configs from '../configs/configs.json';

export interface IApiService {
    getDictionaryRequest: () => Promise<{}>
    getBooksRequest: () => Promise<TGetBookResponse>
};

class ApiService implements IApiService {
    _configs: { booksSource: string } = { booksSource: '' }

    constructor() {
        this._configs = configs as { booksSource: string }
    }

    getRequester = async (address: string) => {
        const result = await fetch(address, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }
        );

        if (!result.ok) {
            throw new Error(`Could not fetch ${address}, received ${result.status}.`);
        }

        return await result.json();
    };


    /*
    *   Requests
    */
    getDictionaryRequest: () => Promise<{}> = async () => {
        const response = await this.getRequester('http://localhost:3000/resourses/ru.json');
        return response;
    }

    getBooksRequest: () => Promise<TGetBookResponse> = async () => {
        const response = await this.getRequester(this._configs.booksSource);
        return this._transformErrorCatcher<TGetBookResponse, any>(transformGetBookResponse, response, 'logoutRequest');
    }

    _transformErrorCatcher: ITransformErrorCatcher = (transformer, data, unitName = '') => {
        try {
            return transformer(data);
        } catch (e) {
            console.error('API service transform ERROR:', unitName, e);
            throw new Error('API service transform ERROR');
        }
    }
}
interface ITransformErrorCatcher {
    <T, N>(arg0: (arg0: N) => T, arg1: N, arg2?: string): T
}

export default ApiService;
