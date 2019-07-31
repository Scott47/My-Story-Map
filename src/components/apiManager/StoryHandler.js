// getAllExpand: {
//     value: function (resource, expandResource) {
//         return fetch(`${remoteURL}/${resource}?_expand=${expandResource}&_sort=timeStamp`).then(data => data.json())
//         }
//     },

//    delete: {
//        value: function (resource, id) {
//            return fetch(`${remoteURL}/${resource}/${id}`, {
//                method: "DELETE"
//            }).then(e => e.json())
//        }
//    },

//    put: {
//        value: function (resource, editData){
//            return fetch (`${remoteURL}/${resource}/${editData.id}`,{
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(editData)
//            }).then(e => e.json())
//        }
//    },

//    search: {
//        value: function (resource, id) {
//            return fetch(`${remoteURL}/${resource}/${id}`).then(data => data.json())
//        }
//    },