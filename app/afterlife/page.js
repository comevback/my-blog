const VideoPage = () => {
    return (
        <div style={{
            margin: 0,
            padding: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            backgroundColor: 'black'
        }}>
            <video controls autoPlay style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
            }}>
                <source src="/afterlife.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPage;