export const UserTypes = {
  SET_USER: '@@user/SET_USER',
}

export const createSetUserAction = (userName) => ({
  type: UserTypes.SET_USER,
  payload: {
    userName,
  },
});


const initialState = {
  userName: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserTypes.SET_USER:
      return Object.assign({}, state, {
        userName: action.payload.userName
      });
    default:
      return state;
  }
}