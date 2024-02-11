// for accessing the token in our backend middleware
const baseQuery = fetchBaseQuery({
  baseUrl: 'end point here here',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
