import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */
import amanda from "../../images/Amanda.png"
import Brandon from "../../images/Brandon Moreno.png"
import Colby from "../../images/Colby Covington.png"
import izzy from "../../images/izz.png"
import Khabib from "../../images/Khabib.png"


export const posts = [
  {
    _id: "3d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    content:
      "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
    image: "",
    profileImg: amanda,
    userId: "14d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },

    username: "sriyasri khuntia",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "4d3ef9d4-6a56-4dae-a155-3b4a7554242c",
        username: "shubham soni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        children: []
      },
      {
        _id: "5d3ef9d4-6a56-4dae-a155-3b4a7554242c",
        username: "soham shah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        children: []
      },
    ],
  },
  {
    _id: "5d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    content:
      "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.",
    image: "",
    profileImg: Brandon,
    userId: "15d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },

    username: "ayush panda",

    comments: [
      {
        _id: "7d3ef9d4-6a56-4dae-a155-3b4a7554242c",
        username: "subham soni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        children: []
      },
      {
        _id: "8d3ef9d4-6a56-4dae-a155-3b4a7554242c",
        username: "soham shah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        children: []
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "6d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    content:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    image: "",
    profileImg: Colby,
    userId: "12d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "subham soni",

    comments: [
      {
        _id: "7d3ef9d4-6a56-4dae-a155-3b4a7554242c",
        username: "subham soni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        children: []
      },
      {
        _id: "8d3ef9d4-6a56-4dae-a155-3b4a7554242c",
        username: "soham shah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        children: []
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "7d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    content:
      "If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is",
    image: "",
    profileImg: izzy,
    userId: "16d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "bharat mohanty",

    comments: [
      {
        _id: "7d3ef9d4-6a56-4dae-a155-3b4a7554242c",
        username: "subham soni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        children: []
      },
      {
        _id: "8d3ef9d4-6a56-4dae-a155-3b4a7554242c",
        username: "soham shah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        children: []
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "8d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    content:
      "I m going to be gone one day, and I have to accept that tomorrow isn’t promised. Am I OK with how I’m living today? It’s the only thing I can help. If I didn’t have another one, what have I done with all my todays? Am I doing a good job?",
    image: "",
    profileImg: Khabib,
    userId: "17d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "adarsh mohanty",

    comments: [
      {
        _id: "7d3ef9d4-6a56-4dae-a155-3b4a7554242c",
        username: "subham soni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        children: []
      },
      {
        _id: "8d3ef9d4-6a56-4dae-a155-3b4a7554242c",
        username: "soham shah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        children: []
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },



];
