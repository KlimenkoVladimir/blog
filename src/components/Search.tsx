import React, { FC, useState } from "react";
import SearchIcon from "../svg/ic_search.svg";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import fetchPosts from "../fetchPosts.ts";
import { AppDispatch } from "../store.ts";

const InputContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 12px 14px;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  color: rgba(145, 158, 171, 0.32);
  border: 1px solid rgba(145, 158, 171, 0.32);
`;

const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
`;

const ButtonInput = styled.button`
  margin-right: 8px;
  background-color: transparent;
  padding: 0px;
  background-color: transparent;
  border: none;
  & :hover {
    cursor: pointer;
  }
`;

const Search = () => {
  const [request, setRequest] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRequest(value);
  };

  return (
    <InputContainer>
      <ButtonInput onClick={() => dispatch(fetchPosts(request))}>
        <img src={SearchIcon} alt="" />
      </ButtonInput>
      <Input
        type="text"
        placeholder="Поиск по названию статьи"
        value={request}
        onChange={handleInputChange}
      />
    </InputContainer>
  );
};

export default Search;
