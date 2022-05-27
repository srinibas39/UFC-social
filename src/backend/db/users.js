import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Srinibas",
    lastName: "Khuntia",
    username: "srinibas khuntia",
    password: "srinibaskhuntia123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    
  },
];
