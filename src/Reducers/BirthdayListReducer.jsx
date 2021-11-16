const GET_USERS = "GET_USERS";
const IS_FETCHING = "IS_FETCHING";
const DELETE_USER = "DELETE_USER";
const ADD_NEW_EVENT = "ADD_NEW_EVENT";
let birthdayState = {
  users: [],
  isFetching: false,
  addFirstName: null,
  addSecondName: null,
};
const birthdayListReducer = (state = birthdayState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetch,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        users: [...state.users.filter((user) => user.id !== action.userId)],
      };
    }
    case ADD_NEW_EVENT: {
      return {
        ...state,
        users: [
          ...state.users,
          {
            name: action.name,
            years: action.years,
            id: Date.now(),
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};
export const getUsers = (users) => ({ type: GET_USERS, users });
export const isFetch = (isFetch) => ({ type: IS_FETCHING, isFetch });
export const deleteUser = (userId) => ({ type: DELETE_USER, userId });
export const addNewEvent = (name, years) => ({ type: ADD_NEW_EVENT, name, years });
export default birthdayListReducer;
