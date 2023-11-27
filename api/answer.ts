import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from './axiosConfig/axiosDefaultConf'
import { AnswerType } from "@/types";

export function useAnswersList(qid: string, id?: string, single?: boolean) {
  return useQuery({
    queryKey: single ? ['answers-list', qid, id] : ['answers-list', qid],
    queryFn: async () => {
      try {
        const res = await axios({
          method: 'get',
          url: id ? `/answers/${id}` : `/answers?qid=${qid}&_sort=datetime&_order=desc`,
        })
        return res.data
      } catch (error) {
        throw error
      }
    },
    enabled: single ? !!qid && !!id : !!qid
  }
  );
}

export function useCreateAnswer() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: AnswerType) => {
      try {
        const res = await axios({
          method: 'post',
          url: '/answers',
          data,
        })
        return res.data

      } catch (error) {
        throw error
      }
    },
    onSuccess: (data) => queryClient.invalidateQueries({ queryKey: ['answers-list', data.qid] })
  });
}


export function useUpdateAnswer() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: Partial<AnswerType> & { id: string }) => {
      try {
        const res = await axios({
          method: 'patch',
          url: `/answers/${data.id}`,
          data,
        })
        return res.data

      } catch (error) {
        throw error
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['answers-list'] })
  });
}