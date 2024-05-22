async function addQuestion(question, answer, topic) {
    try {
      const response = await fetch('/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer, topic }),
      });
  
      if (response.ok) {
        alert('Question added successfully!');
      } else {
        alert('Failed to add question.');
      }
      const questionElement = document.getElementById('question').value = "";
      const answerElement = document.getElementById('answer').value = "";
      const ratingElement = document.getElementById('topic').value = "";
    } catch (error) {
      console.log(error);
    }
  }
  
  document.getElementById('add-question-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const topicElement = document.getElementById('topic');
  
    const question = questionElement.value;
    const answer = answerElement.value;
    const topic = topicElement.value;
  
    await addQuestion(question, answer, topic);
  });