import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon, MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  adress,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow rounded-lg">
      <Image
        source={{ uri: urlFor(imgUrl).url }}
        resizeMode="cover"
        className="h-36 w-64 rounded-lg"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold pt-2 text-lg">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> • {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby • {adress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
