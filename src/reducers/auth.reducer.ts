import { Session } from "@supabase/supabase-js";

interface InitialState {
  session: Session | null;
}

const initialState: InitialState = {
  session: null,
};

type Action =
  | {
      type: "SET_SESSION";
      payload: Session | null;
    }
  | {
      type: "LOGOUT";
      payload: null;
    };

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_SESSION":
      return { ...state, session: action.payload };
    default:
      return state;
  }
};

export default authReducer;