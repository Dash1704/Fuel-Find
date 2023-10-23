export type FuelList = {
  DistanceFromSearchPostcode: number;
  Brand: string;
  Name: string;
  Street: string;
  Suburb: string;
  Town: string;
  County: string;
  Postcode: string;
  FuelPriceList: FuelPrice[];
}

export type FuelPrice = {
  FuelType: string;
  LatestRecordedPrice: {
    InPence: number;
    InGbp: number;
    TimeRecorded: string;
  }
}
