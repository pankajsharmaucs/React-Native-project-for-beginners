import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Accordion1 = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <View>
        {content.length > 1
          ?
          <Text style={styles.content} >{content}</Text>
          :
          <Text style={styles.content} >Locked</Text>
        }
      </View>
    </View >

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  header: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 152, 152)',
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    width: 300,
    padding: 15,
    backgroundColor: '#fff',
  },
});

export default Accordion1;
