import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'

export default function Page() {
  return (
    <>
    <h1>Trying...</h1>
    <AuthenticateWithRedirectCallback />
    
    </>
)
}