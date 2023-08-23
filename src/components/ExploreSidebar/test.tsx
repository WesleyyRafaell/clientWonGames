import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'
// import userEvent from '@testing-library/user-event'

import ExploreSidebar from '.'

import items from './mock'
// import { Overlay } from './styles'
// import { css } from 'styled-components'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar onFilter={jest.fn} items={items} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar onFilter={jest.fn} items={items} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$100/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar onFilter={jest.fn} items={items} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should sheck initial value that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        onFilter={jest.fn}
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should return selected items in onFilter', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

    fireEvent.click(screen.getByLabelText(/windows/i))
    fireEvent.click(screen.getByLabelText(/linux/i))
    fireEvent.click(screen.getByLabelText(/low to high/i))

    fireEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      windows: true,
      linux: true,
      sort_by: 'low-to-high'
    })
  })

  it('should altern between radio options', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

    fireEvent.click(screen.getByLabelText(/low to high/i))
    fireEvent.click(screen.getByLabelText(/high to low/i))

    fireEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' })
  })

  // it('should open/close sidebar when filtering on mobile ', async () => {
  //   const { container } = renderWithTheme(
  //     <ExploreSidebar items={items} onFilter={jest.fn} />
  //   )

  //   const variant = {
  //     media: '(max-width:768px)',
  //     modifier: String(css`
  //       ${Overlay}
  //     `)
  //   }

  //   const Element = container.firstChild

  //   screen.debug(screen.getByTestId('overlaySidebar'))

  //   expect(Element).not.toHaveStyleRule('opacity', '1', variant)

  //   userEvent.click(screen.getByLabelText(/open filters/))

  //   expect(Element).toHaveStyleRule('opacity', '1', variant)
  //   // await waitFor(() => {
  //   // })

  //   userEvent.click(screen.getByLabelText(/close filters/))

  //   expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  //   // await waitFor(() => {
  //   // })
  // })
})
