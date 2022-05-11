import GenericServices from "./GenericServices";
class BookingServices extends GenericServices {
  constructor() {
    super();
  }
  addBooking = (data) => {
    return this.post("Booking", data,);
  };
  getBooking = (id) => {
    return this.get("Booking/" + id);
  };

}
let bookingServices = new BookingServices();
export default bookingServices;
