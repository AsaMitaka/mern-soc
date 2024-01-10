export interface UserProps {
  name: string;
  username: string;
  email: string;
  password: string;
  posts: PostProps[];
  createdAt: string;
  updatedAt: string;
  _id: number;
}

export interface PostProps {
  _id: number;
  title: string;
  text: string;
  authorId: number;
  comments: CommentProps[];
}

export interface CommentProps {
  _id: number;
  text: string;
  authorId: number;
  postId: number;
}
