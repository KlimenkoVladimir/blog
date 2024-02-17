import React, { FC, useEffect } from "react";
import { PostHeader, PostBottom, P, H2, Image } from "./Home.tsx";
import ArrowIcon from "../svg/keyboard_backspace.svg";
import Reactions from "./Reactions.tsx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import fetchPosts from "../fetchPosts.ts";
import { AppDispatch, RootState } from "../store.ts";
import { Post } from "../types.ts";
/** @jsxImportSource @emotion/react */

const PostDetail: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts(""));
    }
  }, []);

  const post = posts.filter(
    (post: Post) => post.id === parseInt(window.location.pathname.slice(1))
  )[0];
  const reactions = useSelector((state: RootState) => state.reactions)[
    window.location.pathname.slice(1)
  ];

  return post ? (
    <div>
      <PostHeader
        css={css`
          margin: 0px 0px 32px 0px;
          padding-left: 6px;
        `}
      >
        <Link to={"/"}>
          <img src={ArrowIcon} alt="" />
        </Link>
        <P
          css={css`
            margin: 16px auto 16px 0px;
          `}
        >
          Вернуться к статьям
        </P>
        <Reactions reactions={reactions}></Reactions>
      </PostHeader>
      <H2
        css={css`
          text-align: center;
          margin-bottom: 48px;
        `}
      >
        {post.title}
      </H2>
      <Image src="https://placehold.co/300x200" alt=""></Image>
      <P
        css={css`
          margin: 48px 0px 0px 0px;
        `}
      >
        {post.body}
      </P>
      <PostBottom></PostBottom>
    </div>
  ) : null;
};

export default PostDetail;
