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
getStoryElementId: {
    value: function (id) {
        return ApiHandler.get("storyelements", id)
    }
},
postStoryElementId: {
    value: function (newElement) {
        return ApiHandler.post("storyelements", newElement)
    }
},
postNewStory: {
    value: function (newStory) {
        return ApiHandler.post("stories", newStory)
    }
},
putStoryElement: {
    value: function (storyelement) {
        return ApiHandler.put("storyelements", storyelement)
    }
},
deleteStory: {
    value: function(id){
        return ApiHandler.delete("stories", id)
    }
},
postMapItems: {
    value: function (graphics) {
        return ApiHandler.post("mapItems", graphics)
    }
},
getMapItems: {
    value: function (storyId) {
        return ApiHandler.getWithQuery("mapItems", `storyId=${storyId}`)
    }
}
})