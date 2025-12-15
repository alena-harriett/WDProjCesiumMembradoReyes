document.addEventListener('DOMContentLoaded', () => {
    const addCommentBtn = document.getElementById('addCommentBtn');
    const newCommentInput = document.getElementById('newComment');
    const commentsContainer = document.getElementById('commentsContainer');

    // Load comments from localStorage when the page loads
    loadComments();

    addCommentBtn.addEventListener('click', addComment);

    function addComment() {
        const commentText = newCommentInput.value.trim();

        if (commentText !== '') {
            createCommentElement(commentText);
            saveComment(commentText); // Save the new comment
            newCommentInput.value = ''; // Clear the input field
        }
    }

    function createCommentElement(text) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment'); // Use a CSS class for styling

        const commentTextNode = document.createElement('p');
        commentTextNode.textContent = text;

        commentDiv.appendChild(commentTextNode);
        commentsContainer.appendChild(commentDiv);
    }

    function saveComment(text) {
        // Retrieve existing comments or initialize an empty array
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(text);
        // Save the updated array back to localStorage
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(commentText => {
            createCommentElement(commentText);
        });
    }
});

