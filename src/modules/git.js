import axios from 'axios'

var gitObj = {
    url: 'https://api.github.com/users/',
    user: null,
    getUser: () => {
        var self = this;
        return axios.get(gitObj.url + gitObj.user);
    },
    getRepo: user => {
        return axios.get(gitObj.url + user + 'repos');
    }
}

module.exports = gitObj;