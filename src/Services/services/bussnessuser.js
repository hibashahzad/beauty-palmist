import GenericServices from "./GenericServices";
class BussnessServices extends GenericServices {
  constructor() {
    super();
  }
  addBussness = (data, config) => {
    return this.postconfig("Bussness", data, config);
  };
  getBussness = (id) => {
    return this.get("Bussness/" + id);
  };
  getBussnessOwner = (id) => {
    return this.get("Bussness/Owner/" + id);
  };
}
let bussnessServices = new BussnessServices();
export default bussnessServices;
