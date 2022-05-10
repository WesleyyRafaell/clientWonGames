import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'

export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  color?: RibbonColors
  children: React.ReactNode
  size?: RibbonSizes
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => (
  <S.Wrapper size={size} color={color}>
    {children}
  </S.Wrapper>
)

export default Ribbon
