export interface IApiService {
    getDictionaryRequest: () => Promise<{}>
};


class ApiService implements IApiService {

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


    _transformErrorCatcher: ITransformErrorCatcher = (transformer, data, unitName = '') => {
        try {
            return transformer(data);
        } catch (e) {
            console.error('API service transform ERROR:', unitName, e);
            const result: { status: false, payload: { code: string, message: string, details: any } } = {
                status: false,
                payload: {
                    code: '-1',
                    message: 'api_response_transform_error',
                    details: e
                }
            };
            return result
        }
    }
}
interface ITransformErrorCatcher {
    <T, N>(arg0: (arg0: N) => T, arg1: N, arg2?: string): T | { status: false, payload: { code: string, message: string, details: any } }
}

export default ApiService;
