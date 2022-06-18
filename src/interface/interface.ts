// user Type
export interface userProps{
  firstName: string,
  lastName: string,
  maidenName: string,
  username: string,
  email: string,
  birthDate: string,
  gender: string,
  image: string,
  height: number,
  weight: number,
  address: {
    address: string,
    city: string,
    postalCode: string
  }
}
