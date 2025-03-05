// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { PostSearchData, PostSearchResponse } from './types.gen';
import { client as _heyApiClient } from './client.gen';

export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};

/**
 * 知识库搜索
 */
export const postSearch = <ThrowOnError extends boolean = false>(options?: Options<PostSearchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostSearchResponse, unknown, ThrowOnError>({
        url: '/search',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};