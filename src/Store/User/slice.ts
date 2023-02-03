import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
  phone: '',
  token: '',
  loading: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserData(
      state,
      {
        payload: { name, email, password, phone, token },
      }: PayloadAction<{
        name: string;
        email: string;
        password: string;
        phone: string;
        token: string;
      }>,
    ) {
      return {
        ...state,
        email,
        token,
        name,
        password,
        phone,
      };
    },

    setUserLoading(state, { payload }: PayloadAction<boolean>) {
      return { ...state, loading: payload };
    },

    clearUserData(state) {
        return { ...initialState };
      },
  },
});

export const {
  name: userSliceName,
  reducer: userSliceReducer,
  actions: UserSliceActions,
} = userSlice;
