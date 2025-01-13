import { FetchApi, QUERY_KEY } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export function useQueryContact() {
  const result = useQuery({
    queryKey: [QUERY_KEY.APP, QUERY_KEY.ADMIN, QUERY_KEY.CONTACT],
    queryFn: FetchApi.getContacts,
  });

  return result;
}
