import { UPDATE_USER } from '../constants/action-types';

export function updateLoggedInUser(user) {
  return {
    type: UPDATE_USER,
    payload: {
      loggedInUser: user.loggedInUserUsername,
      userProfilePhotoURL: user.userProfilePhotoURL,
    }
  }
}