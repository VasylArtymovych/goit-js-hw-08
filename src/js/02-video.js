    import throttle from "lodash.throttle";

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const STORAGE_KEY_PLAYTIME = "videoplayer-current-time";

    player.on('timeupdate', throttle(onPlay, 1000));

    function onPlay(data){
        const timePlayed = JSON.stringify(data.seconds);
        localStorage.setItem(STORAGE_KEY_PLAYTIME, timePlayed);
    };

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    let savedPlayTime = JSON.parse(localStorage.getItem(STORAGE_KEY_PLAYTIME));

    player.setCurrentTime(savedPlayTime);