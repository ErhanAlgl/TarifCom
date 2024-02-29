import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {API_DETAIL_URL} from '../../data.js';
import useFetch from '../../hooks/useFetch';
import DetailCard from '../../component/Card/DetailCard';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  const {loading, error, data} = useFetch(API_DETAIL_URL + idMeal);
  console.log(API_DETAIL_URL + idMeal);

  const renderDetails = ({item}) => <DetailCard detail={item} />;

  if (loading) {
    return <ActivityIndicator size="large" color="orange" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderDetails} />
    </View>
  );
};

export default Detail;
