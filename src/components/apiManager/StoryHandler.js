import ApiHandler from "./ApiHandler"

export default Object.create(ApiHandler, {
  get: {
     value: function (id) {
        return  ApiHandler.get("stories", id)
      }
  },
getAll: {
    value: function (){
        return ApiHandler.all("stories")
    }
},
getUserStories: {
    value: function (userId) {
        return ApiHandler.getWithQuery("stories", `userId=${userId}`)
    }
},
getStoryElements: {
    value: function (storyId) {
        return ApiHandler.getWithQuery("storyelements", `storyId=${storyId}&_sort=orderSequence`)
    }
},
postNewStory: {
    value: function (newStory) {
        return ApiHandler.post("stories", newStory)
    }
    }

})