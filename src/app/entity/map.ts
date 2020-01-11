import { User } from './user';

export interface Map {
   id: number;
   name: string;
   biomes: Array<string>;
   universe_type: number;
   interest_points: Array<string>;
   user: Array<User>;
}