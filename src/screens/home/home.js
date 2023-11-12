import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const HomeScreen = ({ navigation }) => {
  const [noteList, setNoteList] = useState([])

  // reading the data from the local storage when the app starts
  useFocusEffect(
    React.useCallback(() => {
      readNotes()
    }, [])
  )

  // view notes. this will open the note in add notes page. .
  const viewNote = (index) => {
    navigation.push('Add', { noteList: noteList, index: index })
  }

  // delete notes
  const deleteNote = async (index) => {
    // assigning notes to a temp array
    var tempNoteList = [...noteList]
    // deleting the specific note
    tempNoteList.splice(index, 1)

    // updating the storage and current note list
    setNoteList(tempNoteList)

    const data = {
      noteData: tempNoteList,
    }
    await AsyncStorage.setItem('noteData', JSON.stringify(data))
  }

  // read notes from the local storage
  const readNotes = async () => {
    // getting data
    const result = await AsyncStorage.getItem('noteData')

    // if data available convert it to json and create and array
    if (result != null) {
      var object = JSON.parse(result)

      var array = Object.keys(object['noteData']).map(function (k) {
        return object['noteData'][k]
      })

      setNoteList(array)
    }
  }

  return (
    <View style={styles.container}>
      <View>
        {/* note app text */}
        <Text style={styles.welcomeText}>NOTE APP</Text>
        {/* notes component */}
        <ScrollView>
          {noteList.length > 1 ? (
            noteList.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => viewNote(index)}>
                  {/* note data */}
                  <View keys={index} style={styles.notes}>
                    <Text styles={styles.noteText}>{item['notes']}</Text>
                    <Text styles={styles.noteText}>{item['client']}</Text>
                    <Text styles={styles.noteText}>{item['category']}</Text>
                  </View>
                  {/* delete icon button */}
                  <TouchableOpacity
                    style={styles.deleteNote}
                    onPress={() => deleteNote(index)}
                  >
                    <Ionicons name="trash" size={18} color="#D84727" />
                  </TouchableOpacity>
                </TouchableOpacity>
              )
            })
          ) : (
            <View style={styles.noNotes}>
              <Text style={styles.noNotes.text}>No Notes to be shown.</Text>
            </View>
          )}
        </ScrollView>
      </View>
      {/* floating button */}
      <TouchableOpacity
        style={styles.floatingbutton}
        onPress={() =>
          navigation.push('Add', { noteList: noteList, index: null })
        }
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
