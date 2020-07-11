import React from 'react';
import { connect } from 'react-redux';
import { IConnect, TStore } from '../../reducers';


interface localizeType {
    (arg0: string, arg1?: { [key: string]: string | number | boolean }): string;
}
export type TWithLocalization = {
    localize: localizeType
};

type TType = <T>(arg0: React.FC<T | object>) => React.FC<Omit<T, 'localize'>>;
const withLocalization: TType = (Component) => (props) => {

    const Wrapper: React.FC<IConnect<typeof storeEnhancer>> = ({
        dictionary
    }) => {

        const localize: localizeType = (path, inserts) => {
            const pathPartsArray: Array<string> = path.split('.');
            let result = '#' + path;
            let obj: { [n: string]: any } = dictionary;
            for (let i = 0; i < pathPartsArray.length; i += 1) {
                const key: string = pathPartsArray[i];
                const field: any = obj[key];
                if (typeof field === 'object' && field !== null) {
                    obj = field;
                } else if (typeof field === 'string') {
                    result = field;
                    if (typeof inserts === 'object') {
                        for (let key in inserts) {
                            const val = inserts[key];
                            result = result.replace(`<{${key}}>`, String(val));
                        }
                    }
                    break;
                } else {
                    break;
                }
            };
            return result;
        }

        return (
            <Component
                {...props}
                localize={localize}
            />
        )
    }

    const mapStoreToProps = ({ applicationState }: TStore) => {
        return {
            dictionary: applicationState.localization.dictionary
        };
    };
    const storeEnhancer = connect(mapStoreToProps);
    const Wrapped = storeEnhancer(Wrapper);

    return (
        <Wrapped />
    );
};


export default withLocalization;

