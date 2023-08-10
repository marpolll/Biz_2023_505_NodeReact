const URL = {
  HELLO: "/bbs",
  BBS_INSERT: "/bbs/insert",
  BBS_LIST: "/bbs/list",
};

// 함수 선언문에 export 를 붙이면 개별 함수가 export 된다
// export {hello} 한 것과 같다
export const hello = async () => {
  // proxy 설정된 URL 과 합성하여 http://localhost:3000/bbs 로 요청
  const res = await fetch(URL.HELLO);
  const json = await res.json();
  return json.title;
};

export const getBbsList = async () => {
  try {
    const response = await fetch(URL.BBS_LIST);
    const bbsList = await response.json();
    console.table(bbsList);
    return bbsList;
  } catch (error) {
    return [];
  }
};

export const bbsInsert = async (formData) => {
  const fetchData = {
    method: "POST",
    body: formData,
  };
  const response = await fetch(URL.BBS_INSERT, fetchData);
};
