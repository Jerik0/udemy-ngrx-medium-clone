export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure'
}

// we don't do this:
// export const ActionTypes = { REGISTER: '[Auth] Register' }
// because enums force you to have unique identifiers and a const won't force it.
