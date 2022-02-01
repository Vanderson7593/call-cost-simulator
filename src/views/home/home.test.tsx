import { fireEvent, render, screen, userEvent } from '@test-suite'
import HomeView from '.'

const makeSut = () => render(<HomeView />)

describe(HomeView.name, () => {
  it('should render as expected with default values', () => {
    makeSut()

    expect(screen.getByText('With Plan:')).toBeInTheDocument()
    expect(screen.getByText('Without Plan:')).toBeInTheDocument()
    expect(screen.getAllByText('R$ 0').length).toBe(2)
  })
})
