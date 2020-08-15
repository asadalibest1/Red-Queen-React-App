import React, { useLayoutEffect, useRef } from 'react';
import '../css/alice.css';

export default function Alice() {

const aliceSprite = useRef(null);
  useLayoutEffect(() => {
      var spriteFrames = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }   
      ];

      var alice = aliceSprite.current.animate(
        spriteFrames, {
          easing: 'steps(7, end)',
          direction: "reverse",
          duration: 500,
          playbackRate: 1,
          iterations: Infinity
        });

      setInterval( function() {
        if (alice.playbackRate > .4) {
          alice.playbackRate -= .1;
        } 
      }, 3000);

  })

  return (
    <div className="container">
    <div className="alice">
    <img className="alicesprite" ref={aliceSprite} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" alt=" " />
        </div>
    </div>

    );
};