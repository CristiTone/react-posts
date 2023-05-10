import { createContext, useReducer } from 'react';

export const PostsContext = createContext(null);

const initialState = [];

function postsReducer(posts, action) {
  switch (action.type) {
    case 'set_posts':
      return action.payload;
    case 'add_posts':
      return [...posts, ...action.payload];
    default:
      throw Error(`Unkown action: ${action.type}!`);
  }
}

// eslint-disable-next-line react/prop-types
export function PostsProvider({ children }) {
  const [posts, dispatch] = useReducer(postsReducer, initialState);

  return (
    <PostsContext.Provider value={[posts, dispatch]}>
      {children}
    </PostsContext.Provider>
  );
}
