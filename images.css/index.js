const store = {
    questions: [
        { text: "What HTML stands for?", answerChoices: ["Hyper Text Markup Language.", "Hyper Text Modeling Language.", "Hyper Type Markup Language.", "Hot Text Markup Language."], correctAnswer: "Hyper Text Markup Language." },
        { text: "What are tags?", answerChoices: ["HTML tags are used to create HTML documents and render their properties.", "Elements used to group the body content in a table.", "HTML elements is used to display the data in the tabular form.", "E-commers stickers."], correctAnswer: "HTML tags are used to create HTML documents and render their properties." },
        { text: "How many types of headings does an HTML contain??", answerChoices: ["It contains 6.", "It contains 4.", "It contains 1.", "None of the above."], correctAnswer: "It contains 6." },
        { text: "What’s the function of a <td> tag?", answerChoices: ["It displays the data in the tabular form.", "It defines a table.", "It defines a cell in a table.", "Answers 1 and 2."], correctAnswer: "It defines a cell in a table." },
        { text: "What is semantic HTML?", answerChoices: ["It is a coding style used to reinforce the semantics or meaning of the content.", "It’s HTML that uses bold statements.", "It is used to display a nested webpage.", "A book by Brad Frost."], correctAnswer: "It is a coding style used to reinforce the semantics or meaning of the content." },
        { text: "What an hyperlink applies to?", answerChoices: ["It applies to images.", "It applies to text.", "it applies to both, text and images.", "None of the above."], correctAnswer: "it applies to both, text and images." },
        { text: "The HTML provides an anchor tag to create a hyperlink that links one page to another page. In what of the following ways these tags can appear?", answerChoices: ["Unvisited link - It is displayed, underlined and blue.", "Visited link - It is displayed, underlined and purple.", "Active link - It is displayed, underlined and red.", "All the answers are correct."], correctAnswer: "All the answers are correct." },
        { text: "What’s the Aria role of a HTML header?", answerChoices: ["Banner", "Main", "Navigation", "Quote"], correctAnswer: "Banner" },
        { text: "What is an ordered list?", answerChoices: ["A list that displays elements in numbered format.", "A list that displays elements in bulleted format.", "A list that displays elements like in dictionary.", "A list that displays tags and images."], correctAnswer: "A list that displays elements in numbered format." },
        { text: "What is an image map?", answerChoices: ["It is a feature that allows us to use multicolor text on images.", "It is a feature that allows us to display a nested webpage.", "It is a feature that facilitates us to link many different web pages using a single image.", "It is the image of a map."], correctAnswer: "It is a feature that facilitates us to link many different web pages using a single image." }
    ],

    currQuestionIndex: 0,
    //currentScore: 0
    score: 0,
}