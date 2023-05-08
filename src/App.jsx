import './App.css';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from '@clerk/clerk-react';

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw 'Missing Publishable Key';
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <h1>Hello</h1>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;
