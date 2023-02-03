import { RootStateType } from 'Store/configureStore';

export const getUserName = (state: RootStateType) => state.userSlice.name;
export const getUserLoading = (state: RootStateType) => state.userSlice.loading;
export const getUserToken = (state: RootStateType) => state.userSlice.token;
export const getUserPhone = (state: RootStateType) => state.userSlice.phone;
export const getUserEmail = (state: RootStateType) => state.userSlice.email;
export const getUserPassword = (state: RootStateType) => state.userSlice.password;
