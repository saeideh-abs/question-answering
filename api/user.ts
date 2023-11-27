import axios from './axiosConfig/axiosDefaultConf'
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const res = await axios({
          method: 'get',
          url: '/user',
        })
        return res.data
      } catch (error) {
        throw error
      }
    },
  }
  );
}