export type QuestionType = {
  id: number;
  header: string;
  type: string;
  instruction: string;
  imgUrl?: string;
  content?: string;
  answer?: string;
}