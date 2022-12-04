export const addValidator = (country: string, citySoum: string, zipPostcode: string, stateProvince: string, apartmentSuite: string) => {
  const errors: { [name: string]: object } = {};
  if (!country) {
    errors.country = { en: "Please fill out this field.", mn: "Үүнийг бөглөнө үү." };
  }
  if (!citySoum) {
    errors.citySoum = { en: "Please fill out this field.", mn: "Үүнийг бөглөнө үү." };
  }
  if (!zipPostcode) {
    errors.zipPostcode = { en: "Please fill out this field.", mn: "Үүнийг бөглөнө үү." };
  }
  if (!stateProvince) {
    errors.stateProvince = { en: "Please fill out this field.", mn: "Үүнийг бөглөнө үү." };
  }
  if (!apartmentSuite) {
    errors.apartmentSuite = { en: "Please fill out this field.", mn: "Үүнийг бөглөнө үү." };
  }
  return errors;
};
