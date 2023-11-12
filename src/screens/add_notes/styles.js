import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  addNotesText: {
    fontSize: 38,
    fontWeight: 'bold',

    paddingTop: '5%',
    paddingBottom: '5%',
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    position: 'absolute',
    bottom: 25,
    right: 5,
    borderRadius: 100,
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
    width: '100%',
    alignItems: 'center',
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
    marginTop: '4%',

    text: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
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
  header: {
    flexDirection: 'row',
  },
  input: {
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C1C1C1',
    borderWidth: 1,
    marginBottom: '2%',
    minHeight: 100,
  },

  picker: {
    width: '98%',
    borderColor: '#C1C1C1',
    backgroundColor: '#fff',
  },
  pickerRow: {
    flexDirection: 'row',
    width: '50%',

    paddingTop: '5%',
    alignContent: 'center',
  },
})

export default styles
