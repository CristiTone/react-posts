import { useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PostsContext } from './postsContext/PostsContext';

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw 'Missing Publishable Key';
}

const URL = 'https://dummyjson.com/posts?limit=5';

function App() {
  const [posts, dispatch] = useContext(PostsContext);

  useEffect(() => {
    fetch(URL)
      .then((result) => result.json())
      .then((data) =>
        dispatch({
          type: 'set_posts',
          payload: data.posts,
        }),
      );
  }, [dispatch]);

  return (
    <div>
      {posts?.map((post) => (
        <Card key={post.id}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{post.reactions} Like</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default App;
