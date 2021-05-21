import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Name: ${this.name}</h1>
        <h4>Latitude: ${this.location.lat}</h4>
        <h4>Longitude: ${this.location.lng}</h4>
      </div>
    `;
  }
}
