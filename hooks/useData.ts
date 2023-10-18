// import { fetchApi } from "./hooks/fetchApi";
// import { FuelList } from "../types";

// export function useData() {
//   return {
//     fuelStations: fetchApi.DataItems.FuelStationList as FuelList[],
//   };
// }

import data from "../data.json";
import { FuelList } from "../types";

export function useData() {
  return {
    fuelStations: data.FuelStationList as FuelList[],
  };
}
