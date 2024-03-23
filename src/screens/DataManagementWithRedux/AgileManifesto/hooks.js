import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";

export const useUpdateUserInput = () => {
  const dispatch = useDispatch();
  const userInputs = useSelector((state) => state.story.userInputs);

  // This hook returns the existing values, as well as a function to dispatch new values
  return {
    userInputs,
    setUserInput: (field) => (value) => {
      return dispatch(actions.setUserInput({ field, value }));
    },
  };
};
