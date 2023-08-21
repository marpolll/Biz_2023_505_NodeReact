import Input from "../../shareComps/input";

export default {
  title: "검색창",
  component: [Input],
};

export const SearchInput = () => (
  <Input name="search" placeholder="검색어 입력해" />
);
