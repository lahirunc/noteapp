class NoteModel {
  constructor(notes, category, client) {
    this.notes = notes
    this.category = category
    this.client = client
  }

  static fromJSON(json) {
    // const data = JSON.parse(json)
    return new NoteModel(json)
  }
}

export default NoteModel
