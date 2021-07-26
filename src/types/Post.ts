import Tag from "./Tag"

type Post = {
  id: number|undefined;
  title: string;
  body: string;
  date: string;
  tags: Tag[]|undefined
}

export default Post