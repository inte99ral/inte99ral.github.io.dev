// API & Library
import { AxiosApi } from 'api/axios';

// Init
const axios = AxiosApi.getInstance().getAxios();

export default {
  getServerVersion: async () => {
    try {
      const res = await axios.get('', {
        params: { path: 'server' },
      });
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
