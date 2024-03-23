import { createSlice } from "@reduxjs/toolkit";

// This is the "primary key" for this feature's reducer which separates this data from other features'.
const name = "story";

// This defines the actual shape of the reducer data.
const initialState = {
  userInputs: {
    noun1: {
      type: "Noun",
      value: "",
    },
    noun2: {
      type: "Noun (plural)",
      value: "",
    },
    adjective1: {
      type: "Adjective",
      value: "",
    },
    adjective2: {
      type: "Adjective",
      value: "",
    },
    adjective3: {
      type: "Adjective",
      value: "",
    },
    adjective4: {
      type: "Adjective",
      value: "",
    },
    noun3: {
      type: "Noun",
      value: "",
    },
    verb1: {
      type: "Verb",
      value: "",
    },
    adverb1: {
      type: "Adverb",
      value: "",
    },
    adjective5: {
      type: "Adjective",
      value: "",
    },
  },
};

// These functions essentially define the actions for this reducer.
const reducers = {
  setUserInput: (state, { payload }) => {
    const { field, value } = payload;

    // Get the current state values.
    const currentInputs = state.userInputs;
    const currentField = state.userInputs.field;

    // Rewrite the state, first spreading in the existing values and then overwriting as needed.
    const userInputs = {
      ...currentInputs,
      [field]: {
        ...currentField,
        value,
      },
    };

    // Assign the new state. While this appears to mutate state, under the hood Redux Toolkit utilizes
    // an immutable library which ensures this is a safe, immutable action.
    state.userInputs = userInputs;
  },
};

// This is what actually creates the actions based on the reducer functions and state.
const slice = createSlice({
  name,
  initialState,
  reducers,
});

// Add any reducer functions here so that they will be available as actions elsewhere in the app.
export const { setUserInput } = slice.actions;

export default slice.reducer;
