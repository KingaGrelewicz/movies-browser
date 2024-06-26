import { call, put, takeLatest } from "redux-saga/effects";
import getPeopleCredits from "./peopleCreditsAPI";
import {
  fetchPeopleCredits,
  fetchPeopleCreditsError,
  fetchPeopleCreditsSuccess,
} from "./peopleCreditsSlice";

export function* fetchPeopleCreditsHandler({payload: peopleIp}) {
  try {
    const creditsData = yield call(getPeopleCredits, peopleIp);
    yield put(fetchPeopleCreditsSuccess(creditsData));
  } catch (error) {
    yield put(fetchPeopleCreditsError());
  }
}

export function* peopleCreditsSaga() {
  yield takeLatest(fetchPeopleCredits.type, fetchPeopleCreditsHandler);
}
