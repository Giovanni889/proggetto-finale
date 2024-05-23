window.addEventListener("DOMContentLoaded", e => {
  let updateButton = document.querySelector("#updateButton");
  updateButton.addEventListener("click", e => {
    let targetButton = e.target;
    const newQuestion = document.getElementById('question').value;
    const newAnswer = document.getElementById('answer').value;
    const newTopic = document.getElementById('topic').value;
    const idQuestion = document.getElementById('idquestion').value;
    
    const question = {
      question: newQuestion,
      answer: newAnswer,
      topic: newTopic
    };

    fetch(`/questions/${idQuestion}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(question)
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        displayQuestions();
      })
      .catch(error => console.log(error));
  });
});

function displayQuestions() {
    fetch('/questions')
      .then(response => response.json())
      .then(data => {
        const questionList = document.getElementById('question-list');
        questionList.innerHTML = '';
  
        data.forEach(question => {
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item';
          listItem.innerHTML = `
            <strong>Domanda:</strong><div id="question-${question.id}">${question.question}</div><br>
            <strong>Risposta:</strong><div id="answer-${question.id}">${question.answer}</div><br>
            <strong>Materia:</strong><div id="topic-${question.id}">${question.topic}</div><br>
            <button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#editModal" onclick="editQuestion(${question.id})">Modifica</button>
            <button class="btn btn-sm btn-danger" onclick="deleteQuestion(${question.id})">Elimina</button>
          `;
          questionList.appendChild(listItem);
        });
      })
      .catch(error => console.log(error));
  }
  
  function editQuestion(id) {
    const questionElement = document.getElementById(`question-${id}`).innerText;
    const answerElement = document.getElementById(`answer-${id}`).innerText;
    const topicElement = document.getElementById(`topic-${id}`).innerText;

    document.getElementById('question').value = questionElement;
    document.getElementById('answer').value = answerElement;
    document.getElementById('topic').value = topicElement;
    document.getElementById('idquestion').value = id;

  }
  
  function deleteQuestion(id) {
    if (confirm('Are you sure you want to delete this question?')) {
      fetch(`/questions/${id}`, {
        method: 'DELETE'
      })
        .then(response => response.text())
        .then(data => {
          alert(data);
          displayQuestions();
        })
        .catch(error => console.log(error));
    }
  }
  
displayQuestions();
  