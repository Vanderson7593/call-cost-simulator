import { PLANS_MOCK } from '../../mocks/index'
import { render, screen, fireEvent } from '@test-suite'
import { IPlan } from '@types'
import Plans from '.'

const makeSut = (plans: ReadonlyArray<IPlan>) => render(<Plans plans={plans} />)

describe(Plans.name, () => {
  it('should render as expected', () => {
    makeSut(PLANS_MOCK)

    expect(screen.getAllByText('Plan').length).toBe(2)

    expect(
      screen.getByText(`${PLANS_MOCK[0].title} - ${PLANS_MOCK[0].mins}mins`)
    ).toBeInTheDocument()
  })
})
