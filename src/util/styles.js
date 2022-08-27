'use strict';
import { StyleSheet, Dimensions } from "react-native";


let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    color: '#ffffff',
    justifyContent:'space-evenly',
    backgroundColor: '#ffffff'
  },
  containerRow: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    height: '100%',
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  textGray: {
    margin: 15,
    marginTop: 30,
    color: '#9e9e9e',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
  },
  card: {
    height: 230,
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth: 10,
    alignItems: 'center',
    alignContent: 'center',
    borderBottomWidth: 10,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 25,
    justifyContent: 'center',
    color: '#000000',
    marginTop:10,
  },
  gridLogo: {
    width: 180,
    height: 150,
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 5,
    marginLeft: 5
  },
  headerInnerStyle: { flexDirection: 'row', alignItems: 'center' },
  headerIcon: { flex: 1, flexDirection: 'row',justifyContent: 'flex-start' },
  headerImage: {
    height: 30, width: 30, marginRight: 5,
    marginTop: 8,
    marginLeft: 10
  },
  headerRightImage: { width:120,flexDirection: 'row',marginTop:10, justifyContent: 'space-between'},
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  dropdown: {
    position: 'relative',
    backgroundColor: '#fff',
  },
  logoImageStyle: {
    height: screenHeight,
    width: screenWidth,
  },
  image: {
    height: 60,
    width: 60,
  },
  logoText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    width:180,
    flexWrap: 'wrap'
  },
  root: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F2B518',
    borderRadius: 8,
    height: 40,
    width:120,
    marginRight:10,
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
  },
  titleText: {
    textAlign: 'center',
    color: '#000000',
    fontFamily: "Urbanist-Bold",
    fontWeight: "bold",
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 42,
  },
  subTitleText: {
    color: "#F2B518",
    textAlign: 'center',
    fontFamily: "Urbanist-Bold",
    fontWeight: "bold",
    fontSize: 20,
    margin: 15
  },
  errorTextStyle: {
    color: '#1177b8',
    textAlign: 'center',
    fontSize: 18,
  },
  checkboxContainer: {
    flexDirection: "row",
    width: '100%',
    margin: 10,
  },
  checkbox: {
    alignSelf: "center",
    color: '#F2B518'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 200,
    paddingVertical: 32,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    margin: 5,
    fontFamily: "Urbanist-Regular",
  },
  form: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 10,
    height: 48,
    paddingHorizontal: 16,
  },
  label: {
    color: '#9E9E9E',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    width: 80,
  },
  normalText: {
    color: "#000000",
    textAlign: 'center',
    fontFamily: "Urbanist-Regular",
    fontWeight: "normal",
    justifyContent: 'center',
    fontSize: 15,
  },
  root: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
  },
  safeAreaView: {
    flex: 1,
    alignItems: 'center'
  },
  subtitle: {
    color: 'rgba(235, 235, 245, 0.6)',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
  },
  textButton: {
    color: '#F2B518',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: "Urbanist-Bold",
    marginBottom: 10,
    marginTop: 10,
    lineHeight: 20,
  },
  textInput: {
    color: '#9E9E9E',
    backgroundColor: '#F8F7FD',
    height: 35,
    width: "100%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop:10
  },
});