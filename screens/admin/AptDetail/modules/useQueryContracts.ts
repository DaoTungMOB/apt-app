import { FetchApi, QUERY_KEY, useRefreshOnFocus } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryContracts(apt_id: string) {
  const result = useQuery({
    queryKey: [QUERY_KEY.APP, QUERY_KEY.ADMIN, QUERY_KEY.CONTRACT, apt_id],
    queryFn: () => FetchApi.getContractApt(apt_id),
  });

  useRefreshOnFocus(result.refetch);
  return result;
}
