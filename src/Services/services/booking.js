import GenericServices from "./GenericServices";
class BookingServices extends GenericServices {
  constructor() {
    super();
  }
  updateBookingPayment = (data, id, config) => {
    return this.putconfig("booking/Payment/" + id, data, config);
  };
  addBooking = (data) => {
    return this.post("booking", data);
  };
  getBooking = (id) => {
    return this.get("booking/" + id);
  };
  getOwnerBooking = (id) => {
    return this.get("booking/owner/" + id);
  };
  updatebooking = (id, data) => {
    return this.put("booking/" + id, data);
  };
}
let bookingServices = new BookingServices();
export default bookingServices;
