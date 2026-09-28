import { createHash } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

// Answers Chrome DevTools' "Automatic Workspace Folders" probe
// (/.well-known/appspecific/com.chrome.devtools.json, rewritten here in next.config.js).
// Dev only: it exposes the local project path, so production always gets a 404.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (process.env.NODE_ENV !== "development") {
    res.status(404).end();
    return;
  }

  const root = process.cwd();
  // stable UUID derived from the project path, so DevTools remembers the workspace between restarts
  const h = createHash("sha1").update(root).digest("hex");
  const uuid = `${h.slice(0, 8)}-${h.slice(8, 12)}-4${h.slice(13, 16)}-${((parseInt(h[16], 16) & 0x3) | 0x8).toString(16)}${h.slice(17, 20)}-${h.slice(20, 32)}`;

  res.status(200).json({ workspace: { root, uuid } });
}
