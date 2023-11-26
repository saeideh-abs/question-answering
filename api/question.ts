import axios from './axiosConfig/axiosDefaultConf'
import { useQuery } from "@tanstack/react-query";

export function useQuestionsList() {
  return useQuery({
    queryKey: ['questions-list'],
    queryFn: async () => {
      // const res = await fetch('http://localhost:5000/questions')
      // if (!res.ok) {
      //   throw new Error('Network response was not ok')
      // }
      // return res.json()
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