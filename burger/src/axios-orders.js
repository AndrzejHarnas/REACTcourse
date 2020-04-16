import axios from 'axios';

const instance = axios.create({

  baseURL:'https://reacat-burger.firebaseio.com/'

});

export default instance;
