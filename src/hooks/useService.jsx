import { useQuery } from "@tanstack/react-query";
import useAxiosPubic from "./useAxiosPubic";
import { useParams } from "next/navigation";



const useService = () => {
  const {id} = useParams();
  // console.log(id);
  const axiosPublic = useAxiosPubic();
  const {
    data: service = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["service", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/services/${id}`);
      return res.data;
    },
  });
  
  return [service, isLoading, isError, error];
};

export default useService;
