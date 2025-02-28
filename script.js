console.log('Hello ! 👋');

// VARIABLES :
const quotationForm = document.querySelector('#quotation-form');
const text = document.querySelector('#quotation-input');
const author = document.querySelector('#author-input');
const validQuotationButton = document.querySelector('#valid-quotation');
const quoteList = document.querySelector('#quote-list');
let quoteCount = 0;

// FONCTIONS : 
const addQuote = (quote, author) => {
    const newDiv = document.createElement("div");
    newDiv.className = "quote";
    const newQuote = document.createElement("p");
    newQuote.className = "text";
    newQuote.innerText = quote;
    const newAuthor = document.createElement("p");
    newAuthor.className = "author";
    newAuthor.innerText = author;
    newDiv.appendChild(newQuote);
    newDiv.appendChild(newAuthor);
    quoteList.appendChild(newDiv);
    quoteCount++;
    document.getElementById('count').innerText = `Nombre de citations enregistrées : ${quoteCount} citations`
}

// EVENT LISTENERS :
validQuotationButton.addEventListener('click', () => {
    event.preventDefault();
    addQuote(text.value, author.value);
})


