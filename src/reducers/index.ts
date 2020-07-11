
import { InferableComponentEnhancerWithProps } from 'react-redux';

import applicationStateReducer, { TApplicationStateAction, TApplicationStateStore} from './application-state-reducer';

/*
*   React-Redux type
*/
export type IConnect<T> = T extends InferableComponentEnhancerWithProps<infer Props, infer _>
  ? Props
  : never
;

/*
*   Commands types
*/
export type TAction = (
    TApplicationStateAction
);

/*
*   Store type
*/
export type TStore = {
    applicationState: TApplicationStateStore
};

/*
*   Initial store
*/
const initStore = {
    applicationState: undefined,
};

/*
*   The Reducer
*/
interface IReducer {
    (arg0: TStore | {[key: string]: any}, arg1: TAction): TStore;
};
const reducer: IReducer = (store = initStore, action) => {
    switch (action.type) {

        default: return {
            ...store,
            applicationState: applicationStateReducer(store.applicationState, action)
        }
    }
};


export default reducer;
