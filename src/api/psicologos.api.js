/*Import dependencies*/
import axios from "./axios";

export const getPsicologos = () => axios.get('/psicologos')
