import { TotalContext } from "../context/total-context";
import { useContext } from "react";

export const useTotal = () => useContext(TotalContext)