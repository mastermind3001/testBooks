import {Author} from "./author.model";

export interface Book {
  id: string;
  author: Author;
  name: string;
  publisher: string;
  year: string;
}
