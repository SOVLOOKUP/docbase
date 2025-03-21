import type { BasePlugin, Content } from "./Plugin";
import { readFile } from "fs-extra";
import { AnyZodObject } from "zod";
import { version } from "~/package.json";

/**
 * 文档加载器类型定义
 * @param path - 文档路径
 * @returns 返回加载后的文档对象，false 表示不符合条件的文件，跳过处理
 */
export type DocLoader = (
  path: string
) => Promise<Content | false> | false;

/**
 * 文档加载器插件接口
 * @template T - 插件参数类型，默认为空对象
 */
export interface DocLoaderPlugin<T extends AnyZodObject = AnyZodObject>
  extends BasePlugin<DocLoader, T> {
  /** 插件类型，固定为"DocLoader" */
  type: "DocLoader";
  /** 支持的文件扩展名列表 */
  exts: string[];
}

// 默认实现 ============

/**
 * 默认文档加载器插件实现
 * 支持的文件类型包括：md, txt
 */
export const defaultDocLoaderPlugin: DocLoaderPlugin = {
  name: "default",
  version,
  type: "DocLoader",
  exts: ["md", "txt"],
  init: async () => {
    // 读取文件内容
    return async (path) => ({
      text: await readFile(path, "utf-8"),
    });
  },
};
