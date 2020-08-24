import React, {useState,useEffect} from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import RepositoryItem from './components/RepositoryItem';
import api from "./services/api";

export default function App() {

  const [repositories,setRepos] = useState([]);
  useEffect(()=>{
    api.get('repositories').then(response=>{
      setRepos(response.data);
    });

  },[]);
  
  async function handleLikeRepository(id)
  {
     const response = await api.post(`repositories/${id}/like`);
     const repoIndex = repositories.findIndex(repository => repository.id ===id);
     repositories[repoIndex] = response.data;

     setRepos([...repositories]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList 
        data = {repositories}
        keyExtractor = {repository => repository.id}
        renderItem = {({item:repository})=>(
          <RepositoryItem
          key ={repository.id}
          id = {repository.id}
          title = {repository.title}
          likes = {repository.likes}
          techs = {repository.techs}
          handle = {handleLikeRepository}
          />
        )}
        />
      </SafeAreaView>
    </>
  );
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
