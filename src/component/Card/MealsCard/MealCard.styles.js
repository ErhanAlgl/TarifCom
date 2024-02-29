import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 5,
  },
  image: {
    width: Dimensions.get('window').width * 0.95,
    height: Dimensions.get('window').height * 0.23,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  bodyContainer: {
    position: 'relative', // Görsel ve metni saran konteyner için
    marginBottom: 15,
  },
  titleContainer: {
    position: 'absolute', // Görselin üzerinde konumlandırma
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    marginLeft: 20,
  },
});
