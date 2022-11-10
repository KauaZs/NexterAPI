const QuestionsData = require('../../utils/questions.json')
module.exports = async function ShowQuestion(req, res) {
  const result = QuestionsData[(~~(Math.random() * QuestionsData.length))]

  res.status(200).send({
    "question": result.question,
    "answer": result.answer
  })
}