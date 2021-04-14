import axios from 'axios';

export default {

    getUsers: function () {
        console.log('getUsers Runs');
        return axios.get(
            "https://randomuser.me/api/?results=25&nat=us"
        );
    }

}