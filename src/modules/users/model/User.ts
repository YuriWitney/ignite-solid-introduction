/* eslint-disable prettier/prettier */
import { v4 as uuidV4 } from "uuid";

export class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor () {
    if (this.id === undefined) {
      this.id = uuidV4()
    }
    this.admin = false
  }
}
