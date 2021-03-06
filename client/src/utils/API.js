import axios from "axios";

export default {
  getTimes: function(routeid, dir) {
    return axios.get("/api/trains/" + routeid + "/" + dir);
  },

  postLastRoute: function(routeid, dir) {
    return axios.post("/api/trains/" + routeid + "/" + dir);
  }
};
