export const getIsloggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsloggedIn,
  getUsername,
};

export default authSelectors;
