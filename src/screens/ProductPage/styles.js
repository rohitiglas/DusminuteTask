import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    width: '100%',
    height: 200,
  },
  buttonContainer: {
    margin: 20,
  },
  rowView: {width: '100%', height: 150, flexDirection: 'row'},
  imageStyle: {alignSelf: 'center', width: 120, height: 120},
  nameStyle: {marginTop: 10, color: '#0a0a0a', fontSize: 18},
  productBrand: {marginTop: 5, color: '#0a0a0a', fontSize: 16},
  productWeight: {marginTop: 5, color: '#d3d3d3', fontSize: 14},
  productPrice: {marginTop: 5, color: '#d3d3d3', fontSize: 14},
  addViewStyle: {
    marginTop: 15,
    width: 100,
    borderRadius: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b6',
    flexDirection: 'row',
  },

  plusMinusViewStyle: {
    marginTop: 10,
    width: '50%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    flexDirection: 'row',
  },
  plusView: {alignItems: 'center', justifyContent: 'center'},

  addTextStyle: {textAlign: 'center', fontSize: 20, color: '#2e8d0c'},
  addTextStyle1: {textAlign: 'center', fontSize: 16, color: '#FFFFFF'},
  plusTextStyle: {fontSize: 20, color: '#696969'},
  minusTextStyle: {fontSize: 20, color: '#696969'},
  rowViewStyle: {marginTop: 10, marginLeft: 10},
  animateViewStyle: {
    flex: 1,
    width: '100%',
  },
  cartRowViewStyle: {
    flexDirection: 'row',

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    margin: 20,
    flex: 1,
    width: '80%',
  },

  cartImageStyle: {
    marginLeft: 20,
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cartPlusMinusViewStyle: {
    alignSelf: 'center',
    marginLeft: 20,
    marginTop: 10,
    width: '50%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    flexDirection: 'row',
  },
});

export default styles;
