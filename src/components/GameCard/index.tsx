import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import Image from 'next/image'
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from 'styled-icons/material'
import * as S from './styles'
import Link from 'next/link'

export type GameCardProps = {
  slug: string
  title: string
  developer: string
  img: string | null
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: string
  ribbonColor?: 'primary' | 'secondary'
  ribbonSize?: 'normal' | 'small'
}

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor,
  ribbonSize
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        {img ? (
          <Image
            unoptimized
            src={`http://localhost:1337${img}`}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <Image
            unoptimized
            src="/img/no-game-image.jpg"
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        )}
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
