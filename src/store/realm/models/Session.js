import User from './User';

export default class Session {

  static get() {
    return Session.schema.name;
  }

  static schema = {
    name: 'User',
    primaryKey : 'id',
    properties : {
      id : 'int'
      token : 'string',
      user : User.get();
    },
}
