import { Map } from './map';

export interface User {
   id: number;
   username: string;
   password: string;
   maps: Array<Map>;
}