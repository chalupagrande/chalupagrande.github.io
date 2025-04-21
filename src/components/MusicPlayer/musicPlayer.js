import React, { useRef, useState, useEffect } from "react"
import tracks from "../../assets/tracks"
import "./musicPlayer.css"


export function MusicPlayer() {
  const player = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [seek, setSeek] = useState(0)
  const [curTime, setCurTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [curTrackId, setCurTrackId] = useState(0)

  function handlePlayPause(e) {
    if (!isPaused) {
      player.current.play()
    }
    else {
      player.current.pause()
    }
    setIsPaused(!isPaused)
  }

  function nextTrack() {
    if (curTrackId < tracks.length - 1) {
      setCurTrackId(curTrackId + 1)
    } else {
      setCurTrackId(0)
    }

    player.current.load()
    setTimeout(() => {
      handlePlayPause()
    }, 100)
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
          nextTrack()
        }
      })

      player.current.addEventListener('loadedmetadata', () => {
        updateTimes()
      });
    }
  }, [player])

  return (
    <div className="music-player-container">
      <audio className="hidden" controls ref={player}>
        <source
          src={tracks[curTrackId].source}
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="music-player">
        <div className="track-details">
          <div className="cover">
            <img width="60" src={tracks[curTrackId].cover} alt="Album Cover" />
          </div>
          <div className="track-info">
            <span className="now-playing">now playing:</span>
            <p className="track-title">{tracks[curTrackId].name}</p>
            <p className="artist">by {tracks[curTrackId].artist}</p>
          </div>
        </div>
        <div className="controls">
          <div className="control-btns">
            <span className={`ctl-btn playpause${isPaused ? " paused" : ""}`} onClick={handlePlayPause} />
            <span className="ctl-btn next" onClick={nextTrack} />
          </div>
          <span className="curTime">{curTime}</span>
          <input type="range" id="seek-slider" max="100" value={seek} onChange={handleSeek} />
          <span className="duration">{duration}</span>
        </div>
      </div>
    </div>
  )
}