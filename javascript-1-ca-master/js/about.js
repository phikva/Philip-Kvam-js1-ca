const selectContainer = document.querySelector(".container.content");
const selectHeading = document.querySelector("h1");
const selectText = document.querySelector(".about");


function replaceWords() {
    
    selectHeading.innerHTML = "Replaced History of Rick and Morty"
    selectText.innerHTML= "Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. Replaced series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing replaced rest of the family. Replaced series originated from an animated short parody film of Back to replaced Future, created by Roiland for Channel 101, a short film festival co-founded by Harmon. Replaced series has been acclaimed by critics for its originality, creativity and humor"
    
}
setTimeout(replaceWords, 4000);