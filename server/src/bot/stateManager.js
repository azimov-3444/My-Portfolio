// Session state manager stored in-memory per chatId
const userSessions = new Map();

const getSession = (chatId) => {
  if (!userSessions.has(chatId)) {
    userSessions.set(chatId, {
      flow: null,       // 'PROJECT', 'HIRE', 'COLLAB'
      step: 0,
      data: {},
      history: []
    });
  }
  return userSessions.get(chatId);
};

const setSession = (chatId, sessionData) => {
  userSessions.set(chatId, sessionData);
};

const resetSession = (chatId) => {
  userSessions.delete(chatId);
};

module.exports = {
  getSession,
  setSession,
  resetSession
};
