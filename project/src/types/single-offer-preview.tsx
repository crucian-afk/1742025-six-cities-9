export type city = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  name: string;
}

export type ActiveOfferId = {
  id: number | null;
}

export type SingleOfferPreview = {
  bedrooms: number;
  city: city;
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string
}
