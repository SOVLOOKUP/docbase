// This file is auto-generated by @hey-api/openapi-ts

export type SearchResult = {
    hash: string;
    paths: Array<string>;
    text: string;
};

export type SearchResults = Array<SearchResult>;

export type SearchOptions = {
    /**
     * 分页偏移量
     */
    offset?: number;
    /**
     * 每页限制数量
     */
    limit?: number;
    /**
     * 需要高亮的属性数组
     */
    attributesToHighlight?: Array<string>;
    /**
     * 高亮前缀标签
     */
    highlightPreTag?: string;
    /**
     * 高亮后缀标签
     */
    highlightPostTag?: string;
    /**
     * 需要裁剪的属性数组
     */
    attributesToCrop?: Array<string>;
    /**
     * 裁剪长度
     */
    cropLength?: number;
    /**
     * 裁剪标记
     */
    cropMarker?: string;
    /**
     * 过滤条件
     */
    filter?: string | Array<string | Array<string>>;
    /**
     * 排序条件数组
     */
    sort?: Array<string>;
    /**
     * 分面搜索字段数组
     */
    facets?: Array<string>;
    /**
     * 需要检索的属性数组
     */
    attributesToRetrieve?: Array<string>;
    /**
     * 是否显示匹配位置
     */
    showMatchesPosition?: boolean;
    /**
     * 匹配策略
     */
    matchingStrategy?: 'all' | 'last' | 'frequency';
    /**
     * 每页命中数
     */
    hitsPerPage?: number;
    /**
     * 页码
     */
    page?: number;
    /**
     * 分面名称
     */
    facetName?: string;
    /**
     * 分面查询条件
     */
    facetQuery?: string;
    /**
     * 向量数组
     */
    vector?: Array<number> | null;
    /**
     * 是否显示排名分数
     */
    showRankingScore?: boolean;
    /**
     * 是否显示排名分数详情
     */
    showRankingScoreDetails?: boolean;
    /**
     * 排名分数阈值
     */
    rankingScoreThreshold?: number;
    /**
     * 搜索字段数组
     */
    attributesToSearchOn?: Array<string> | null;
    /**
     * 去重字段
     */
    distinct?: string;
    /**
     * 是否检索向量
     */
    retrieveVectors?: boolean;
    /**
     * 语言区域数组
     */
    locales?: Array<string>;
};

export type SearchParam = {
    q: string;
    opts?: SearchOptions;
};

export type DifyKnowledgeResponseRecordSchema = {
    text: string;
    score: number;
    title: string;
    metadata?: {
        paths: Array<string>;
    };
};

export type DifyKnowledgeRequestSchema = {
    knowledge_id: string;
    query: string;
    retrieval_setting: {
        top_k: number;
        score_threshold: number;
    };
};

export type PostSearchData = {
    body?: SearchParam;
    path?: never;
    query?: never;
    url: '/search';
};

export type PostSearchResponses = {
    /**
     * Search results
     */
    200: SearchResults;
};

export type PostSearchResponse = PostSearchResponses[keyof PostSearchResponses];

export type PostRetrievalData = {
    body?: DifyKnowledgeRequestSchema;
    path?: never;
    query?: never;
    url: '/retrieval';
};

export type PostRetrievalErrors = {
    /**
     * AccessDeniedException
     */
    403: {
        error_code: '1002';
        error_msg: string;
    };
    /**
     * KnowledgeDoesNotExist
     */
    404: {
        error_code: '2001';
        error_msg: string;
    };
};

export type PostRetrievalError = PostRetrievalErrors[keyof PostRetrievalErrors];

export type PostRetrievalResponses = {
    /**
     * Search results
     */
    200: {
        records: Array<DifyKnowledgeResponseRecordSchema>;
    };
};

export type PostRetrievalResponse = PostRetrievalResponses[keyof PostRetrievalResponses];

export type DeletePluginData = {
    body?: never;
    path?: never;
    query: {
        name: string;
    };
    url: '/plugin';
};

export type DeletePluginResponses = {
    /**
     * Whether the plugin was successfully deleted
     */
    200: {
        deleted: boolean;
        msg?: string;
    };
};

export type DeletePluginResponse = DeletePluginResponses[keyof DeletePluginResponses];

export type GetPluginData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/plugin';
};

export type GetPluginResponses = {
    /**
     * List of plugins
     */
    200: {
        docLoaders: Array<{
            type: 'DocLoader';
            exts: Array<string>;
            name: string;
            version: string;
            displayName?: string;
            author?: string;
            description?: string;
            repository?: string;
            homepage?: string;
            icon?: string;
        }>;
        docSplitter: {
            type: 'DocSplitter';
            name: string;
            version: string;
            displayName?: string;
            author?: string;
            description?: string;
            repository?: string;
            homepage?: string;
            icon?: string;
        };
    };
};

export type GetPluginResponse = GetPluginResponses[keyof GetPluginResponses];

export type PutPluginData = {
    body?: unknown;
    path?: never;
    query: {
        name: string;
    };
    url: '/plugin';
};

export type PutPluginResponses = {
    /**
     * Whether the plugin was successfully installed
     */
    200: {
        installed: boolean;
        msg?: string;
    };
};

export type PutPluginResponse = PutPluginResponses[keyof PutPluginResponses];

export type GetPluginExtData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/plugin/ext';
};

export type GetPluginExtResponses = {
    /**
     * Plugin-extension mapping
     */
    200: {
        [key: string]: string;
    };
};

export type GetPluginExtResponse = GetPluginExtResponses[keyof GetPluginExtResponses];

export type PatchPluginExtData = {
    body?: never;
    path?: never;
    query: {
        ext: string;
        docLoaderName?: string;
    };
    url: '/plugin/ext';
};

export type PatchPluginExtResponses = {
    /**
     * Whether the mapping was successfully modified
     */
    200: {
        modified: boolean;
    };
};

export type PatchPluginExtResponse = PatchPluginExtResponses[keyof PatchPluginExtResponses];

export type ClientOptions = {
    baseUrl: `${string}://client` | (string & {});
};