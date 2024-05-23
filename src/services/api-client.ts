import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '9204e7d6be114a9f9eedfa794a39fd5d',
  },
});
