import { EPlan } from "@constants";
import { IModel } from "./model";

export interface IPlan {
  [EPlan.Title]: string
  [EPlan.Mins]: number
}