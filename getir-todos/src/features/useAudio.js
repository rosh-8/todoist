import { useState, useEffect } from "react";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        console.log(playing, '-cjeck playing stat', audio, 'check url');
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => { //todo-why ended is needed, I copied this!
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };

  export default useAudio;