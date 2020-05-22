import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

export default class WidthHeight extends Component {
  state = {
    animation: new Animated.Value(150),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500,
      //   useNativeDriver: true,
    }).start();
  };
  render() {
    const animatedStyles = {
      width: this.state.animation,
      height: this.state.animation,
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.boxStyle, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxStyle: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});
