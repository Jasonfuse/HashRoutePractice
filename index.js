const charList = document.getElementById("charList");
const singleChar = document.getElementById("singleChar");

const state = {
    characters: [],
    singlecharacter: null
};

window.addEventListener("hashchange", () => {
    const name = decodeURI(window.location.hash.slice(1));
    singleChar.innerHTML = name;
});

async function getCharList() {
    const info = await fetch("https://swapi.dev/api/people");
    const charData = await info.json();
    state.characters = charData.results;
    renderCharList();
}

function renderCharList() {
    const allChar = state.characters.map(char => {
        console.log(char);
        return `<div> <a href = "#${char.name}"> ${char.name} </a> </div>`;
    });
    charList.innerHTML = allChar.join('');
}

getCharList();