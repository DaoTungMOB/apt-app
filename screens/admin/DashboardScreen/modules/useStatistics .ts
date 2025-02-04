import { FetchApi, QUERY_KEY, useRefreshOnFocus } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const getStatistics = async () => {
  const [signedStatistic, paidStatistic] = await Promise.all([
    FetchApi.getMonthlySignedStatistics(),
    FetchApi.getMonthlyPaidInvoices(),
  ]);
  return { signedStatistic, paidStatistic };
};

export function useStatistics() {
  const result = useQuery({
    queryKey: [QUERY_KEY.APP, QUERY_KEY.STATISTICS],
    queryFn: getStatistics,
  });
  useRefreshOnFocus(result.refetch);
  return result;
}
