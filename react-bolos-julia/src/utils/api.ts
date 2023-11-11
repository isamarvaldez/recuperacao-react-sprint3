//axios es para chamar o pacote dele
import axios from "axios";

//configurando a base de axios
const api= axios.create({
    baseURL: "http://localhost:3000/"
})

export default api;

