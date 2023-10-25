import data from "../data.json";
import { FuelList } from "../types";

export function useData() {
  return {
    fuelStations: data.FuelStationList as FuelList[],
  };
}
