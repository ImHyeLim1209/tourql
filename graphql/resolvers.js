import { getSights, getSight } from "./sight-db"


//city, district, keyword, numOfRows, pageNo)
//SightDetail: (_, { id }) => getSightDetail(id)


const resolvers = {
  Query: {
    sights: (_, { city, district, keyword, numOfRows, pageNo }) =>
      getSights(city, district, keyword, numOfRows, pageNo)
    ,
    sight: (_, { id }) => getSight(id)
  }
};

export default resolvers;