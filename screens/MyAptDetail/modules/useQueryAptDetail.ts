import { FetchApi, QUERY_KEY } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryAptDetail(apt_id: string) {
  const result = useQuery({
    queryKey: [QUERY_KEY.APT, apt_id],
    queryFn: () => FetchApi.getMyAptDetail(apt_id),
  });
  return result;
}
