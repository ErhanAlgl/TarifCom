import React from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {API_URL} from '../../data.js';
import useFetch from '../../hooks/useFetch';
import CategoriesCard from '../../component/Card/CategoriesCard';

const Categories = ({navigation}) => {
  const {loading, data, error} = useFetch(API_URL);

  const handleCategorySelect = strCategory => {
    navigation.navigate('MealsPage', {strCategory});
  };
  const renderCategory = ({item}) => (
    <CategoriesCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  if (loading) {
    return <ActivityIndicator size="large" color="orange" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Categories;
