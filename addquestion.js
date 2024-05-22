async function addQuestion(question, answer, rating) {
    try {
      const response = await fetch('/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer, rating }),
      });
  
      if (response.ok) {
        alert('Question added successfully!');
      } else {
        alert('Failed to add question.');
      }
      const questionElement = document.getElementById('question').value = "";
      const answerElement = document.getElementById('answer').value = "";
      const ratingElement = document.getElementById('rating').value = "";
    } catch (error) {
      console.log(error);
    }
  }
  
  document.getElementById('add-question-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const ratingElement = document.getElementById('rating');
  
    const question = questionElement.value;
    const answer = answerElement.value;
    const rating = ratingElement.value;
  
    await addQuestion(question, answer, rating);
  });