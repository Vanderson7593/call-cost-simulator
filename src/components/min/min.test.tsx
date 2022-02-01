import { render, screen, fireEvent } from '@test-suite'

import Min from '.'

const makeSut = () => render(<Min />)

describe(Min.name, () => {
  it('should render as expected with default value', () => {
    makeSut()

    expect(screen.getByText('Minutes (1)')).toBeInTheDocument()
    expect(screen.getByLabelText('min-slider')).toBeInTheDocument()
  })
})
