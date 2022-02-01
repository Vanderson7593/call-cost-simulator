import { EModel } from "constants/model";

export interface IModel {
  [EModel.Id]: number,
  [EModel.CreatedAt]: Date,
  [EModel.UpdatedAt]: Date
}