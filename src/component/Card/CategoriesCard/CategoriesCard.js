import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriesCard.styles';

const CategoriesCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: category.strCategoryThumb}}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{category.strCategory}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
