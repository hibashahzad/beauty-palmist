import GenericServices from "./GenericServices";
class BeautyService extends GenericServices {
  constructor() {
    super();
  }
  addBussness = (data, config) => {
    return this.postconfig("service", data, config);
  };
  getService = (id) => {
    return this.get("service/ServiceCategory/" + id);
  };
  ServiceUser = (id) => {
    return this.get("service/ServiceUser/" + id);
  };
  remServices = (id) => {
    return this.delete("service/" + id);
  };
}
let beautyService = new BeautyService();
export default beautyService;