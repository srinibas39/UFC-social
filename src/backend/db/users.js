import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

 import amanda from "../../images/Amanda.png"
 import Brandon from "../../images/Brandon Moreno.png"
 import Colby from "../../images/Colby Covington.png"
 import izzy from "../../images/izz.png"
 import Khabib from "../../images/Khabib.png"
 import Conor from "../../images/Conor.png"

export const users = [
  {
    _id: "13d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    firstName: "Srinibas",
    lastName: "Khuntia",
    username: "srinibas khuntia",
    password: "srinibaskhuntia123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: Conor,
    website: "",
    profile: "",
    bookmark: [],
    followers: []
  },
  {
    _id: "14d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    firstName: "Sriyasri",
    lastName: "Khuntia",
    username: "sriyasri khuntia",
    password: "sriyasrikhuntia123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: amanda,
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
    image: Colby,
    website: "",
    profile: "",
    bookmark: [],
    followers: [],
    following: []
  },
  {
    _id: "15d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    firstName: "ayush",
    lastName: "panda",
    username: "ayush panda",
    password: "ayushpanda123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: Brandon,
    website: "",
    profile: "",
    bookmark: [],
    followers: [],
    following: []
  },
  {
    _id: "16d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    firstName: "bharat",
    lastName: "mohanty",
    username: "bharat mohanty",
    password: "bharatmohanty123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: izzy,
    website: "",
    profile: "",
    bookmark: [],
    followers: [],
    following: []
  },
  {
    _id: "17d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    firstName: "adarsh",
    lastName: "mohanty",
    username: "adarsh mohanty",
    password: "adarshmohanty123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: Khabib,
    website: "",
    profile: "",
    bookmark: [],
    followers: [],
    following: []
  },

]