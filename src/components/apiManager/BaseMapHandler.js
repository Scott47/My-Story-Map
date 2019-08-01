import ApiHandler from "./ApiHandler"

export default Object.create(ApiHandler, {
  get: {
     value: function (id) {
        return  ApiHandler.get("basemaps", id)
      }
  },
getAll: {
    value: function (){
        return ApiHandler.all("basemaps")
    }
}
})