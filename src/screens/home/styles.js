import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '10%',
    paddingEnd: '5%',
  },
  deleteNote: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 0,
    top: '25%',
    borderRadius: 40,
    marginRight: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingbutton: {
    borderWidth: 1,
    borderColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    position: 'absolute',
    bottom: 30,
    right: 25,
    height: 50,
    backgroundColor: '#800080',
    borderRadius: 100,
  },
  noNotes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    text: {
      fontSize: 16,
    },
  },
  notes: {
    backgroundColor: '#C589E8',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
    marginBottom: 20,
    flex: 1,
  },
  noteText: {
    lineHeight: 1,
    fontWeight: 'bold',
    fontWeight: 18,
  },
  welcomeText: {
    fontSize: 38,
    fontWeight: 'bold',

    paddingTop: '5%',
    paddingBottom: '5%',
  },
  view: { paddingLeft: '2%', paddingRight: '2%' },
})

export default styles
