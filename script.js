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
    quoteCount++;       // ➡ j'incrémente le nombre de citation qd ajout, puis modifie le h3 ci-dessous ⤵
    document.getElementById('count').innerText = `Nombre de citations enregistrées : ${quoteCount} citations`
    let citation = { 
        author: author,
        text: quote
    };
    localStorage.setItem(quoteCount, JSON.stringify(citation))
}

if (quoteCount > 0) {
    
}

// EVENT LISTENERS :
validQuotationButton.addEventListener('click', () => {
    event.preventDefault();     // pour que la page ne se recharge pas quand on clique "Valider"
    if (text.value === "") {
        text.focus();           // si text non rempli, focus sur le champs
    } else if (author.value === "") {
        author.focus();         // si author non rempli, focus sur le champs
    } else {
        addQuote(text.value, author.value);
        text.value = "";            // vide le champs citation
        author.value = "";          // vide le champs auteurice
    }
})


