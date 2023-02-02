import CandidateType from "./candidate";
import axios, { AxiosResponse } from "axios";
import { candidatesList } from "./constants";

export const getCandidates = async () => {
  let candidatesList: CandidateType[] | null = [];
  await axios
    .get("http://localhost:3000/candidates_data")
    .then((res) => {
      candidatesList = res.data;
    })
    .catch((err) => console.log("cannot get candidatesList " + err));
  return candidatesList;
};
