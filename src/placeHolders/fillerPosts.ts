
const fillerPosts : post[] = [
  
  {
    user: {
      username: "meow"
    },
    content: "hello there",
    likes: 2,
    comments: [
      {
        user: {
          username: "joe rogan"
        },
        content: "wow",
        likes: 3,
        subComments: []
      },{
        user: {
          username: "joe biden"
        },
        content: "cool",
        likes: 1,
        subComments: []
      },
    ]
  },
  {
    "user": {
      "username": "user1"
    },
    "content": "First post!",
    "likes": 15,
    "comments": [
      {
        "user": {
          "username": "commenter1"
        },
        "content": "Great!",
        "likes": 3,
        "subComments": []
      },
      {
        "user": {
          "username": "commenter2"
        },
        "content": "Nice one!",
        "likes": 5,
        "subComments": []
      }
    ]
  },
  {
    "user": {
      "username": "user2"
    },
    "content": "Hello world!",
    "likes": 20,
    "comments": [
      {
        "user": {
          "username": "commenter3"
        },
        "content": "I agree!",
        "likes": 2,
        "subComments": []
      }
    ]
  },
  {
    "user": {
      "username": "user3"
    },
    "content": "Testing post.",
    "likes": 8,
    "comments": []
  },
  {
    "user": {
      "username": "user4"
    },
    "content": "Random thoughts!",
    "likes": 12,
    "comments": [
      {
        "user": {
          "username": "commenter4"
        },
        "content": "Interesting!",
        "likes": 4,
        "subComments": []
      },
      {
        "user": {
          "username": "commenter5"
        },
        "content": "Great insights!",
        "likes": 6,
        "subComments": []
      }
    ]
  },
  {
    "user": {
      "username": "user5"
    },
    "content": "Happy Friday!",
    "likes": 25,
    "comments": []
  }


] 
export default fillerPosts;
 