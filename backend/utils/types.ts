export interface IAddress {
  _id: string;
  owner: IUser;
  detail: string;
  country: string;
  citySoum: string;
  phoneNum: string;
  zipPostcode: string;
  stateProvince: string;
  apartmentSuite: string;
}
export interface IUser {
  _id: string;
  role: string;
  email: string;
  orders: IOrder[];
  password: string;
  address: IAddress;
  emailToken: string;
  phoneNumber: string;
  isVerified: boolean;
}
export interface IOrder {
  _id: string;
  user: IUser;
  size: string;
  email: string;
  amount: number;
  fullname: string;
  address: IAddress;
  paymentID: string;
  orderItem: IProduct;
  orderStatus: string;
}
export interface IProduct {
  _id: string;
  title: string;
  price: number;
  special: boolean;
  unique: boolean;
  images: object[];
  quantity: number;
  sizes: string[];
  gender: string;
  description: string;
  artist: IArtist;
}

export interface IArtist {
  _id: string;
  title: string;
  name: string;
  image: object[];
}
