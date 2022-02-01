import { render, screen, fireEvent } from '@test-suite'
import Cost from '.'

const makeSut = () => render(<Cost />)

describe(Cost.name, () => {
  it('should render as expected with default value', () => {
    makeSut()

    expect(screen.getByText('Call cost')).toBeInTheDocument()
    expect(screen.getByText('With Plan:')).toBeInTheDocument()
    expect(screen.getByText('Without Plan:')).toBeInTheDocument()
    expect(screen.getAllByText('R$ 0').length).toBe(2)
  })
})
