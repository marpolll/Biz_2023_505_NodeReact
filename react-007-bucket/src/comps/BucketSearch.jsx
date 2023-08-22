import Input from "../shareComps/SearchInput";
import Button from "../shareComps/Button";
import { Form } from "react-router-dom";
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
  return (
    <StyledInputDiv>
      <Input placeholder="내용 입력해" />
      <Form method="post">
        <Button bgColor="green">작성할래?</Button>
      </Form>
    </StyledInputDiv>
  );
};

export default BucketSearch;
