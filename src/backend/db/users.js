import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "13d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    firstName: "Srinibas",
    lastName: "Khuntia",
    username: "srinibas khuntia",
    password: "srinibaskhuntia123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "",
    website: "",
    profile: "",
    bookmark: [],
    followers: [{
      _id: "14d3ef9d4-6a56-4dae-a155-3b4a7554242c",
      firstName: "Sriyasri",
      lastName: "Khuntia",
      username: "sriyasri khuntia",
      password: "sriyasrikhuntia123",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      image: "",
      website: "",
      profile: "",
      bookmark: [],
      followers: [],
      following: []
    },],
    following: [{
      _id: "11d3ef9d4-6a56-4dae-a155-3b4a7554242c",
      firstName: "adarsh",
      lastName: "ballika",
      username: "adarsh ballika",
      password: "adarshballika123",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      image: "",
      website: "",
      profile: "",
      bookmark: [],
      followers: [],
      following: []
    },]
  },
  {
    _id: "14d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    firstName: "Sriyasri",
    lastName: "Khuntia",
    username: "sriyasri khuntia",
    password: "sriyasrikhuntia123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "",
    website: "",
    profile: "",
    bookmark: [],
    followers: [],
    following: []
  },
  {
    _id: "11d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    firstName: "adarsh",
    lastName: "ballika",
    username: "adarsh ballika",
    password: "adarshballika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "",
    website: "",
    profile: "",
    bookmark: [],
    followers: [],
    following: []
  },
  {
    _id: "12d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    firstName: "subham",
    lastName: "soni",
    username: "subham soni",
    password: "subhamsoni123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "",
    website: "",
    profile: "",
    bookmark: [],
    followers: [],
    following: []
  },
]