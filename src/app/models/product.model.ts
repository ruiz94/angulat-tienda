interface Rating{
  count: number,
  rate: number
}
export interface Product{
  id: string,
  title: string,
  price: number,
  image: string,
  description: string,
  category: string,
  rating: Rating
}
