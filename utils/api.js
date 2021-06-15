
import axios from "axios";

const URL = "https://randomuser.me/"

export default {
    getEmployees: function() {
        return axios.get(URL);
    }
}