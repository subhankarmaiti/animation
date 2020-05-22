import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

export default class animations extends Component {
  state = {
    animation: 0,
  };
  startAnimation = () => {};
  render() {
    const animatedStyles = {};
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
