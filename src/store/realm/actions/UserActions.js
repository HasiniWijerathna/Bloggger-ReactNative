import User from '../models/User';

export function createUserActions (realmInstance) {

  return{
      saveUser:() => {
        realmInstance.write(() => {
          realmInstance.create(User.get(), user);
        });
      },

      findUser:() => {
        return realmInstance
          .objects(User.get())
          .filtered(`${User.schema.primaryKey} = userId`)[0];
      },

      destroyUser:() => {
        realmInstance.write(() => {
          const user = realmInstance
          .objects(User.get())
          .filtered(`${User.schema.primaryKey}= userId`)[0];

          if(user) {
            realmInstance.delete(user);
          }
        });
      },
  };
}
