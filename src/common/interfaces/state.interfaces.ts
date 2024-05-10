import { EMessageActions } from '../enums/state.enums';

export interface IStateAction {
  type: EMessageActions;
  payload: any; // ToDo: Figure this out.
}

export interface IAppState {
  message: string;
}

export interface IAppActions {
  setMessage: (payload: string) => void;
}

export interface IAppContext {
  actions: IAppActions;
  state: IAppState;
}
