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
        //   adjustSceneryPlayback();
        } 
      }, 3000);

    // Scenery
      var sceneryFrames =   [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }   
      ];
      
      var sceneryTimingBackground = {
        duration: 36000,
        iterations: Infinity
      };
       
      var sceneryTimingForeground = {
        duration: 12000,
        iterations: Infinity
      };

    //   var foregroundMovement = foreground.current.animate(sceneryFrames, sceneryTimingForeground);
    //   var backgroundMovement = background.current.animate(sceneryFrames, sceneryTimingBackground);

    //   var sceneries = [foregroundMovement];

    //   var adjustSceneryPlayback = function() {
    //     console.log(alice.playbackRate)
    //     if (alice.playbackRate < .8) {
    //       sceneries.forEach(function(anim) {
    //         anim.playbackRate = alice.playbackRate/2 * -1;
    //       });
    //     } else if (alice.playbackRate > 1.2) {
    //       sceneries.forEach(function(anim) {
    //         anim.playbackRate = alice.playbackRate/2;
    //       });
    //     } else {
    //       sceneries.forEach(function(anim) {
    //         anim.playbackRate = 0;    
    //       });
    //     }   
    //   }
    //   adjustSceneryPlayback();

    //   const goFaster = () => {
    //     alice.playbackRate += 0.1;
    //     // adjustSceneryPlayback();
    //   }
  
    //   window.addEventListener("click", goFaster);
  })

  
  
  return (
    <div className="container">
    <div className="alice">
    <img className="alicesprite" ref={aliceSprite} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" alt=" " />
        </div>
    </div>

    );
};