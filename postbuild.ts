// import { copy, readFile, writeFile, remove, exists } from "fs-extra";
// import { version } from "package.json";

// // 删除已存在的 dist 文件夹
// if (await exists("dist/main")) {
//   await remove("dist/main");
// }

// // 复制 docbase 后端构建
// await copy("packages/app/dist", "dist/main");

// // 复制 docbase 前端构建
// await copy("packages/ui/dist", "dist/main/public");

// // 复制 docker-compose 文件，并修改 tag 为最新
// const content = await readFile("docker/docker-compose.yaml", "utf-8");
// const newContent = content.replace(/docbase:latest/g, `docbase:${version}`);
// await writeFile("dist/docker-compose.yaml", newContent);

// 下载最新 dufs
import { downloadRelease } from "@terascope/fetch-github-release";
import { writeFile } from "fs/promises";
import { readFile, rm } from "fs/promises";

const user = "sigoden";
const repo = "dufs";
const outputdir = "dist/main";
const leaveZipped = false;
const disableLogging = false;

import { arch, platform } from "os";
import { join } from "path";
import { gunzip } from "zlib";

const a = arch()
  .replace("arm64", "aarch64")
  .replace("ia32", "i686")
  .replace("x64", "x86_64");

const p = platform().replace("win32", "windows");

const name = await downloadRelease(
  user,
  repo,
  outputdir,
  (release) => release.prerelease === false,
  (asset) => asset.name.includes(p) && asset.name.includes(a),
  leaveZipped,
  disableLogging
);

const target = name.at(0);

if (target) {
  // 使用 gzip 解压文件
  const fileContent = await readFile(target);
  gunzip(fileContent, async (err, result) => {
    if (err) {
      console.error("解压失败:", err);
      return;
    }
    await writeFile(
      join(outputdir, p === "windows" ? "dufs.exe" : "dufs"),
      result
    );
    await rm(target);
  });
}
