const addCommentBtn = document.getElementById('addCommentBtn');
const newCommentInput = document.getElementById('newComment');
const commentsContainer = document.getElementById('commentsContainer');

addCommentBtn.addEventListener('click', () => {
  const text = newCommentInput.value.trim();
  if (text === "") return; // ignore empty

  // Create a new comment box
  const commentBox = document.createElement('div');
  commentBox.className = 'comment-box';
  commentBox.style.marginBottom = '8px'; // same spacing

  // Create header with username and date
  const h3 = document.createElement('h3');
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  h3.textContent = `Guest — ${formattedDate}`;

  // Create paragraph for comment text
  const p = document.createElement('p');
  p.textContent = text;

  // Append header and paragraph to comment box
  commentBox.appendChild(h3);
  commentBox.appendChild(p);

  // Add the new comment at the top of the vertical list
  commentsContainer.insertBefore(commentBox, commentsContainer.firstChild);

  // Clear textarea
  newCommentInput.value = '';
});
