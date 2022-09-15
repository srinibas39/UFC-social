import { Msg } from "../components/Msg/Msg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const handleToast = (msg) => {
    toast.success(<Msg msg={msg} />, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });
}

export const handleToastWarning = (msg) => {
    toast.warning(<Msg msg={msg} />, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });
}

export const handleToastError = (msg) => {
    toast.error(<Msg msg={msg} />, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });
}