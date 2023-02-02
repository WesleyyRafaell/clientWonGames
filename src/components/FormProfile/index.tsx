import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField name="name" label="Name" placeholder="Name" />
      <TextField
        name="email"
        label="E-mail"
        placeholder="E-mail"
        initialValue="johndoe@gmail.com"
        disabled
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        placeholder="type your password"
      />
      <TextField
        name="new_password"
        label="New Password"
        type="password"
        placeholder="new password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
