import { NextPage } from 'next'
import { useState } from 'react'

import { Button, Divider, PasswordInput, SimpleGrid, TextInput } from '@mantine/core'
import { useSignInEmailPassword } from '@nhost/nextjs'

import AuthLink from '../../components/AuthLink'
import SignInLayout from '../../layouts/SignInLayout'

export const SignInPasswordPage: NextPage = () => {
  const { signInEmailPassword } = useSignInEmailPassword()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <SignInLayout title="Email + password Sign In">
      <SimpleGrid cols={1} spacing={6}>
        <TextInput
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <PasswordInput
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Button fullWidth onClick={() => signInEmailPassword(email, password)}>
          Continue with email + password
        </Button>
      </SimpleGrid>
      <Divider />
      <AuthLink link="/sign-in" variant="white">
        &#8592; Other Login Options
      </AuthLink>
    </SignInLayout>
  )
}

export default SignInPasswordPage
