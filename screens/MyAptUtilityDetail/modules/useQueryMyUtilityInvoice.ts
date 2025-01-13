import { FetchApi, QUERY_KEY, useRefreshOnFocus } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryMyUtilityInvoice(utility_id: string) {
  const result = useQuery({
    queryKey: [QUERY_KEY.APP, QUERY_KEY.USER, QUERY_KEY.INVOICE, utility_id],
    queryFn: () => FetchApi.getMyutilityInvoice(utility_id),
  });
  useRefreshOnFocus(result.refetch);
  return result;
}
