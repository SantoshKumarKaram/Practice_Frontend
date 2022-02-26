import axios from "axios";

const URL_QUES = "http://localhost:8080/practice/addques";

class Service {
  // for question bank

  getAll() {
    return axios.get(URL_QUES);
  }

  createQues(quesbank) {
    return axios.post(URL_QUES, quesbank);
  }

  getQuesById(quesbankId) {
    return axios.get(URL_QUES + "/" + quesbankId);
  }

  // updateVech(vech, VechId) {
  //     return axios.put(URL_VECH + '/' + VechId, vech);
  // }

  deleteQns(quesbankId) {
    return axios.delete(URL_QUES + "/" + quesbankId);
  }
}
export default new Service();
