import React, { useState, useEffect, useRef } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import IconButton from '@mui/material/IconButton';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [startScreen, setStartScreen] = useState('0:00');
    const [endScreen, setEndScreen] = useState('0:00');

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const { currentTime, duration } = videoRef.current;
            const progress = (currentTime / duration) * 100;
            setProgress(progress);
            setStartScreen(formatTime(currentTime));
            setEndScreen(formatTime(duration - currentTime));
        }
    };

    const handleSeek = (e) => {
        if (videoRef.current) {
            const newTime = (e.target.value / 100) * videoRef.current.duration;
            videoRef.current.currentTime = newTime;
            setProgress(e.target.value);
            setStartScreen(formatTime(newTime));
        }
    };

    const handleVolumeChange = (e) => {
        if (videoRef.current) {
            const newVolume = e.target.value;
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
        }
    };

    const handleFullScreen = () => {
        if (videoRef.current) {
            if (!isFullScreen) {
                videoRef.current.requestFullscreen().catch(err => console.log(err));
            } else {
                document.exitFullscreen().catch(err => console.log(err));
            }
            setIsFullScreen(!isFullScreen);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
        setStartScreen('0:00');
    };

    useEffect(() => {
        const video = videoRef.current;
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('ended', handleEnded);
        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('ended', handleEnded);
        };
    }, []);

    return (
        <div className={`relative mx-auto my-6 max-w-xl ${isFullScreen ? 'fixed inset-0' : ''}`}>
            <video
                ref={videoRef}
                className={`w-full ${isFullScreen ? 'h-full object-cover' : ''}`}
                controls={false}
            >
                <source src="theme.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 flex items-center justify-between">
                <IconButton onClick={handlePlayPause}>
                    {isPlaying ? (
                        <PauseIcon className="text-white" />
                    ) : (
                        <PlayArrowIcon className="text-white" />
                    )}
                </IconButton>
                <span className="text-white text-sm">{startScreen}</span>
                <input
                    type="range"
                    value={progress}
                    onChange={handleSeek}
                    className="w-1/2 mx-2 accent-blue-500"
                />
                <span className="text-white text-sm">{endScreen}</span>
                <div className="flex items-center space-x-2">
                    <IconButton onClick={() => handleVolumeChange({ target: { value: volume > 0 ? 0 : 1 } })}>
                        {volume > 0 ? (
                            <VolumeUpIcon className="text-white" />
                        ) : (
                            <VolumeOffIcon className="text-white" />
                        )}
                    </IconButton>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-1/6 mx-2 accent-blue-500"
                    />
                    <IconButton onClick={handleFullScreen}>
                        {isFullScreen ? (
                            <FullscreenExitIcon className="text-white" />
                        ) : (
                            <FullscreenIcon className="text-white" />
                        )}
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
