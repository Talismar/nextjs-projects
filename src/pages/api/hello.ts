// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  users: {
    id: number;
    name: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users = [
    { id: 1, name: "Antonio" },
    { id: 2, name: "Talismar" },
  ];
  return res.status(200).json({ users: users });
}
