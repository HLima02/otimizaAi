import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  rowCard: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    backgroundColor: '#eee',
    borderColor: '#ddd',
    borderRadius: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rowCardText: {
    fontSize: 15,
    width: '85%'
  },
  rowCardBoxIcons: {
    width: '12%',
    flexDirection: 'row',
    gap: 5
  }
})