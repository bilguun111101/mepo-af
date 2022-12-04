export const productValidator = (title: string, price: number, category: string, quantity: number, description: string, artist: string) => {
  const errors: { [name: string]: object } = {};
  if (!title) {
    errors.title = { en: "Please fill out this field.", mn: "Үүнийг бөглөнө үү." };
  }
  if (!price) {
    errors.price = { en: "Please fill out this field.", mn: "Үүнийг бөглөнө үү." };
  }
  if (!category) {
    errors.category = { en: "Please fill out this field.", mn: "Үүнийг бөглөнө үү." };
  }
  if (!quantity) {
    errors.quantity = { en: "Please fill out this field.", mn: "Үүнийг бөглөнө үү." };
  }
  if (!description) {
    errors.description = { en: "Please fill out this field.", mn: "Үүнийг бөглөнө үү." };
  }
  if (!artist) {
    errors.artist = { en: "Please choose artist.", mn: "Артист сонгоно уу." };
  }
  return errors;
};
