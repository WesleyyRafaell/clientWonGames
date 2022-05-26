import { Story, Meta } from '@storybook/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import Slider, { SliderProps } from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const SliderStyled = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story<SliderProps> = () => (
  <Slider settings={settings}>
    <SliderStyled>1</SliderStyled>
    <SliderStyled>2</SliderStyled>
    <SliderStyled>3</SliderStyled>
    <SliderStyled>4</SliderStyled>
    <SliderStyled>5</SliderStyled>
    <SliderStyled>6</SliderStyled>
    <SliderStyled>7</SliderStyled>
  </Slider>
)

export const Vertical: Story<SliderProps> = () => (
  <Slider settings={verticalSettings}>
    <SliderStyled>1</SliderStyled>
    <SliderStyled>2</SliderStyled>
    <SliderStyled>3</SliderStyled>
    <SliderStyled>4</SliderStyled>
    <SliderStyled>5</SliderStyled>
    <SliderStyled>6</SliderStyled>
    <SliderStyled>7</SliderStyled>
  </Slider>
)
