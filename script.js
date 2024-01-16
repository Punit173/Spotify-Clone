console.log("Welcome to spotify");
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myscroll');
let gif = document.getElementById('gif');

let songs =[
    {songName: "Ishq Sufiyana", filePath:"songs/1.mp3", coverPath: "covers/coverpage1.jpg"},
    {songName: "Pee Loon", filePath:"songs/2.mp3", coverPath: "covers/coverpage2.jpg"},
    {songName: "Bakhuda Tumhi Ho", filePath:"songs/3.mp3", coverPath: "covers/coverpage3.jpg"},
    {songName: "Pehli Nazar Mein", filePath:"songs/4.mp3", coverPath: "covers/coverpage4.jpg"},
    {songName: "Teri Ore", filePath:"songs/5.mp3", coverPath: "covers/coverpage5.jpg"},
    {songName: "Rishte Naate", filePath:"songs/6.mp3", coverPath: "covers/coverpage6.jpg"}
];


// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
});

audioElement.addEventListener('time',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});