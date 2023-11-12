import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  addNotesText: {
    fontSize: 38,
    fontWeight: 'bold',

    paddingTop: '5%',
    paddingBottom: '5%',
  },
  button: {
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    backgroundColor: '#0CCE6B',
    borderRadius: 10,
    borderColor: '#0CCE6B',
    elevation: 10,
    shadowColor: '#2a2a2a',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderWidth: 1,
    marginTop: '2%',
    buttonSave: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  },

  buttonSave: {
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    backgroundColor: '#0CCE6B',
    borderRadius: 10,
    borderColor: '#0CCE6B',
    elevation: 10,
    shadowColor: '#2a2a2a',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderWidth: 1,
    marginTop: '2%',
    text: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  },
  buttonCancel: {
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    backgroundColor: '#D84727',
    borderRadius: 10,
    borderColor: '#D84727',
    elevation: 10,
    shadowColor: '#2a2a2a',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderWidth: 1,
    marginTop: '2%',
    text: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '50%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '10%',
    paddingEnd: '5%',
  },
  error: { color: '#D84727' },
  input: {
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C1C1C1',
    borderWidth: 1,
    marginBottom: '2%',
  },

  picker: {
    // paddingRight: '2%',
    // marginTop: '2%',
    backgroundColor: '#fff',
  },
  pickerRow: {
    flexDirection: 'row',
    width: '50%',
    minHeight: '25%',
  },
})

export default styles
