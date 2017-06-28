import Session from '../models/Session';

export function createSessionActions(realmInstance) {
  return {
    // Set the current session
    setSession: (session) => {
      // New session will be replaced the old one
      session.id = -1;

      realmInstance.write(() => {
        realmInstance.create(Session.get(), session);
      });
    },

    getSession: () => {
      return realmInstance
      .objects(session.get()).filtered(`${Session.schema.primaryKey} = -1`)[0];
    },

    updateSessionUser(user) => {
      const session = realmInstance
      .objects(session.get()).filtered(`${session.schema.primaryKey} = -1`)[0];

      if(session){
        realmInstance.write(() => {
          session.user = user;
        });
      }
    },

    destroySession(user) => {
      const currentSession = realmInstance.objects.(session.get());
      realmInstance.write(() => {
        realmInstance.delete(currentSession);
      });
    }
}
