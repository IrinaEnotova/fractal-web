import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Genders } from '../../enums/genders';

type InitialStateType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  nickname: string;
  gender: Genders | '';
  advantages: string[];
  checkboxes: string[];
  radio: string;
  description: string;
};

const initialState: InitialStateType = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  nickname: '',
  gender: '',
  advantages: [],
  checkboxes: [],
  radio: '',
  description: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMainInfo(state, action: PayloadAction<{ phone: string; email: string }>) {
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
    setStepOneInfo(
      state,
      action: PayloadAction<{ nickname: string; firstName: string; lastName: string; gender: Genders | '' }>
    ) {
      state.nickname = action.payload.nickname;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
    },
    setDescription(state, action: PayloadAction<{ description: string }>) {
      state.description = action.payload.description;
    },
    setAdvantages(state, action: PayloadAction<{ advantages: string[] }>) {
      state.advantages = action.payload.advantages;
    },
  },
});

export default userSlice.reducer;
export const { setMainInfo, setStepOneInfo, setDescription, setAdvantages } = userSlice.actions;
