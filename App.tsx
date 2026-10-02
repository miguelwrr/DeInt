import { StyleSheet, Text, View, Image } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Tarjeta principal con borde redondeado */}
      <View style={styles.card}>
        {/* Imagen centrada y redondeada */}
        <Image source={require('./assets/miguel.jpg')} style={styles.avatar}></Image>
        {/* Texto con el nombre */}
        <Text style={styles.name}>Miguel Rodriguez</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  card: {
    width: 320,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 16, // Bordes redondeados de la tarjeta
    backgroundColor: '#ffffff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Hace que la imagen sea circular
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
});
