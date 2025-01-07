import { FetchApi, QUERY_KEY } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryMyApt() {
  const result = useQuery({
    queryKey: [QUERY_KEY.APP, QUERY_KEY.MY_APT],
    queryFn: FetchApi.getMyApt,
  });
  return result;
}
