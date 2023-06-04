// API & Library
import { AxiosApi } from 'api/axios';

// Init
const axios = AxiosApi.getInstance().getAxios();

export default {
  getTestData: async (testId: string, auth: string) => {
    try {
      const res = await axios.get('', {
        headers: { Authorization: `Bearer ${auth}` },
        params: { path: 'test', testId: 1234 },
      });
      console.log('[get test data]');
      console.log(res);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
