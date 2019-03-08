import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchAllUsers = () => async dispatch => {
  const response = await jsonPlaceholder.get('/users')

  dispatch({ type: 'FETCH_ALL_USERS', payload: response.data })
}

export const fetchOneUser = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`)

  dispatch({ type: 'FETCH_ONE_USER', payload: response.data })
}