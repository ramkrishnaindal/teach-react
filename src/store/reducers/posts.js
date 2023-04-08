const initialState = [
  {
    title: "New Post",
    description: "Some description",
  },
];
export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST": {
      const newPosts = [...state, action.payload];
      return newPosts;
    }
    case "REMOVE_POSTS": {
      const newPosts = state.filter((i) => i.title !== action.payload);
      return newPosts;
    }
    default:
      return state;
  }
};
