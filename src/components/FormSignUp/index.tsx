import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from '../FormStyle'

const FormSignUp = () => (
  <S.Wrapper>
    <TextField
      name="nome"
      placeholder="Nome"
      type="nome"
      icon={<AccountCircle />}
    />
    <TextField name="email" placeholder="Email" type="email" icon={<Email />} />
    <TextField
      name="password"
      placeholder="Password"
      type="password"
      icon={<Lock />}
    />
    <TextField
      name="ConfirmPassword"
      placeholder="Confirm password"
      type="ConfirmPassword"
      icon={<Lock />}
    />
    <Button size="large" fullWidth>
      Sign in now
    </Button>
    <S.FormLink>
      Already have an account?
      <Link href="/sign-in">
        <a>Sign in</a>
      </Link>
    </S.FormLink>
  </S.Wrapper>
)

export default FormSignUp
