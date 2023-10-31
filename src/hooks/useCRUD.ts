import { useQuery, useMutation, useQueryClient } from "react-query";
import createCRUDOperations from "@/utils/axiosCRUD";

export const useCRUD = <T extends { id: number }>(endpoint: string) => {
  const { createData, readData, updateData, deleteData } =
    createCRUDOperations<T>(endpoint);
  const queryClient = useQueryClient();

  const {
    data: dataList,
    error: readError,
    isLoading: readLoading,
  } = useQuery(`${endpoint}List`, readData);

  const createMutation = useMutation(createData, {
    onSuccess: () => {
      queryClient.invalidateQueries(`${endpoint}List`);
    },
  });

  const updateMutation = useMutation(updateData, {
    onSuccess: () => {
      queryClient.invalidateQueries(`${endpoint}List`);
    },
  });

  const deleteMutation = useMutation(deleteData, {
    onSuccess: () => {
      queryClient.invalidateQueries(`${endpoint}List`);
    },
  });

  return {
    dataList,
    readError,
    readLoading,
    createMutation,
    updateMutation,
    deleteMutation,
  };
};
