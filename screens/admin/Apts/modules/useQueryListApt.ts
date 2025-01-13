import { FetchApi, QUERY_KEY, useRefreshOnFocus } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryListApt() {
  const result = useQuery({
    queryKey: [QUERY_KEY.APP, QUERY_KEY.ADMIN, QUERY_KEY.APT],
    queryFn: FetchApi.getListApt,
  });
  useRefreshOnFocus(result.refetch);
  return result;
}
