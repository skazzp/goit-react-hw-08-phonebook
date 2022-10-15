const getIsloggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsLoading = state => state.auth.isLoading;

const authSelectors = {
  getIsloggedIn,
  getUsername,
  getIsLoading,
};

export default authSelectors;
