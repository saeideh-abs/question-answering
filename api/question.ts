import { QuestionType } from '@/types';
import axios from './axiosConfig/axiosDefaultConf'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export function useQuestionsList(id?: string) {
  return useQuery({
    queryKey: id ? ['questions-list', id] : ['questions-list'],
    queryFn: async () => {
      try {
        const res = await axios({
          method: 'get',
          url: id ? `/questions/${id}` : `/questions?_sort=datetime&_order=desc`,
        })
        return res.data
      } catch (error) {
        throw error
      }
    },
  }
  );
}


export function useCreateQuestion() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: QuestionType) => {
      try {
        const res = await axios({
          method: 'post',
          url: '/questions',
          data,
        })
        return res.data

      } catch (error) {
        throw error
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['questions-list'] })
  });
}

export function useUpdateQuestion() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: Partial<QuestionType> & { id: string }) => {
      try {
        const res = await axios({
          method: 'patch',
          url: `/questions/${data.id}`,
          data,
        })
        return res.data

      } catch (error) {
        throw error
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['questions-list'] })
  });
}