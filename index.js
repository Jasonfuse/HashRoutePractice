const charList = document.getElementById("charList");
const singleChar = document.getElementById("singleChar");

const state = {
    characters: [],
    singlecharacter: null
};

// window.addEventListener("hashchange", () => {
//     selectSingleChar();
// });

// function selectSingleChar() {
//     getEventFromHash();
//     renderPokemonDetails();
// }

async function getCharList() {
    const info = await fetch("https://swapi.dev/api/people");
    const charData = await info.json();
    state.characters = charData.results;
}

function renderCharList() {
    const allChar = state.characters.map((char) => {
        return `<div> ${char.name} </div>`;
    });
    charList.innerHTML = allChar.join('');
}

getCharList();