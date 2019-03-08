export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_USERS':
      return action.payload
    case 'FETCH_ONE_USER':
      return action.payload
    default:
      return state
  }
}