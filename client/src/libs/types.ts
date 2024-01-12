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
  id: string;
  text: string;
  authorId: UserProps;
  data: string;
  comments: CommentProps[];
}

export interface CommentProps {
  _id: number;
  text: string;
  postId: number;
  authorId: UserProps;
}

export interface TextareaProps {
  onChange: (e: any) => void;
  placeholder: string;
  value: string;
}
