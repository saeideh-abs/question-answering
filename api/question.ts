import axios from './axiosConfig/axiosDefaultConf'
import { useQuery } from "@tanstack/react-query";

export function useQuestionsList() {
  return useQuery({
    queryKey: ['questions-list'],
    queryFn: async () => {
      try {
        const res = await axios({
          method: 'get',
          url: '/questions',
        })
        return res.data
      } catch (error) {
        throw error
      }
    },
  }
  );
}