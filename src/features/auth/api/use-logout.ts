import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<(typeof client.api.auth.logout)["$post"]>;

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.auth.logout["$post"]();

      if (!response.ok) {
        throw new Error("Failed to logout");
      }

      return await response.json();
    },
    onSuccess: () => {
      router.refresh();
      toast.success("Logged out successfully");
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error("Failed to log out: " + error.message);
    },
  });

  return mutation;
};
