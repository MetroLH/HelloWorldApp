import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

//自定义Text name 属性
class CustomText extends Component {
  render(){
    return(
      <Text style = {styles.welcome}>Hello {this.props.name}! </Text>
    );
  }
}

//自定义闪烁的Text
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true};

    //每1000毫秒岁showText状态做一次取反操作
    setInterval(() => {
      this.setState({ showText: !this.state.showText});
    }, 1000);
  }
  render(){
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : '';
    return(
      <Text style = {styles.instructions}>{display}</Text>
    );
  }
}

class HelloWorldApp extends Component {
  render() {
    var testvar = "测试变量2";
    let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
    return (
      <View style={styles.container}>
        <Text style = {styles.instructions}>Hello World {testvar} !</Text>
        <Image source = {pic} style = {styles.imageSize} />
        <View style={
          {
            flex: 0,
            flexDirection: 'column',
            backgroundColor: 'red',
          }
        }>
          <CustomText name='TestCustom1'/>
          <CustomText name='TestCustom2'/>
          <CustomText name='TestCustom3'/>
          <Blink text='Hello World'/>
        </View>
      </View>
    );
  }
}

//flex 布局
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: 5,
    backgroundColor: '#F5FC00',
  },
  imageSize: {
    width: 193,
    height: 110,
  }
});

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
