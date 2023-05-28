import {AUTH_MODAL_TUPES} from "../types/authModalTypes"


const initialState = {
  open: false,
  view: "login",
};

const authModulReduser = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_MODAL_TUPES.MODAL:
      return action.payload;

    default:
      return state;
  }
};

export default authModulReduser;

