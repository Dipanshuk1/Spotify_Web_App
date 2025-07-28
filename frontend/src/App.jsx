// src/App.jsx
import { SignIn, SignUp, UserButton, useUser } from '@clerk/clerk-react'

function App() {
  const { isSignedIn, user } = useUser()

  if (!isSignedIn) return <SignIn />

  return (
    <div className="p-4">
      <h1>Welcome, {user.firstName} 👋</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
