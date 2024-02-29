import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  bodyContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: Dimensions.get('window').width * 0.98,
    height: Dimensions.get('window').height * 0.35,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A52B2A',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A52B2A',
    marginBottom: 5,
  },
  titleContainer: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  buttonContainer: {
    backgroundColor: 'red',
    margin: 5,
    marginTop: 15,
    marginBottom: 35,
    borderRadius: 5,
  },
});
