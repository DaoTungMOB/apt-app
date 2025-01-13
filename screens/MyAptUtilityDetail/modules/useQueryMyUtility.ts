import { FetchApi, QUERY_KEY, useRefreshOnFocus } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryMyUtility(utility_id: string) {
  const result = useQuery({
    queryKey: [QUERY_KEY.APP, QUERY_KEY.USER, QUERY_KEY.UTILITY, utility_id],
    queryFn: () => FetchApi.getMyUtility(utility_id),
  });
  useRefreshOnFocus(result.refetch);
  return result;
}
