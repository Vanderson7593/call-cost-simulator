import { render, screen, fireEvent, userEvent, act, waitFor } from '@test-suite'

import OriginDestiny from '.'

const makeSut = () => render(<OriginDestiny />)

describe(OriginDestiny.name, () => {
  it('should render as expected', () => {
    makeSut()

    expect(screen.getAllByText('Origin').length).toBe(2)
    expect(screen.getAllByText('Destiny').length).toBe(2)
    expect(screen.getByLabelText('origin-select')).toBeInTheDocument()
    expect(screen.getByLabelText('destiny-select')).toBeInTheDocument()
  })
})
