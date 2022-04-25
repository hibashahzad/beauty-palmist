import { Tab, Tabs } from "react-bootstrap";
import CanceledS from "../../../Components/Header/Booking/CanceledS";
import HistoryP from "../../../Components/Header/Booking/HistoryP";
import Upcomings from "../../../Components/Header/Booking/UpcomingS";

import "./BookingsS.css";

const BookingSchedule = () => {
  return (
    <>
      <div class="py-5 mainbookings">
        <div class="card booktopcard">
        <div class="card toppings">Booking Schedule</div>
          <Tabs
            defaultActiveKey="BookingSchedules"
            id="uncontrolled-tab-example"
            className="mb-5"
          >
            <Tab eventKey="BookingSchedules" title="Booking Schedules">
              <div class="card p-3">
              <div class="row">
            <div class="col">
              <input
                class="form-control form-control-lg form-control-borderless"
                type="search by Client Name"
                placeholder="Search by Client Name"
              />
            </div>
          </div>
                

                <Tabs
                  defaultActiveKey="upcoming"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="upcoming" title="Upcoming">
                    <Upcomings />
                  </Tab>
                  <Tab eventKey="history" title="History">
                    <HistoryP />
                  </Tab>

                  <Tab eventKey="cancelled" title="Cancelled">
                    <CanceledS />
                  </Tab>
                </Tabs>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};
export default BookingSchedule;