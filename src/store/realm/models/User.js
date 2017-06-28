
export default class User {

  /**
 * Getter for the class
 * @return {String} Class name
 */
  static get() {
    return User.schema.name;
  }

  static schema = {
    name: 'User',
    primaryKey : 'id',
    properties : {
      _id : {type : 'string'},
      email : {type : 'string'},
      firstName : {type : 'string'},
      lastName : {type : 'string'},
    },
  }
}
