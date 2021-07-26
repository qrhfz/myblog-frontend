import Tag from "./Tag"

type Post = {
  id?: number;
  title: string;
  body: string;
  date?: string;
  tags?: Tag[]
}

export default Post