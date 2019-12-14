export interface ICity { 
  id: string 
  label: string 
}

export interface ISelectedType {
  name: string
  alias: string
  key: number
}

export interface IType {
  name: string
  alias: string
}

export interface IMovieModel {
  event: IMovie
  showtimes: IShowTimes[]
}

export interface IMovie {
  id: string
  title: string
  originalTitle: string
  movieIdUrl: string
  ancineId: string
  countryOrigin: string
  priority: number
  contentRating: string
  duration: string
  rating: number
  synopsis: string
  cast: string
  director: string
  distributor: string
  inPreSale: boolean
  urlKey: string
  isPlaying: boolean
  countIsPlaying: number
  premiereDate: {
    localDate: string
    isToday: boolean
    dayOfWeek: string
    dayAndMonth: string
    hour: string
    year: string
  }
  creationDate: string
  city: string
  siteURL: string
  images: { 
    url: string 
    type: string 
  }[]
  genres: string[]
  completeTags: {
    name: string
    background: string
    color: string
  }[]
  tags: string[]
  trailers: {
    type: string
    url: string
    embeddedUrl: string
  }
  boxOfficeId: string
  partnershipType: string
  rottenTomatoe: {
    id: string
    criticsRating: string
    criticsScore: string
    originalUrl: string
  }
}

export interface IShowTimes {
  id: string
  name: string
  address: string
  addressComplement: string
  number: string
  urlKey: string
  neighborhood: string
  properties: { hasBomboniere: boolean }
  deliveryType: string[]
  siteURL: string
  enabled: boolean
  blockMessage: string
  rooms: {
    name: string
    sessions: {
      id: string
      price: number
      type: string[]
      types: {
        id: number
        name: string
        alias: string
        display: boolean
      }[]
      date: {
        localDate: string
        isToday: boolean
        dayOfWeek: string
        dayAndMonth: string
        hour: string
        year: string
      }
      realDate: {
        localDate: string
        isToday: boolean
        dayOfWeek: string
        dayAndMonth: string
        hour: string
        year: string
      }
      time: string
      defaultSector: string
      siteURL: string
      hasSeatSelection: boolean
      enabled: boolean
      blockMessage: string
    }[]
  }[]
  geolocation: { 
    lat: number 
    lng: number 
  }
}