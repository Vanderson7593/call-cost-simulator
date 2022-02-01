import { calculateTotal } from '../helpers/calculate-cost'
import { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

type TTotal = { withPlan: string | number; withoutPlan: string | number }

type TotalContextType = {
  total: TTotal
  mins: number
  planMin: number
  cost: number
  setMins: Dispatch<SetStateAction<number>>
  setCost: Dispatch<SetStateAction<number>>
  setPlanMin: Dispatch<SetStateAction<number>>
}

export const TotalContext = createContext({} as TotalContextType)

export const TotalProvider: FC = ({ children }) => {
  const [total, setTotal] = useState<TTotal>(null)
  const [mins, setMins] = useState<number>(1)
  const [cost, setCost] = useState<number>(0)
  const [planMin, setPlanMin] = useState<number>(30)

  useEffect(() => {
    if (cost) setTotal(calculateTotal(mins, planMin, cost))
  }, [mins, planMin, cost])

  return (
    <TotalContext.Provider
      value={{
        total,
        setPlanMin,
        setCost,
        setMins,
        cost,
        mins,
        planMin
      }}
    >
      {children}
    </TotalContext.Provider>
  )
}
