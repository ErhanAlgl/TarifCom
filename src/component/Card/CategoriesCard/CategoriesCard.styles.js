import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
    backgroundColor: 'orange',
    padding: 10,
  },
  image: {
    width: 100,
    minHeight: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  bodyContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingLeft: 5,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
  },
  title: {
    fontSize: 22,
    paddingLeft: 10,
  },
});
