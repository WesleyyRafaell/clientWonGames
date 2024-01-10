import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import * as S from './styles'
import formatPrice from 'utils/format-price'

export type GameInfoProps = {
  title: string
  price: number
  description: string
}

const Gameinfo = ({ title, price, description }: GameInfoProps) => (
  <S.Wrapper>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <Heading color="black" lineBottom lineColor="primary">
      {title}
    </Heading>
    <S.Text>{description}</S.Text>
    <S.ButtonsContainer>
      <Button icon={<AddShoppingCart />} fullWidth>
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} fullWidth minimal>
        Wishlist
      </Button>
    </S.ButtonsContainer>
  </S.Wrapper>
)

export default Gameinfo
