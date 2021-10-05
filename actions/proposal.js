import axios from "axios";
import { PROPOSAL_REQUEST } from "./types";

// PROPOSAL
export const proposalRequest = (data, slug) => (dispatch) => {
  data["name"] = data.fname + " " + data.lname
  data["sub_service_id"] = slug
  data["files"] = [];

  var form_data = new FormData();
  for (var key in data) {
    form_data.append(key, data[key]);
  }
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  axios.post("/api/proposal/request/", form_data, config).then((res) => {
    dispatch({
      type: PROPOSAL_REQUEST,
      payload: res.data,
    });
  });
};