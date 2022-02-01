import { CITIES_MIN_COST } from "../mocks/ddds"

export const getMins =
  (code: string) => {
    const x = CITIES_MIN_COST.filter((x) => x.code === `${code}`)[0]
    if (x) return x.min
    else return 0
  }