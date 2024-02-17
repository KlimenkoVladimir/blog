import { SerializedStyles } from "@emotion/react";

export interface StyledComponent {
  css?: SerializedStyles;
  children: React.ReactNode;
}

export interface ReactionsProps {
  reactions: {
    id: number;
    like: number;
    dislike: number;
  };
}

export interface Reaction {
  id: number;
  like: number;
  isLike: boolean;
  dislike: number;
  isDislike: boolean;
}

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}
