import React from 'react';
import { ApiServiceConsumer } from "../contexts/api-service-context";
import { IApiService }  from '../../services/api-service';


export type TWithApiService = {
    ApiService: IApiService
};


type TType = <T>(arg0: React.FC<T | object>) => React.FC<Omit<T, 'ApiService'>>;
const withApiService: TType = (Component) => {
    return (props) => {
        return (
            <ApiServiceConsumer>
                {
                    (ApiService: IApiService) => {
                        return (
                            <Component
								 {...props}
                                 ApiService={ApiService}
                            />
                        )
                    }
                }
            </ApiServiceConsumer>
        );
    }
};


export default withApiService;