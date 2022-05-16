import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImg?: string
  aligment?: 'right' | 'left'
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImg,
  aligment = 'right',
  buttonLabel,
  buttonLink
}: HighlightProps) => (
  <S.Wrapper
    data-testid="background"
    backgroundImage={backgroundImage}
    aligment={aligment}
  >
    {!!floatImg && <S.FloatImg src={floatImg} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
