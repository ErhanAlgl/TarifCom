import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {API_CATEGORIES_URL} from '../../data.js';
import useFetch from '../../hooks/useFetch';
import MealCard from '../../component/Card/MealsCard';

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {loading, error, data} = useFetch(API_CATEGORIES_URL + strCategory);

  const handleMealSelect = idMeal => {
    navigation.navigate('DetailPage', {idMeal});
  };

  const renderMeals = ({item}) => (
    <MealCard meals={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );

  if (loading) {
    return <ActivityIndicator size="large" color="orange" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};

export default Meals;
