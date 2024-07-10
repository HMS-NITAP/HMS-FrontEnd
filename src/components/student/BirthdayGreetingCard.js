import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const quotes = [
  "Wishing you a day filled with love and joy! 🎉",
  "May your birthday be as wonderful as you are! 🎂",
  "Happy Birthday! Enjoy every moment! 🎈",
  "Here's to a fantastic year ahead! 🍰",
  "Celebrate your special day in a special way! 🎁"
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const BirthdayGreetingCard = ({ name }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Happy Birthday {name}!</Text>
      <Text style={styles.quote}>{getRandomQuote()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quote: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default BirthdayGreetingCard;