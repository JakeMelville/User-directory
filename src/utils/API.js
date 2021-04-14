import axios from 'axios';

function getUsers() {
        return axios.get("https://randomuser.me/api/?results=25&nat=us");
    };

export default getUsers;