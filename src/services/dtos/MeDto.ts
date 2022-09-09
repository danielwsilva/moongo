export type MeDtoRes = {
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
  place: {
    id: string;
    zipcode: number;
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
