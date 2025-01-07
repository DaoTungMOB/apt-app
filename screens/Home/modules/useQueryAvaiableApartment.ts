import { FetchApi, QUERY_KEY } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryAvaiableApartment() {
  const result = useQuery({
    queryKey: [QUERY_KEY.APP, QUERY_KEY.AVIABLE_APARTMENT],
    queryFn: FetchApi.getAvaiableApartment,
  });
  return result;
}
