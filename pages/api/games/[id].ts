import { result } from "../../../db";

export default function getById(req: any, res: any) {
  const id = req.query.id;
  res.json({ result: result.find((item) => item.id === id) });
}
