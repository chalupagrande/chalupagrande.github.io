import React, { useRef, useState, useEffect } from "react"
import "./musicPlayer.css"
import { Terrain } from "../../assets/sketches/Terrain"


export function MusicPlayer() {
  const player = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [seek, setSeek] = useState(0)
  const [curTime, setCurTime] = useState(0)
  const [duration, setDuration] = useState(0)

  function handlePlayPause(e) {
    if (!isPaused) {
      player.current.play()
    }
    else {
      player.current.pause()
    }
    setIsPaused(!isPaused)
  }

  function handleSeek(e) {
    e.stopPropagation()
    const seekValue = e.target.value
    setSeek(seekValue)
    const duration = player.current.duration
    const newTime = (duration * seekValue) / 100
    player.current.currentTime = newTime
  }

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  }

  function updateTimes() {
    const currentTimeInSecs = player.current.currentTime
    const durationInSecs = player.current.duration
    setCurTime(calculateTime(currentTimeInSecs))
    setDuration(calculateTime(durationInSecs))
  }

  useEffect(() => {
    if (player) {
      player.current.addEventListener("timeupdate", () => {
        const currentTimeInSecs = player.current.currentTime
        const durationInSecs = player.current.duration
        const seekValue = (currentTimeInSecs / durationInSecs) * 100
        setSeek(seekValue)
        setCurTime(calculateTime(currentTimeInSecs))
        if (currentTimeInSecs === durationInSecs) {
          handlePlayPause()
        }
      })

      player.current.addEventListener('loadedmetadata', () => {
        updateTimes()
      });
    }
  }, [player])

  return (
    <div className="music-player">
      <audio className="hidden" controls ref={player} loop>
        <source
          src="https://chalupagrande.nyc3.cdn.digitaloceanspaces.com/portfolio/audio/neon-echos-1.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="controls-container">
        <div className="controls">
          <span className={`playpause${isPaused ? " paused" : ""}`} onClick={handlePlayPause} />
          <span>{curTime}</span>
          <input type="range" id="seek-slider" max="100" value={seek} onChange={handleSeek} />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  )
}