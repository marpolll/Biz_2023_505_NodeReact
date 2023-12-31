import Input from "../shareComps/SearchInput";
import Button from "../shareComps/Button";
import { Form, useSubmit, useLoaderData } from "react-router-dom";
import styled from "styled-components";

const StyledInputDiv = styled.div`
  width: 80%;
  margin: 5px auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  & input {
    flex: 3;
  }
  & button {
    flex: 1;
    margin: 5px;
  }
`;

const BucketSearch = () => {
  const submit = useSubmit();
  const { search } = useLoaderData();
  const inputChange = (e) => {
    const isFirstSearch = search == null;
    submit(e.currentTarget.form, { replace: !isFirstSearch });
  };
  return (
    <StyledInputDiv>
      <Form>
        <Input placeholder="검색해" name="search" onChange={inputChange} />
      </Form>
      <Form method="post">
        <Button bgColor="green">작성할래?</Button>
      </Form>
    </StyledInputDiv>
  );
};

export default BucketSearch;
