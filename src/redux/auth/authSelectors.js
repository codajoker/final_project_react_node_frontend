export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getIsRefreshing = state => state.auth.isRefreshing;
export const getCalories = state => state.auth.user.dailyCalories;
export const getUserEmail = state => state.auth.user.email;
export const getVerify = state => state.auth.user.verify;
export const getToken = state => state.auth.token;

