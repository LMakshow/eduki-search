import type { AxiosError } from 'axios';
import { createInfiniteQuery } from 'react-query-kit';

import { client } from '../common';
import type { EdukiElasticRequest, Material } from './types';

type Response = Material[];
type Variables = EdukiElasticRequest;

const PAGE_LIMIT = 20;

export const useGetItems = createInfiniteQuery<Response, Variables, AxiosError>(
  {
    queryKey: ['elastic'],
    fetcher: (variables, { pageParam = 1 }) => {
      return client
        .get(
          `elastic?limit=${PAGE_LIMIT}&world=${variables.world}&p=${pageParam}&q=${variables.q}`
        )
        .then((response) => {
          return response.data.data.items.materials;
        });
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  }
);
