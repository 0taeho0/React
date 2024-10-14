import { Image, Stylesheet, Text, View } from 'react-native';

const SigInScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/test.png')} style={styles.image} />
      <Text>SigIn Screen</Text>
    </View>
  );
};

const styles = Stylesheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SigInScreen;
