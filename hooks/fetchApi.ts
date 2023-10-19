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
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    console.log('API response:', data);
  } catch (error) {
    console.error('API request failed:', error);
  }
};

fetchAPI();