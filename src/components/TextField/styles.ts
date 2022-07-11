import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type WrapperProps = {
  error?: boolean
}

type InputWrapper = {
  hasIcon: boolean
} & Pick<TextFieldProps, 'iconPosition' | 'disabled'>

const WrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: #ff6347;
    }

    ${Label} {
      color: #ff6347;
    }
  `
}

const InputWrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2rem;
      color: ${theme.colors.gray};
      margin-right: ${theme.spacings.xxsmall};
    }
  `,
  positionRightIcon: (theme: DefaultTheme) => css`
    flex-direction: row-reverse;
    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: 0;
    }
  `,
  disabled: () => css`
    cursor: not-allowed;
    svg {
      cursor: not-allowed;
    }
  `
}

const InputModifiers = {
  disabled: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    cursor: not-allowed;

    ::placeholder {
      color: ${theme.colors.gray};
    }
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ error }) => css`
    ${error && WrapperModifiers.error()}
  `}
`

export const InputWrapper = styled.div<InputWrapper>`
  ${({ theme, hasIcon, iconPosition, disabled }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    margin-top: 4px;
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${iconPosition === 'right' &&
    InputWrapperModifiers.positionRightIcon(theme)}
    ${hasIcon && InputWrapperModifiers.withIcon(theme)}
    ${disabled && InputWrapperModifiers.disabled()}
  `}
`

export const Input = styled.input`
  ${({ theme, disabled }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    ${disabled && InputModifiers.disabled(theme)}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const ErrorText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: #ff6347;
  `}
`
