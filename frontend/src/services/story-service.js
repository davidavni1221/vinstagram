import { storageService } from './async-storage.service.js'
import {httpService } from './http.service'
import { utilService } from './util-service.js'
import users from '../data/users.json' assert { type: 'json'}
const story = [{
  "_id": "s101",
  "txt": "Best trip ever",
  "imgUrl": "http://some-img", //Can be an array if decide to support multiple imgs
  "createdAt": 123543452,
  "by": {
    "_id": "u101",
    "fullname": "Ulash Ulashi",
    "imgUrl": "http://some-img"
  },
  "loc": {
    "lat": 11.11,
    "lng": 22.22,
    "name": "Tel Aviv"
  },
  "comments": [
    {
      "id": "c1001",
      "by": {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      },
      "txt": "good one!",
      "createdAt":" new Date().toDateString()",
      "likedBy": [ // Optional
        {
          "_id": "u105",
          "fullname": "Bob",
          "imgUrl": "http://some-img"
        }
      ]
    },
    {
      "id": "c1002",
      "by": {
        "_id": "u106",
        "fullname": "Dob",
        "imgUrl": "http://some-img"
      },
      "txt": "not good!",
      "createdAt": "new Date().toDateString()",
    }
  ],
  "likedBy": [
    {
      "_id": "u105",
      "fullname": "Bob",
      "imgUrl": "http://some-img"
    },
    {
      "_id": "u106",
      "fullname": "Dob",
      "imgUrl": "http://some-img"
    }
  ],
  "tags":["fun", "kids"]
}]

const user = {
  "_id": "u100",
  "username": "johnny_deph",
  "password": "123",
  "fullname": "Johnny Deph",
  "imgUrl": "img/profile-user.jpg",
  "createdAt": new Date("2022-01-28").toDateString(),
  "following": [
    {
      "_id": "u101",
      "fullname": "Dan Cash",
      "imgUrl": "img/profile-1.jpg"
    }
  ],
  "followers": [
    {
      "_id": "u102",
      "fullname": "Shir Levi",
      "imgUrl": "img/profile-2.png"
    }
  ],

  "savedStoryIds": [
    {"_id":"12"}, {"_id":"123"}, {"_id":"1234"}
  
  
  ],
  "storys":[
    {
    "imgUrl":"img/user-photo-1.jpg",
    "_id":"12345"
    ,"txt":"haloo!", 
    "by":{
      "fullname": "Johnny Deph",
    "_id":"u10","imgUrl":"profile-user.jpg"
  }, "loc": {
     "lat": "11.11", "lng": "22.22","name": "Holewood"
    },
    "createdAt":new Date("2020-01-28").toDateString() ,
        "comments": [
          {
            "id": "c1003",
            "by": {
              "_id": "u103",
              "fullname": "Jen Lopez",
              "imgUrl": "img/profile-3.jpg"
            },
            "txt": "godd!!!",
            "createdAt":new Date("2022-01-28").toDateString()
          },
          {
            "id": "c1004",
            "by": {
              "_id": "u102",
              "fullname": "Shir Levi",
              "imgUrl": "img/profile-2.png"
            },
            "txt": "halo",
            "createdAt":new Date("2022-01-28").toDateString()
          }
        ],
        "likedBy": [
          {
            "_id": "u103",
            "fullname": "Jen Lopez",
            "imgUrl": "img/profile-3.jpg"
          },
          {
            "_id": "u102",
            "fullname": "Shir Levi",
            "imgUrl": "img/profile-2.png"
          }
        ],
      
    },
    {
      "imgUrl":"img/user-photo-2.jpg",
      "_id":utilService.makeId()
      },
      {
        "imgUrl":"img/user-photo-3.jpg",
        "_id":utilService.makeId()
        },
        {
          "imgUrl":"img/user-photo-4.jpg",
          "_id":utilService.makeId()
          },
          {
            "imgUrl":"img/user-photo-5.jpg",
            "_id":utilService.makeId()
            },
            {
              "imgUrl":"img/user-photo-6.jpg",
              "_id":utilService.makeId()
              },
              {
                "imgUrl":"img/user-photo-7.jpg",
                "_id":utilService.makeId()
                },
                {
                  "imgUrl":"img/user-photo-8.jpg",
                  "_id":utilService.makeId()
                  },
],
}



const emptyStory={
  _id:null,
  txt:'',
  imgUrl:'', //Can be an array if decide to support multiple imgs
  createdAt: new Date().toDateString(),
  by: {
    _id: "u100",
    fullname: "johnny deph",
    imgUrl: "img/profile-user.jpg"
  },
  loc: {
    lat: 11.11,
    lng: 22.22,
    name: ""
  },
 comments: [
    {
      id: "c1001",
      by: {
        _id: "u104",
        fullname: "eli cohen",
        imgUrl: "img/profile-4.jpg"
      },
      txt: "Good one!",
      // likedBy: [ // Optional
        // {
        //   _id: "u105",
        //   fullname: "Bob",
        //   imgUrl: "http://some-img"
        // }
      // ]
    },
    {
      id: "c1002",
      by: {
        _id: "u102",
        fullname: "shir levi",
        imgUrl: "img/profile-2.png"
      },
      txt: "Wow enjoy!",
    }
  ],
  likedBy: [
    {
      _id: "u101",
      fullname: "Dan Cash",
      imgUrl: "img/profile-1.jpg"
    },
    {
      _id: "u102",
      fullname: "shir levy",
      imgUrl: "img/profile-2.png"
    }
  ],
  tags:["fun", "kids"]
}



// const KEY = 'story'
const KEY = 'story_db'
const USERS_KEY = 'users_db'

_createUsers()
_createStorys()

export const storyService = {
  query,
  getById,
  remove,
  save,
  getEmptyStory,
  getUser,
  getUsers,
  saveToUser,
  saveNewfollowing,
}

function query() {
  // console.log("story-service");
  // return httpService.get('story')

  return storageService.query(KEY)
}

function getById(storyId) {
  // console.log(storyId);
    // return httpService.get(`story/${storyId}`)

  return storageService.get(KEY, storyId)
}

function saveToUser(storyId){
user.savedStoryIds.push({_id:storyId})
}

async function saveNewfollowing(userId){
  const allUSers = await getUsers()

  user.following.push({_id:userId})
  const idx = allUSers.findIndex((user)=>
  user._id === userId
  )
  console.log(idx);
  if(idx !== -1) {
    allUSers[idx].isFollowed=true
  }
  return storageService.put(USERS_KEY, allUSers[idx]).then(()=>{
    return allUSers
  })
}

function remove(storyId) {
  return storageService.remove(KEY, storyId)
}

function save(story,newComment) {
  var currComment=JSON.parse(JSON.stringify(story))
  if (currComment._id) {
    if(newComment._id&&newComment.remove===null)currComment.likedBy.push(newComment)
    else if(newComment.remove===true)currComment.likedBy.splice(currComment.likedBy.length-1,1)
    else currComment.comments.push(newComment)
   return storageService.put(KEY, currComment)}
  return storageService.post(KEY, currComment)
}

function getUsers(){
  return storageService.query(USERS_KEY)
}

function getUser(){
return user
}

function getEmptyStory() {
  return emptyStory
}

function _createUsers() {
  let usersDB = utilService.loadFromStorage(USERS_KEY)
  console.log(usersDB);
  if(!usersDB  || !usersDB.length) {
    usersDB = users
  }
  utilService.saveToStorage(USERS_KEY, usersDB)
}

function _createStorys() {
  let storys = utilService.loadFromStorage(KEY)
  if (!storys || !storys.length) {
    storys = [
      { _id: utilService.makeId(),txt:'Best trip ever!',saved:false, by:{fullname: 'Dan Cash',_id:'u101',imgUrl:'img/profile-1.jpg'}, loc: { lat: 11.11, lng: 22.22,name: "Laguna Bacalar"},  imgUrl:'img/7.jpg',createdAt:new Date("2022-01-28").toDateString() ,
        comments: [
          {
            id: "c1003",
            by: {
              _id: "u103",
              fullname: "Jen Lopez",
              imgUrl: 'img/profile-3.jpg'
            },
            txt: "Have funn!!!",
            createdAt:new Date("2022-01-28").toDateString()
          },
          {
            id: "c1004",
            by: {
              _id: "u102",
              fullname: "Shir Levi",
              imgUrl: "img/profile-2.png"
            },
            txt: "Awsome mann!",
            createdAt:new Date("2022-01-28").toDateString()
          }
        ],
        likedBy: [
          {
            _id: "u103",
            fullname: "Jen Lopez",
            imgUrl: "img/profile-3.jpg"
          },
          {
            _id: "u102",
            fullname: "Shir Levi",
            imgUrl: "img/profile-2.png"
          }
        ],
      },
      { _id: utilService.makeId(),txt:'Look at this viwe!', saved:false,by:{fullname: 'Shir Levi',_id:"u102",imgUrl:'img/profile-2.png'},loc: { lat: 11.11, lng: 22.22,name: "Georgia mounting"},imgUrl:'img/1.jpg',createdAt:new Date("2020-08-9").toDateString(), 
      comments: [
          {
            id: "c1005",
            by: {
              _id: "u101",
              fullname: "Dan Cash",
              imgUrl: "img/profile-1.jpg"
            },
            txt: "I can't belive u there!!",
            createdaAt: new Date("2020-08-9").toDateString(),

          },
          {
            id: "c1006",
            by: {
              _id: "u105",
              fullname: "Sapir white",
              imgUrl: "img/profile-5.jpg"
            },
            txt: "yeessss!!",
            createdaAt: new Date("2020-08-9").toDateString(),
          }
        ], likedBy: [
          {
            _id: "u101",
            fullname: "Dan Cash",
            imgUrl: "img/profile-1.jpg"
          },
          {
            _id: "u105",
            fullname: "Sapir white",
            imgUrl: "img/profile-5.jpg"
          }
        ], },
      { _id: "12",txt:'Selfi with frindes',saved:true, by:{fullname: 'Jen Lopez',_id:'u103',imgUrl:'img/profile-3.jpg'},loc: { lat: 11.11, lng: 22.22,name: "Jerusalem"} , imgUrl:'img/9.jpg',createdAt:new Date("2018-06-2").toDateString(), 
      comments: [
          {
            id: "c1007",
            by: {
              _id: "u104",
              fullname: "Eli Cohen",
              imgUrl: "img/profile-4.jpg"
            },
            txt: "Looks goodd!",
            createdAt:new Date("2018-06-2").toDateString()
          },
          {
            id: "c1008",
            by: {
              _id: "u105",
              fullname: "Sapir White",
              imgUrl: "img/profile-5.jpg"
            },
            txt: "Miss you my frind",
            createdAt:new Date("2018-06-2").toDateString()
          }
        ], likedBy: [
          {
            _id: "u104",
            fullname: "Eli Cohen",
            imgUrl: "img/profile-4.jpg"
          },
          {
            _id: "u105",
            fullname: "Sapir White",
            imgUrl: "img/profile-5.jpg"
          }
        ], },
      { _id: "123",txt:'My Shakshuka',saved:true, by:{fullname: 'Eli Cohen',_id:"u104",imgUrl:'img/profile-4.jpg'},loc: { lat: 11.11, lng: 22.22,name: "At home"} , imgUrl:'img/8.jpg' ,createdAt:new Date("2017-11-17").toDateString(),
       comments: [
          {
            id: "c1009",
            by: {
              _id: "u102",
              fullname: "Shir Levi",
              imgUrl: "img/profile-2.png"
            },
            txt: "Looks delishioss",
            createdAt:new Date("2017-11-17").toDateString()
          },
          {
            id: "c1010",
            by: {
              _id: "u103",
              fullname: "Jen Lopez",
              imgUrl: "img/profile-3.jpg"
            },
            txt: "God iammm hungry now",
            createdAt:new Date("2017-11-17").toDateString()
          }
        ], likedBy: [
          {
            _id: "u102",
            fullname: "Shir Levi",
            imgUrl: "img/profile-2.png"
          },
          {
            _id: "u103",
            fullname: "Jen Lopez",
            imgUrl: "img/profile-3.jpg"
          }
        ],},
      { _id: "1234",txt:'Living the dream!!!',saved:true, by:{fullname: 'Sapir White',_id:"u105",imgUrl:'img/profile-5.jpg'},loc: { lat: 11.11, lng: 22.22,name: "Tel Aviv Beach"} , imgUrl:'img/6.jpg' ,createdAt:new Date("2015-03-25").toDateString(),
       comments: [
          {
            id: "c1011",
            by: {
              _id: "u101",
              fullname: "Dan Cash",
              imgUrl: "img/profile-1.jpg"
            },
            txt: "A realy good dream!",
            createdAt:new Date("2015-03-25").toDateString()
          },
          {
            id: "c1012",
            by: {
              _id: "u104",
              fullname: "Eli Cohen",
              imgUrl: "img/profile-4.jpg"
            },
            txt: "Enjoy for us also ah??!",
            createdAt:new Date("2015-03-25").toDateString()
          }
        ], likedBy: [
          {
            _id: "u101",
            fullname: "Dan Cash",
            imgUrl: "img/profile-1.jpg"
          },
          {
            _id: "u104",
            fullname: "Eli Cohen",
            imgUrl: "img/profile-4.jpg"
          }
        ],},
        {
          "_id":"12345",
          "imgUrl":"img/user-photo-1.jpg",
          "txt":"haloo!", 
          saved:true,
          "by":{
            "fullname": "Johnny Deph",
          "_id":"u100",
          "imgUrl":"img/profile-user.jpg"
        }, "loc": {
           "lat": "11.11", 
           "lng": "22.22",
           "name": "Holewood"
          },
          "createdAt":new Date("2020-01-28").toDateString() ,
              "comments": [
                {
                  "id": "c1003",
                  "by": {
                    "_id": "u103",
                    "fullname": "Jen Lopez",
                    "imgUrl": "img/profile-3.jpg"
                  },
                  "txt": "godd!!!",
                  "createdAt":new Date("2022-01-28").toDateString()
                },
                {
                  "id": "c1004",
                  "by": {
                    "_id": "u102",
                    "fullname": "Shir Levi",
                    "imgUrl": "img/profile-2.png"
                  },
                  "txt": "halo",
                  "createdAt":new Date("2022-01-28").toDateString()
                }
              ],
              "likedBy": [
                {
                  "_id": "u103",
                  "fullname": "Jen Lopez",
                  "imgUrl": "img/profile-3.jpg"
                },
                {
                  "_id": "u102",
                  "fullname": "Shir Levi",
                  "imgUrl": "img/profile-2.png"
                }
              ],
            
          },
    ]
    utilService.saveToStorage(KEY, storys)
  }
  return storys
}




function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
var aDay = 24*60*60*1000;
// console.log(timeSince(new Date(Date.now()-aDay)));
// console.log(timeSince(new Date(Date.now()-aDay*2)));

