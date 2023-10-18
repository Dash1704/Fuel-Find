const apiKey = 'ba2fc5a6-b152-43a8-bc2c-f431efe89e3e';
const packageId = 'FuelPriceData';
const packageVersion = 1;
const responseVersion = 2;

const apiEndpoint = `https://uk1.ukvehicledata.co.uk/api/datapackage/FuelPriceData?v=2&api_nullitems=1&auth_apikey=ba2fc5a6-b152-43a8-bc2c-f431efe89e3e&key_POSTCODE=BS12AN` 

const requestData = {
  ApiKeyId: apiKey,
  PackageId: packageId,
  PackageVersion: packageVersion,
  ResponseVersion: responseVersion,
};

const fetchAPI = async () => {
  try {
    const response = await fetch(apiEndpoint, {
      method: 'GET', // Or 'GET' depending on the API
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    // Handle the API response data here
    console.log('API response:', data);
  } catch (error) {
    console.error('API request failed:', error);
  }
};

// Call the fetchAPI function to make the request
fetchAPI();




// DataItems.FuelStationList

// distanceFromSearchPostcode: number;
// brand: string;
// name: string;
// street: string;
// suburb: string;
// town: string;
// county: string;
// postcode: string;