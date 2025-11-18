/*import axios*/
import axios from "./axios";

/*send mail contact form*/
export const sendMail  = (data) => axios.post("/sendContactMail", data)
