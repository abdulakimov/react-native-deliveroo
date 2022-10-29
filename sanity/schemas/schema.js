import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import featured from "./featured";
import category from "./category";
import restaurants from "./restaurants";
import dish from "./dish";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([restaurants, dish, category, featured]),
});
