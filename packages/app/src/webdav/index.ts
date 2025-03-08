import { Handler } from "hono";

/**
 * Proxy the request to a specific URL.
 *
 * @param {string} [proxy_url=""] - The URL to proxy the request to.
 * @returns {Handler} The handler function for Hono.
 */
export default function basicProxy(proxy_url: string = ""): Handler {
  return async (c) => {
    // 获取原始请求的方法、URL和头部信息
    const method = c.req.method;
    const url = new URL(c.req.url);
    const headers = new Headers(c.req.header());

    // 获取请求基本路径
    // 使用字符串方法直接比较前缀，避免split和join操作
    let base = "";
    const pathLen = Math.min(c.req.path.length, c.req.routePath.length);
    for (let i = 0; i < pathLen; i++) {
      if (c.req.path[i] === c.req.routePath[i]) {
        base += c.req.path[i];
      } else {
        break;
      }
    }
    base = base.replace(/\/$/, "");

    // 构建代理URL
    const targetUrl = new URL(url.pathname.replace(base, ""), proxy_url);

    // 转发请求到目标WebDAV服务器
    const response = await fetch(targetUrl.toString(), {
      method,
      headers,
      body:
        method !== "GET" && method !== "HEAD" ? await c.req.blob() : undefined,
    });

    // 创建响应头
    const responseHeaders = new Headers(response.headers);

    // 返回代理响应
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  };
}
