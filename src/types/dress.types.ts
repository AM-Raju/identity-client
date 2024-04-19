type TImage = {
  front: string;
  var1: string;
  var2: string;
};

type TDescription = {
  paragraph: string;
  list: string[];
};

export type TDress = {
  _id: string;
  image: TImage;
  title: string;
  price: number;
  ratings: number;
  reviewCount: number;
  category: string;
  description: TDescription;
  flashSale: boolean;
  discount: number;
};
