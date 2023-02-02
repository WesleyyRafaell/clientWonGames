import React, { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  name,
  initialValue = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(value)
  }

  return (
    <S.Wrapper error={!!error}>
      {!!label && (
        <S.Label disabled={disabled} htmlFor={name}>
          {label}
        </S.Label>
      )}
      <S.InputWrapper
        hasIcon={!!icon}
        iconPosition={iconPosition}
        disabled={disabled}
      >
        {!!icon && icon}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  )
}

export default TextField
