import React from 'react';
import {View, Text, Image, Button, Linking} from 'react-native';
import styles from './DetailCard.styles';

const DetailCard = ({detail}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Image style={styles.image} source={{uri: detail.strMealThumb}} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{detail.strMeal}</Text>
          <Text style={styles.subTitle}>{detail.strArea}</Text>
        </View>
        <Text>{detail.strInstructions}</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Linking.openURL(detail.strYoutube);
            }}
            title="Watch on Youtube"
            color="white"
          />
        </View>
      </View>
    </View>
  );
};

export default DetailCard;
