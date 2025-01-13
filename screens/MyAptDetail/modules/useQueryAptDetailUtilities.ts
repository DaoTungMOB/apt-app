import { FetchApi, QUERY_KEY } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryAptDetailUtilities(apt_id: string) {
  const result = useQuery({
    queryKey: [QUERY_KEY.UTILITY, apt_id],
    queryFn: () => FetchApi.getMyAptUtility(apt_id),
  });
  return result;
}
