import { all, put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";

// Add watchers that will listen for async actions.
// Whenever the action is called, this function will be triggered and
// will run the callback function.
export function* watchEditAnimal() {
  // `takeLatest` is good for form submissions because, if multiple requests
  // received, it will only honor the latest request and will prevent
  // multiple async requests from running simultaneously.
  yield takeLatest(actions.editAnimal.toString(), takeEditAnimal);
}

// Add callback functions that will be passed to the watchers.
// Whenever these callbacks are called, they will make the actual
// API request, etc. When the result is received, they can then
// call another action, such as putting the request result or error.
export function* takeEditAnimal() {
  console.log("Starting fetch request to API");
  try {
    // TODO update logic to edit existing instead of add new
    const fields = yield select((state) => state.animal.form.fields);
    const animals = yield select((state) => state.animal.list.animals);

    const animal = {
      id: animals.length + 1,
      ...fields,
    };

    // pretend call to API
    yield delay(500);

    const result = [animal, ...animals];

    yield put(actions.editAnimalResult(result));
  } catch (error) {
    yield put(actions.editAnimalError(error.toString()));
  }
}
