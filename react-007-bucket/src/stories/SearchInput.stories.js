import SearchInput from "../shareComps/SearchInput";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
`;

export default {
  title: "검색입력창",
  component: [SearchInput],
};

export const 입력창샘플 = () => {
  return (
    <Container>
      <SearchInput />
    </Container>
  );
};

export const 이름검색 = () => {
  return (
    <Container>
      <SearchInput placeholder="이름을 입력해" />
    </Container>
  );
};
