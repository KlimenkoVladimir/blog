import React, { FC } from "react";
import Like from "../svg/ThumbUpAlt.svg";
import Dislike from "../svg/ThumbDownAlt.svg";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { handleLike, handleDislike } from "../reactions.slice.ts";
import { ReactionsProps } from "../types.ts";

const FlexReactions = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 24px;
`;

const FlexReaction = styled.div`
  display: flex;
  gap: 8px;
`;

const ButtonReaction = styled.button`
  margin: 0px;
  padding: 0px;
  background-color: transparent;
  border: none;
  & :hover {
    cursor: pointer;
  }
`;

const Reactions: FC<ReactionsProps> = ({ reactions }) => {
  const dispatch = useDispatch();

  return reactions ? (
    <FlexReactions>
      <FlexReaction>
        <ButtonReaction onClick={() => dispatch(handleLike(reactions.id))}>
          <img src={Like} alt="Like" />
        </ButtonReaction>
        <p>{reactions.like}</p>
      </FlexReaction>
      <FlexReaction>
        <ButtonReaction onClick={() => dispatch(handleDislike(reactions.id))}>
          <img src={Dislike} alt="Dislike" />
        </ButtonReaction>
        <p>{reactions.dislike}</p>
      </FlexReaction>
    </FlexReactions>
  ) : null;
};

export default Reactions;
