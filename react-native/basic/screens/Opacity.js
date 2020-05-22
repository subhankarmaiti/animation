import React, {Component} from 'react';
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
export default class Opacity extends Component {
  state = {
    animation: new Animated.Value(1),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };
  render() {
    const animatedStyle = {
      opacity: this.state.animation,
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.boxStyle, animatedStyle]} />
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
