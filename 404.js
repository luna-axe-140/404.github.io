window.onload = file();

function file(){
    var videos = [
        'media/Catvid1.mp4',
        'media/Catvid2.mp4',
        'media/Catvid3.mp4'
    ];
    var randomvid = Math.floor(Math.random()*videos.length);
    var vid = videos[randomvid];
    var VideoElement = document.getElementById('vidbg');
    VideoElement.src = vid;
    VideoElement.load();
    VideoElement.play();
}