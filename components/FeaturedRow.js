import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

import client, { urlFor } from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurant, setrestaurant] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id == "${id}"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type[]-> {
          name
        }
      },
    } [0] `,
        { id }
      )
      .then((data) => {
        setrestaurant(data?.restaurant);
      });
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row px-4 items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-400 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurant?.map((item, index) => (
          <RestaurantCard
            key={index}
            id={item._id}
            imgUrl={item.image}
            title={item.name}
            rating={item.rating}
            genre={item.type?.name}
            adress={item.adress}
            short_description={item.short_description}
            dishes={item.dishes}
            long={item.long}
            lat={item.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
