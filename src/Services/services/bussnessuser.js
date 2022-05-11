import GenericServices from "./GenericServices";
class BussnessServices extends GenericServices {
  constructor() {
    super();
  }
  addBussness = (data, config) => {
    return this.postconfig("Bookings", data, config);
  };
  getBussness = (id) => {
    return this.get("Bookings/" + id);
  };
  getBussnessOwner = (id) => {
    return this.get("Bookings/Owner/" + id);
  };
}
let bussnessServices = new BussnessServices();
export default bussnessServices;
