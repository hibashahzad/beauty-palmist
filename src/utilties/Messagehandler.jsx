import { toast } from "react-toastify";

export const error = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    theme: "dark",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const success = (messge) => {
  toast.success("🦄!" + messge, {
    position: "top-right",
    autoClose: 5000,
    theme: "dark",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
