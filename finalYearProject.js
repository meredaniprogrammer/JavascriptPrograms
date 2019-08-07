//To access the synthesis API
const synth = window.speechSynthesis;

//Grabing all the DOM elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

//Init voices arrays
let voices = [];

//Using arrow function to create a function called getvoices

const getVoices = () => {
    voices = synth.getVoices();
    //looping through voices and create an option for each one
    voices.forEach(voice => {
        //Creating an option element
        const option = document.createElement('option')
        //filling the option with the voice and language
        option.textContent = voice.name + '('+ voice.lang +')';
        //Set needed option attribute
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
};
getVoices();
if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;
}
//Speak
const speak = () =>{
    //check if speaking
    if(synth.speaking){
        console.error('Already speaking.....');
        return;
    }
    if(textInput.value !== ''){
        //Get speak text
        const speakText = new SpeechSynthesisUtterance(textInput.value);
        //Speak end
        speakText.onerror = e => {
            console.error('Something went wrong');
        }
        //Selected voice
        const selectedVoice = voiceSelect.selectedOptions[0]
        .getAttribute('data-name');
        
        //Loop through voices
        voices.forEach(voice => {
            if(voice.name === selectedVoice){
                speakText.voice = voice

            }
        });
        
        //Set pitch and rate
        speakText.rate = rate.value;
        speakText.pitch = pitch.value
        //speak
        synth.speak(speakText);

    }
};

//EVENT LISTENER

//Text form submit
textForm.addEventListener('submit', e =>{
    e.preventDefault();
    speak();
    textInput.blur();
});

//Rate Value change
rate.addEventListener('change', e => (rateValue.textContent = rate.value));

//Pitch Value change
pitch.addEventListener('change', e => (rateValue.textContent = pitch.value));

//Voice select change
voiceSelect.addEventListener('change', e => speak());



