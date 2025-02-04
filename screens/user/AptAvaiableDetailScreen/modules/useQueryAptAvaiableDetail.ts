import { FetchApi, QUERY_KEY } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryAptAvaiableDetail(apt_id: string) {
  const result = useQuery({
    queryKey: [QUERY_KEY.APP, QUERY_KEY.AVIABLE_APARTMENT, apt_id],
    queryFn: () => FetchApi.getAvaiableApartmentDetail(apt_id),
  });
  return result
}
