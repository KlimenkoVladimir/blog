import React, { FC, useEffect } from "react";
import fetchPosts from "../fetchPosts.ts";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Reactions from "./Reactions.tsx";
import { useDispatch, useSelector } from "react-redux";
import { StyledComponent } from "../types.ts";
import { css } from "@emotion/react";
import Search from "./Search.tsx";
import { AppDispatch, RootState } from "../store.ts";
/** @jsxImportSource @emotion/react */

const ButtonPost = styled(Link)`
  box-sizing: border-box;
  width: 150px;
  margin-left: auto;
  padding: 14px 22px 12px 22px;
  background-color: rgba(255, 255, 255, 1);
  font-size: 16px;
  border: 1px solid rgba(10, 10, 10, 1);
  border-radius: 60px;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  color: rgba(10, 10, 10, 1);
  line-height: 19px;
`;

const GridPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const Post = styled.div`
  margin-top: 24px;
  border: 1px solid rgba(244, 244, 244, 1);
  border-radius: 12px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 12px 12px 0 0;
`;

export const PostHeader: FC<StyledComponent> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 16px;
`;
export const PostBottom = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin: 0px 16px 32px 16px;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  margin: 0px;
`;

export const H2: FC<StyledComponent> = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin: 0px;
`;

export const P: FC<StyledComponent> = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
`;

const Home: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const reactions = useSelector((state: RootState) => state.reactions);

  useEffect(() => {
    dispatch(fetchPosts(""));
  }, []);

  return (
    <div>
      <H1>Блог</H1>
      <P
        css={css`
          margin: 24px 0px 32px 0px;
        `}
      >
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </P>
      <Search></Search>
      {posts[0] ? (
        <Post>
          <Image src="https://placehold.co/300x200" alt="" />
          <PostHeader>
            <H2>{posts[0].title}</H2>
            <Reactions reactions={reactions[1]}></Reactions>
          </PostHeader>
          <P
            css={css`
              margin: 32px 0px;
              padding: 0px 16px;
            `}
          >
            {posts[0].body}
          </P>
          <PostBottom>
            <ButtonPost to={`/${posts[0].id}`}>Читать далее</ButtonPost>
          </PostBottom>
        </Post>
      ) : null}
      <GridPosts>
        {posts[1]
          ? posts.slice(1).map((post) => (
              <Post key={post.id}>
                <Image src="https://placehold.co/300x200" alt="" />
                <PostHeader>
                  <H2>{post.title}</H2>
                </PostHeader>
                <PostBottom>
                  <Reactions reactions={reactions[post.id]}></Reactions>
                  <ButtonPost to={`/${post.id}`}>Читать далее</ButtonPost>
                </PostBottom>
              </Post>
            ))
          : null}
      </GridPosts>
    </div>
  );
};

export default Home;
