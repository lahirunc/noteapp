import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles'

const AddNotesScreen = ({ route, navigation }) => {
  // getting the parameters from parent
  const { noteList, index } = route.params

  const customData = require('../../assets/custom_data.json')

  // text input
  const [notes, setNotes] = useState()

  // validation
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  // category
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [categoryValue, setCategoryValue] = useState('')
  const [categoryItems, setCategoryItems] = useState([
    { label: 'Select a Category', value: '' },
  ])

  // client
  const [clientOpen, setClientOpen] = useState(false)
  const [clientValue, SetClientValue] = useState('')
  const [clientItems, SetClientItems] = useState([
    { label: 'Select a Client', value: '' },
  ])

  useFocusEffect(
    React.useCallback(() => {
      // if index is not null then setting the data
      if (index != null) {
        data = noteList[index]

        setNotes(data['notes'])
        setCategoryValue(data['category'])
        SetClientValue(data['client'])
      }

      // getting category and clients data
      readCategory()
      readClients()
    }, [])
  )

  useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
    validateForm()
  }, [notes])

  // validation
  const validateForm = () => {
    let errors = {}

    // validate notes
    if (!notes) {
      errors.note = '*Notes required!'
    }

    // Set the errors and update form validity
    setErrors(errors)
    setIsFormValid(Object.keys(errors).length === 0)
  }

  // reading category data
  const readCategory = () => {
    setCategoryItems([])
    // populating to an array
    var array = [...categoryItems]

    // adding data from the json to the array
    for (let i = 0; i < customData['category'].length; i++) {
      const element = customData['category'][i]
      array.push({ label: element['name'], value: element['name'] })
    }

    // updating the categoryItems value
    setCategoryItems(array)
  }
  // reading category data
  const readClients = () => {
    SetClientItems([])
    // populating to an array
    var array = [...clientItems]

    // adding data from the json to the array
    for (let i = 0; i < customData['client'].length; i++) {
      const element = customData['client'][i]
      array.push({ label: element['name'], value: element['name'] })
    }

    // updating the clientItems value
    SetClientItems(array)
  }

  // adding the note to storage
  const addNote = async () => {
    // checking if the form is valid
    if (isFormValid) {
      // date
      var date = new Date()
      // copy of note list
      var tempNotesList = [...noteList]

      // creating the note. if its an update it will not update
      // the created time
      var note = {
        notes: notes,
        category: categoryValue,
        client: clientValue,
        updatedDate: date,
        createdDate: index === null ? date : noteList[index]['createdDate'],
      }

      // removing the updating the record
      if (index != null) {
        tempNotesList.splice(index, 1)
      }

      // adding the newly created note
      const data = {
        noteData: [...tempNotesList, note],
      }

      // saving to the local storage
      await AsyncStorage.setItem('noteData', JSON.stringify(data))

      // clearing the text input
      setNotes(null)
      // navigating back to the home page
      navigation.pop()
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* add notes text and close button */}
        <Text style={styles.addNotesText}>Add notes</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.pop()}
        >
          <Ionicons name="close" size={28} color="black" />
        </TouchableOpacity>
      </View>
      {/* Notes */}
      <ScrollView>
        <View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.writeTaskWrapper}
          >
            {/* note text input */}
            <TextInput
              style={styles.input}
              placeholder={'Write a note here...'}
              value={notes}
              multiline={true}
              inputMode="text"
              autoFocus
              onChangeText={(text) => setNotes(text)}
            />
          </KeyboardAvoidingView>
        </View>
        {/* errors */}
        {Object.values(errors).map((error, index) => (
          <Text key={index} style={styles.error}>
            {error}
          </Text>
        ))}
        {/* drop downs */}
        <View style={styles.pickerRow}>
          <DropDownPicker
            style={styles.picker}
            open={categoryOpen}
            value={categoryValue}
            items={categoryItems}
            setOpen={setCategoryOpen}
            setValue={setCategoryValue}
            setItems={setCategoryItems}
            containerProps={{
              height: categoryOpen === true ? 220 : null,
              backgroundColor: '#fff',
            }}
          ></DropDownPicker>
          <DropDownPicker
            style={styles.picker}
            open={clientOpen}
            value={clientValue}
            items={clientItems}
            setOpen={setClientOpen}
            setValue={SetClientValue}
            setItems={SetClientItems}
            containerProps={{
              height: clientOpen === true ? 220 : null,
              backgroundColor: '#fff',
            }}
          />
        </View>
        {/* save  */}

        <TouchableOpacity
          disabled={!isFormValid}
          style={styles.buttonSave}
          onPress={addNote}
        >
          <Text style={styles.buttonSave.text}>SAVE</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default AddNotesScreen
