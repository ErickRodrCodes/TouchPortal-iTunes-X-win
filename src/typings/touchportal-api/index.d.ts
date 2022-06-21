declare module "touchportal-api"
{
  import { EventEmitter } from 'events';
  export interface ITouchPortalClient  {
    pluginId?:string;
    updateUrl?:string;
  }

  export interface IState {
    type?: string;
    id: string;
    value: string;
  }

  export interface IConnect {
    pluginId: string;
    updateUrl: string;
  }
  export class Client extends EventEmitter{
    constructor(options: ITouchPortalClient);
    createState(id: string, desc: string, defaultValue: any): void;
    choiceUpdate(state:IState): void;
    choiceUpdateSpecific(id: string, value: any, instanceId:string): void;
    settingUpdate(name: string, value: any): void;
    stateUpdate(state:IState): void;
    stateUpdateMany(states: IState[]): void;
    sendArray(dataArray: IState[]): void;
    send(data: any): void;
    pair(): void;
    checkForUpdate(): void;
    connect(options: ITouchPortalClient): void;
    logIt(): void;
  }

}

