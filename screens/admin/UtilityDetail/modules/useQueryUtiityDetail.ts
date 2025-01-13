import { FetchApi, QUERY_KEY, useRefreshOnFocus } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryUtiityDetail(utility_id: string) {
  const result = useQuery({
    queryKey: [QUERY_KEY.APP, QUERY_KEY.ADMIN, QUERY_KEY.UTILITY, utility_id],
    queryFn: () => FetchApi.getUtility(utility_id),
  });
  useRefreshOnFocus(result.refetch);
  return result;
}
