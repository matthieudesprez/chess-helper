import { NextApiRequest, NextApiResponse } from "next";

const hello = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return res.status(200).send(JSON.stringify({test: "coucou"}));
};

export default hello;
