import { TAction as TReducerCommands } from '../reducers';
import { TSagasCommands } from '../sagas';

export type TAction = TReducerCommands | TSagasCommands;