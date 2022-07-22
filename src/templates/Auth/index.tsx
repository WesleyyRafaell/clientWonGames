import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>
        <div>
          <Heading size="large">All your favorite games in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming <br />{' '}
            platform.
          </S.Subtitle>
        </div>
        <S.Footer>
          <S.FooterTitle>
            Won Games 2020 © Todos os Direitos Reservados
          </S.FooterTitle>
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>
    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>
        <Heading lineLeft lineColor="secondary" color="black">
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
