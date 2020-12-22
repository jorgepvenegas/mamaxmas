import {NextApiHandler} from "next";
import { questionList } from "../../lib/questions";

// enum ScreenCategory {
//   Hint = "hint",
//   Task = "task",
//   Message = "message",
// }

type Question = {
  id: number;
  header: string;
  type: string;
  instruction: string;
  imgUrl?: string;
  content?: string;
  answer?: string;
}

const questions:NextApiHandler = (req, res) => {
  const result: Question[] = questionList;
  if(result) {
    res.status(200).json(result);
  }
  else {
    res.status(404).end();
  }
}

export default questions;