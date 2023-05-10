import { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { PostsContext } from './postsContext/PostsContext';
import { SignOutButton } from '@clerk/clerk-react';

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw 'Missing Publishable Key';
}

const URL = 'https://dummyjson.com/posts?limit=5';

function App() {
  const [posts, dispatch] = useContext(PostsContext);
  const [skipNo, setSkipNo] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((result) => result.json())
      .then((data) => {
        dispatch({
          type: 'set_posts',
          payload: data.posts,
        });
        setLoading(false);
      });
  }, [dispatch]);

  const handleClick = async () => {
    setLoading(true);

    const result = await fetch(`${URL}&skip=${5 * skipNo}`);
    const data = await result.json();

    dispatch({
      type: 'add_posts',
      payload: data.posts,
    });
    setLoading(false);
    setSkipNo(skipNo + 1);
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Posts Something
          </Typography>
          <SignOutButton />
        </Toolbar>
      </AppBar>
      {posts?.map((post) => (
        <Card key={post.id} className="posts-container">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{post.reactions} Reactions</Button>
          </CardActions>
        </Card>
      ))}
      <Button size="large" disabled={loading} onClick={handleClick}>
        {loading ? 'Loading...' : 'Load more'}
      </Button>
    </div>
  );
}

export default App;
