import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealCard.styles';

const MealCard = ({meals, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <Image style={styles.image} source={{uri: meals.strMealThumb}} />
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {meals.strMeal}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
