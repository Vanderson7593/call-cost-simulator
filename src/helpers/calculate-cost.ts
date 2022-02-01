export const calculateTotal =
  (mins: number, planMin: number, cost: number) => {
    const hasExceeded = mins > planMin

    const PERCENTAGE = 10;

    const partialTotal = (x: number) => (mins - x) * cost

    const total = partialTotal(planMin) + partialTotal(planMin) * PERCENTAGE / 100;

    return {
      withPlan: hasExceeded ? total.toFixed(2) : 0,
      withoutPlan: partialTotal(0).toFixed(2)
    }
  }

