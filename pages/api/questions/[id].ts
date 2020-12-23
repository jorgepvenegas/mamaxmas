import { NextApiHandler } from "next";
import { questionList } from "../../../lib/questions";

type Question = {
  id: number;
  header: string;
  type: string;
  instruction: string;
  imgUrl?: string;
  content?: string;
  answer?: string;
};

const question: NextApiHandler = (req, res) => {
  const { id } = req.query;
  const question: Question = questionList.find(x => String(x.id) === String(id));

  if (question) {
    res.status(200).json(question);
  } else {
    res.status(404).end();
  }
};

export default question;
