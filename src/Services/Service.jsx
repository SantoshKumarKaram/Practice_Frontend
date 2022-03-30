import axios from "axios";

const URL_QUES = "http://localhost:8080/qesbank/addques";
const URL_MQUES = "http://localhost:8080/mquestion/addmcq";

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

  //Updating all data in qustion bank
  updateques(quesbank, quesbankId) {
    return axios.put(URL_QUES + "/" + quesbankId, quesbank);
  }

  deleteQns(quesbankId) {
    return axios.delete(URL_QUES + "/" + quesbankId);
  }

// for mcq
getAllMcq(){
  return axios.get(URL_MQUES);
}

createMques(mcq) {
  return axios.post(URL_MQUES, mcq);
}


getMQuesById(mcqId) {
  return axios.get(URL_MQUES + "/" + mcqId);
}

deleteMQns(mcqId) {
  return axios.delete(URL_MQUES + "/" + mcqId);
}
}
export default new Service();
