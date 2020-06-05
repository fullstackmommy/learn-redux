import { UPDATE_TEMPERATURE } from "../constants/freezer";

export const updateTemperature = temperature => {
  return {
    type: UPDATE_TEMPERATURE,
    payload: temperature
  };
};
