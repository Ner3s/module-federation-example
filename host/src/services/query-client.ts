import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      onError: err => {
        console.warn(err);
      },
    },
  },
});

export { queryClient };
