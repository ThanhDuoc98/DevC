import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const CitySelectionButtons = props => (
    <View style={styles.cityContainer}>
      <TouchableOpacity
        key="currentLocation"
        style={styles.currentLocation}
        onPress={() => props.onChooseCity("")}
      >
        <Text style={styles.cityName}>Current Location</Text>
      </TouchableOpacity>
      {CITIES.map(city => {
        return (
          <TouchableOpacity
            key={city.name}
            style={styles.cityButton}
            onPress={() => props.onChooseCity(city.name)}
          >
            <Text style={styles.cityName}>{city.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );