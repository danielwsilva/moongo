export type MeResponse = {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  date_birth: string;
  gender: string;
  image: string;
  hash: string;
  qr_code: string;
  status: string;
  created_at: string;
  company: string;
  place: {
    id: string;
    zipcode: string;
    address: string;
    address_number: string;
    neighborhood: string;
    complement: string;
    state: string;
    city: string;
  };
  car: {
    id: string;
    car_plate: string;
    car_renamed: string;
    model: string;
    year: string;
    color: string;
  };
};

export type ProductResponse = {
  id: string;
  image: string;
  description: string;
  sku: string;
  sale_price: number;
  percentage: number;
  brand: string;
  category: string;
  stock: number;
  stock_motorist: number;
  stock_min: number;
  stock_max: number;
  supply?: number;
};