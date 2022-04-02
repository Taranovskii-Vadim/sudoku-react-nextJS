import { NextApiRequest, NextApiResponse } from "next";

export default function getLevels(req: NextApiRequest, res: NextApiResponse) {
  res.json({ result: ["easy", "medium", "hard"] });
}
