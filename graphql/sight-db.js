import fetch from "node-fetch";

const API_KEY = `y4qSPFgOBfdWOLzpfvhblj8aFHDLpDIZZNyAXn5B3BIrwF2Wi7GSQNiBpe3jOytlmvOQFcCNS8X2rZl6%2FiQIrw%3D%3D`
const API_URL_HEAD = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?ServiceKey=${API_KEY}&contentTypeId=12&`;
const API_URL_TAIL = `&MobileOS=ETC&MobileApp=Practice&_type=json`

export const getSights = (city = "", district = "", keyword = "", numOfRows = 6, pageNo = 1) => {
  keyword = encodeURI(keyword);

  let API_URL_BODY = `areaCode=${city}&sigunguCode=${district}&keyword=${keyword}&numOfRows=${numOfRows}&pageNo=${pageNo}`
  let API_URL = API_URL_HEAD + API_URL_BODY + API_URL_TAIL;

  return fetch(`${API_URL}`)
    .then(res => res.json())
    .then(json => { return json.response.body.items.item })
    .catch(function (error) {
      console.log(error);
    });

}

export const getSightDetail = (id) => {

}