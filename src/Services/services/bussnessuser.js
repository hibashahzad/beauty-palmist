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
}
let bussnessServices = new BussnessServices();
export default bussnessServices;
