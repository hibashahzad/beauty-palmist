import GenericServices from "./GenericServices";
class BookingServices extends GenericServices {
  constructor() {
    super();
  }
  addBooking = (data) => {
    return this.post("booking", data);
  };
  getBooking = (id) => {
    return this.get("booking/" + id);
  };
}
let bookingServices = new BookingServices();
export default bookingServices;
