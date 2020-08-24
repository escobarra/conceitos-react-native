import React, {useImperativeHandle} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";

import api from '../services/api';


export default function RepositoryItem(props)
{

     

    return(
        <>
    <View style={styles.repositoryContainer}>

        <Text style={styles.repository}>{props.title}</Text>
        
        <View style={styles.techsContainer}>
            {props.techs.map(tech => 
                <Text style={styles.tech}>
                    {tech}
               </Text>
            )}
        </View>

        <View style={styles.likesContainer}>
            <Text
              style={styles.likeText}
              // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
              testID={`repository-likes-${props.id}`}
            >
              {props.likes + " curtidas"}
            </Text>
        </View>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>props.handle(props.id)}
            // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
            testID={`like-button-${props.id}`}
          >
            <Text style={styles.buttonText}>Curtir</Text>
          </TouchableOpacity>
        </View>
        </>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#7159c1",
    },
    repositoryContainer: {
      marginBottom: 15,
      marginHorizontal: 15,
      backgroundColor: "#fff",
      padding: 20,
    },
    repository: {
      fontSize: 32,
      fontWeight: "bold",
    },
    techsContainer: {
      flexDirection: "row",
      marginTop: 10,
    },
    tech: {
      fontSize: 12,
      fontWeight: "bold",
      marginRight: 10,
      backgroundColor: "#04d361",
      paddingHorizontal: 10,
      paddingVertical: 5,
      color: "#fff",
    },
    likesContainer: {
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    likeText: {
      fontSize: 14,
      fontWeight: "bold",
      marginRight: 10,
    },
    button: {
      marginTop: 10,
    },
    buttonText: {
      fontSize: 14,
      fontWeight: "bold",
      marginRight: 10,
      color: "#fff",
      backgroundColor: "#7159c1",
      padding: 15,
    },
  });