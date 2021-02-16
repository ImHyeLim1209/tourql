import { getSights, getSightDetail } from "./sight-db"

const obj = {
  "addr1": "서울특별시 구로구 궁동",
  "areacode": 1,
  "booktour": 0,
  "cat1": "A02",
  "cat2": "A0202",
  "cat3": "A02020700",
  "contentid": 2591809,
  "contenttypeid": 12,
  "createdtime": 20190313135421,
  "firstimage": "http://tong.visitkorea.or.kr/cms/resource/06/2591806_image2_1.bmp",
  "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/06/2591806_image2_1.bmp",
  "mapx": 126.8293197915,
  "mapy": 37.5012175047,
  "mlevel": 6,
  "modifiedtime": 20201130135156,
  "readcount": 23,
  "sigungucode": 7,
  "title": "궁동저수지 생태공원"
}

//city, district, keyword, numOfRows, pageNo)
//SightDetail: (_, { id }) => getSightDetail(id)


const resolvers = {
  Query: {
    Sights: async (_, { city, district, keyword, numOfRows, pageNo }) => {
      return await getSights(city, district, keyword, numOfRows, pageNo);
    }
  }
};

export default resolvers;