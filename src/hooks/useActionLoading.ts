import { useStores } from "./useStores";

export const useActionLoading = (...actions: string[]) => {
  const {
    loadingStore: { actionLoading },
  } = useStores();

  return actions.some((action) => !!actionLoading[action]);
};
