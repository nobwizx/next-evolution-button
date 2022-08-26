import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const buttonStateValues = {
  default: {
    text: "SUBMIT",
    class: "button button-default",
    icon: faAngleRight,
    disabled: false,
  },
  loading: {
    text: "SUBMIT",
    class: "button button-loading",
    icon: faAngleRight,
    disabled: true,
  },
  success: {
    text: "SUCCESS",
    class: "button button-success",
    icon: faCheck,
    disabled: false,
  },
  error: {
    text: "ERROR",
    class: "button button-error",
    icon: faXmark,
    disabled: false,
  },
};
