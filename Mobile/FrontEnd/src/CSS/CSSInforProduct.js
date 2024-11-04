import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  icon_return: {
    position: 'absolute',
    top: 10,
    left: 5,
    zIndex: 100,
  },
  image_product: {
    width: '100%',
    height: 350,
    objectFit: 'fill',
  },
  container_infor: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    bottom: -330,
  },
  name_product: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  price_product: {
    fontSize: 19,
    marginTop: 5,
  },
  des_product: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 20,
  },

  // container add product
  container_add_product: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  btn_messenger: {
    flex: 1,
    backgroundColor: '#2fcc64',
    alignItems: 'center',
    padding: 10,
    borderRightWidth: 1,
  },
  btn_cart: {
    flex: 1,
    backgroundColor: '#2fcc64',
    alignItems: 'center',
    padding: 8,
  },
  btn_sell: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  dialogContainer: {
    width: 250,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  dialogMessage: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default styles;
