import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helper'

import cardsMock from './mock'

import PaymentOptions from '.'

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn} />
    )

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label ', async () => {
    const { container } = renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn} />
    )

    userEvent.click(screen.getByLabelText(/4325/))

    await waitFor(() => {
      // expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
      const radio = container.querySelector(
        `input[name="credit-card-*** *** **** 4325"]`
      )
      expect(radio).toBeChecked()
    })
  })

  it('should not call handlePayment when button is  disabled', () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByLabelText(/4325/))

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalledTimes(1)
    })
  })
})
