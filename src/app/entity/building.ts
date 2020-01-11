import { Agglomeration } from './agglomeration';

export interface Building {
   id: number;
   name: string;
   agglomeration: Array<Agglomeration>;
   function: string;
   size: number;
   leader: string;
}