// PSEUDO CODE FOR ADDING A COMMENT

// User fills out comment form and clicks "submit" button
// Form automatically clears (like to-do-list exercise)
// JS grabs the values from the fields
// Use JS to build & append the html elements that create the comment box.
// Js inserts the values onto the page

// Add listener to the submit button and prevent form from refreshing with "prevent default"

// ---->I don't understand why it says 'form' in the brackets... aren't we trying to specify the submit button? It didn't work when I had the button in there. Is this a "bubbling" situation?
const formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Your comment has been submitted.');


    // ----------------------------------------
    // create outermost div with class "comment"
    // ----------------------------------------
    const commentDiv = document.createElement('div');

    // add class name "comment" to the div
    commentDiv.className = 'new-comment';

    // append div.comment to its parent, "comment-container"
    document.querySelector('.comment-container').appendChild(commentDiv);


    // ----------------------------------------
    // Creating Div with Class "comment-img-container" & Adding an IMG to It
    // ----------------------------------------
    const commentImgContainer = document.createElement('div');

    // add class name "comment" to the div
    commentImgContainer.className = 'comment-img-container';

    // append div.comment-img-container to its parent, "comment"
    commentDiv.appendChild(commentImgContainer);

    // add image file as inner HTML to the div "comment-img-container" on every new submit.

    commentImgContainer.innerHTML = '<img class="comment-portraits" src="https://source.unsplash.com/random/70×70/?portrait" alt="Portrait of user.">';

    // console.log(commentDiv);
    // console.log(commentImgContainer);


    // ----------------------------------------
    // Creating Div with Class "comment-text-container"
    // ----------------------------------------
    const commentTextContainerDiv = document.createElement('div');

    // add class name "comment-text-container" to the div
    commentTextContainerDiv.className = 'new-comment-text-container';

    // insert commentTextContainerDiv adjacent to commentImgContainer, "beforeend" signifies putting it just inside the targetElement, after it's last child. Syntax is .insertAdjacentElement('position', element);

    commentDiv.insertAdjacentElement('beforeend', commentTextContainerDiv);

    // console.log(commentTextContainerDiv);


    // ----------------------------------------
    // Targeting Name Input in the Form
    // ----------------------------------------
    const nameInput = document.querySelector(".comment-name-input");
    // console.log(nameInput.value)
    const logName = nameInput.value;
    // console.log(logName);

    if (logName) {
        // console.log(logName);
        // create a div element to contain the name "p" element
        const nameReplyDiv = document.createElement('div');

        // add class name "name-reply" to the div
        nameReplyDiv.className = 'new-name-reply';

        // select the div.name-reply and add it to the .comment-text-container as it's child.
        commentTextContainerDiv.appendChild(nameReplyDiv);

        // create a p element to contain the user's name input
        const nameReplyText = document.createElement('p');

        // put the user's input into the task(i.e. logName)
        nameReplyText.textContent = logName;

        // select the div and add the nameReplyText <p> as it's child. 
        nameReplyDiv.appendChild(nameReplyText);

        // console.log(nameReplyDiv);
        // console.log(nameReplyText.innerText);
        // clear the input to an empty string
        nameInput.value = '';

        // ----------------------------------------
        // Adding Reply Button 
        // ----------------------------------------

        // create an anchor tag with a Reply <p> tag inside to contain the user's name input
        const replyAnchor = document.createElement('a');

        replyAnchor.classList = 'new-reply-link';
        replyAnchor.href = '#leave-a-comment';
        replyAnchor.innerHTML = '<p>- Reply</p>';

        // append the "Reply" <a> tag to the .comment-text-container. 
        nameReplyDiv.appendChild(replyAnchor);

        // console.log(replyAnchor);
        // Resources to figure this out:
        // 1. Adding href link to the <a> tag I created:
        // https://www.w3schools.com/jsref/prop_anchor_href.asp
        // ___________.href = "url goes here";
    };



    // ----------------------------------------
    // Targeting Subject Input in the Form
    // ----------------------------------------
    // Select the subject text input
    const subjectInput = document.querySelector(".comment-subject-input");

    const logSubject = subjectInput.value;
    // console.log(logSubject);

    if (logSubject) {

        // create a p element to contain the user's name input
        const subjectParagraph = document.createElement('p');

        // add class to subjectParagraph so you can style it in CSS
        subjectParagraph.classList = 'subject-paragraph';

        // put the user's input into the task(i.e. logSubject)
        subjectParagraph.textContent = logSubject;

        // select the .comment-text-container div and append the subject paragraph to it. 
        commentTextContainerDiv.appendChild(subjectParagraph);

        // console.log(subjectParagraph.innerText);

        // clear the input to an empty string
        subjectInput.value = '';

    };

    // ----------------------------------------
    // Targeting Comment Input in the Form
    // ----------------------------------------
    const commentInput = document.querySelector(".comment-content-input");

    const logComment = commentInput.value;
    // console.log(logComment);

    if (logComment) {

        // create a p element to contain the user's name input
        const commentParagraph = document.createElement('p');

        // put the user's input into the task(i.e. logComment)
        commentParagraph.textContent = logComment;

        // select the div and add the nameReplyText <p> as it's child. 
        commentTextContainerDiv.appendChild(commentParagraph);

        // console.log(commentTextContainerDiv);
        // console.log(commentParagraph.innerText);

        // clear the input to an empty string
        commentInput.value = '';
    };

    // ----------------------------------------
    // Targeting Email Input in the Form
    // ----------------------------------------
    // I won't be logging their email anywhere, but I will make it refresh to a blank box. 
    const emailInput = document.querySelector(".comment-email-input");

    const logEmail = emailInput.value;
    // console.log(logEmail);

    if (logEmail) {
        // clear the input to an empty string
        emailInput.value = '';
    };


    // ----------------------------------------
    // Adding Date to End of Comment
    // ----------------------------------------

    // create an <p> tag with the Date posted inside that will be added to the end of the .comment-text-container div.
    const commentDateStamp = document.createElement('p');
    // append the dateStamp to the .comment-text-container. 
    commentTextContainerDiv.appendChild(commentDateStamp);

    // Create a current timestamp when submit button is clicked and input it into the commentDateStamp textContent.
    const dateEvent = new Date();
    const fullDateStamp = dateEvent.toDateString();
    const fullTimeStamp = dateEvent.getHours() + ":" + dateEvent.getMinutes();
    // Adding the date/time stamp variables in a string to print in my comment.
    commentDateStamp.textContent = `${fullDateStamp} at ${fullTimeStamp}`;

    // Resources to figure this out:
    // 1. toDateString()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
    // 2. toTimeString()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString
    // 3. Formatting toTimeString()
    // https://stackoverflow.com/questions/43826821/formatting-the-totimestring-method


});




