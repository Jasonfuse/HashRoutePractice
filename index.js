const charList = document.getElementById("charList");
const singleChar = document.getElementById("singleChar");

const state = {
    characters: [],
    singleCharacter: null
};

window.addEventListener("hashchange", () => {
    const hash = decodeURI(window.location.hash.slice(1));
    const single = state.characters.find(char => {
        return char.name === hash;
    })

    if(single) singleChar.innerHTML = single.name;
    else singleChar.innerHTML = '';
});

// Refresh/page loading functions
async function render() {
    await getCharList();
    renderCharList();
}

async function getCharList() {
    const info = await fetch("https://swapi.dev/api/people");
    const charData = await info.json();
    state.characters = charData.results;
    const hash = decodeURI(window.location.hash.slice(1));
    const single = state.characters.find(char => {
        return char.name === hash;
    })

    if(single) singleChar.innerHTML = single.name;
    else singleChar.innerHTML = '';
}

// '' = use to get the whole name of the string for href
function renderCharList() {
    const html = state.characters.map((char) => {
        const charName = char.name;
        return `<div> <a href = '#${charName}'> ${char.name} </a> </div>`;
    });
    charList.innerHTML = html.join('');
}

render();

//TODO
/*
    use url to see what page you want to be in 
    server-side page
*/