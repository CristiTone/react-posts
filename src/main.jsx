import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from '@clerk/clerk-react';
import App from './App.jsx';
import './index.css';
import { PostsProvider } from './postsContext/PostsContext.jsx';

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <PostsProvider>
          <App />
        </PostsProvider>
      </SignedIn>
      <SignedOut>
        <div className="sign-in-btn">
          <SignInButton />
        </div>
      </SignedOut>
    </ClerkProvider>
  </React.StrictMode>,
);
