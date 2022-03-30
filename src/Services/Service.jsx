import axios from "axios";
import authHeader from "../services/auth-header";

const URL_QUES = "http://localhost:8080/qesbank/addques";
const URL_MQUES = "http://localhost:8080/mquestion/addmcq";

class Service {
  // for question bank

  getAll() {
    return axios.get(URL_QUES,{ headers: authHeader() });
  }

  createQues(quesbank) {
    return axios.post(URL_QUES, quesbank,{ headers: authHeader() });
  }

  getQuesById(quesbankId) {
    return axios.get(URL_QUES + "/" + quesbankId,{ headers: authHeader() });
  }

  //Updating all data in qustion bank
  updateques(quesbank, quesbankId) {
    return axios.put(URL_QUES + "/" + quesbankId, quesbank,{ headers: authHeader() });
  }

  deleteQns(quesbankId) {
    return axios.delete(URL_QUES + "/" + quesbankId,{ headers: authHeader() });
  }

// for mcq
getAllMcq(){
  return axios.get(URL_MQUES,{ headers: authHeader() });
}

createMques(mcq) {
  return axios.post(URL_MQUES, mcq,{ headers: authHeader() });
}


getMQuesById(mcqId) {
  return axios.get(URL_MQUES + "/" + mcqId,{ headers: authHeader() });
}

deleteMQns(mcqId) {
  return axios.delete(URL_MQUES + "/" + mcqId,{ headers: authHeader() });
}
}
export default new Service();
