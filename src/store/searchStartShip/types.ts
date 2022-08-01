export type starShipType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: resultType[];
};

export type resultType = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  imgSrc: string;
  iconSrc: string;
};

export type ActionType<T = string> = {
  type: string;
  payload: T;
};
