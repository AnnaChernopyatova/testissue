export default interface User {
    id: number;
    name: string,
    phone: string,
    username: string,
    email: string,
    website: string,
    address: Address,
    company: Company
}

interface Address {
    city: string,
    geo: Geo,
    street: string,
    suite: string,
    zipcode: string
}

interface Geo {
    lat: string,
    lng: string
}

interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}