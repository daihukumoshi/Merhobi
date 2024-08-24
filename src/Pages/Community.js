import React, { useEffect, useRef, useState, createRef } from 'react';
import Footer from '../Components/footer';
import '../css/Community.css'; // CSSファイルをインポート

export default function Community({ links }) {

    const scrollViewRef = useRef(null);
    const videoRefs = useRef(links.map(() => createRef()));

    useEffect(() => {
        const scrollView = scrollViewRef.current;
        if (!scrollView) return;
        const observers = [];
      
        for (let i = 0; i < links.length; i++) {
          const video = videoRefs.current[i].current;
          if (!video) continue;
      
          const callback = (entries) => {
            for (const entry of entries) {
              if (entry.intersectionRatio === 1.0) {
                videoRefs.current.forEach((ref) => {
                  const video2 = ref.current;
                  video2 === entry.target ? video2.play() : video2?.pause();
                });
              }
            }
          };
          const options = { root: scrollView, threshold: 1 };
          const observer = new IntersectionObserver(callback, options);
          observer.observe(video);
          observers.push(observer);
        }
      
        return () => observers.forEach((observer) => observer.disconnect());
    }, [links]);

    const View = ({ links }) => {
        const [muted, setMuted] = useState(true);

        return (
          <div ref={scrollViewRef} className="scroll-view">
            {links.map((link, i) => (
              <div key={i} className="content">
                <video
                  src={link}
                  muted={muted}
                  autoPlay
                  playsInline
                  ref={videoRefs.current[i]}
                  className="video"
                  onClick={() => setMuted(false)}
                />
              </div>
            ))}
          </div>
        );
    };

    return (
        <div className="App">
            <View links={links} />
            <Footer />
        </div>
    );
}
