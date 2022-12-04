import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { TargetItems } from "./home-animation-supports";

export const HomeScrollAnimation = ({ resize }) => {
  //console.log(resize);
  return (
    <Controller>
      <Scene
        duration={1000}
        // indicators={true}
        triggerElement={"#animation"}
        triggerHook={0.15}
        // pin={("#animation", { pushFollowers: false })}
      >
        {(progress) => (
          <Timeline totalProgress={progress} paused target={<TargetItems />}>
            {resize < 3800 ? (
              resize < 1000 ? (
                resize < 680 ? (
                  <>
                    <Tween
                      to={{
                        y: "5vh",
                        x: "-50vw",
                        scrollTrigger: {
                          trigger: "#img",
                          start: "-100% 14%",
                          end: "100% 35%",
                          scrub: 1.5,
                        },
                      }}
                      target="img1"
                      position="0"
                      duration={0.5}
                    />
                    <Tween
                      to={{
                        y: "5vh",
                        x: "-50vw",
                        scrollTrigger: {
                          trigger: "#img",
                          start: "-100% 14%",
                          end: "100% 35%",
                          scrub: 1.5,
                        },
                      }}
                      target="img2"
                      position="0"
                      duration={0.5}
                    />
                    <Tween
                      to={{
                        y: "5vh",
                        x: "50vw",
                        scrollTrigger: {
                          trigger: "#img",
                          start: "-100% 14%",
                          end: "100% 35%",
                          scrub: 1.5,
                        },
                      }}
                      target="img4"
                      position="0"
                      duration={0.5}
                    />
                    <Tween
                      to={{
                        y: "5vh",
                        x: "50vw",
                        scrollTrigger: {
                          trigger: "#img",
                          start: "-100% 14%",
                          end: "100% 35%",
                          scrub: 1.5,
                        },
                      }}
                      target="img5"
                      position="0"
                      duration={0.5}
                    />
                    {/*  scrolling big image  */}
                    <Tween
                      to={{
                        maxHeight: "2500px",
                      }}
                      target="img3"
                      position="0"
                      duration={0}
                    />
                    <Tween
                      from={{
                        top: "10%",
                      }}
                      to={{
                        width: "100vw",
                        top: "60vh",
                        objectPosition: "50% -55%",
                        scrollTrigger: {
                          trigger: "#mainImg",
                          start: "-100% 10%",
                          end: "100% 35%",
                          scrub: 1,
                        },
                      }}
                      target="img3"
                      position="0"
                      duration={1}
                    />
                    <Tween
                      to={{
                        height: "100vh",
                        scrollTrigger: {
                          trigger: "#mainImg",
                          start: "-100% 10%",
                          end: "100% 35%",
                          scrub: 1,
                        },
                      }}
                      target="img3"
                      position="0.2"
                      duration={1}
                    />
                    {/* shadow */}
                    <Tween
                      to={{
                        width: "100vw",
                        right: "0",
                        display: "flex",
                        height: "40vh",
                        scrollTrigger: {
                          trigger: "#shadow",
                          start: "-100% bottom",
                          end: "140% center",
                          scrub: 1,
                        },
                      }}
                      target="shadow"
                      duration={0}
                    />
                    <Tween
                      to={{
                        top: "20%",
                        scrollTrigger: {
                          trigger: "#shadow",
                          start: "0% center",
                          end: "100% center",
                          scrub: 1,
                        },
                      }}
                      target="shadow"
                      duration={1}
                    />
                    <Tween
                      to={{
                        top: "50%",
                        scrollTrigger: {
                          trigger: "#detailText",
                          start: "0 center",
                          end: "50% center",
                          scrub: 1,
                          markers: true,
                        },
                      }}
                      target="detailText"
                    />
                  </>
                ) : (
                  <>
                    <Tween
                      to={{
                        y: "5vh",
                        x: "-60vw",
                        scrollTrigger: {
                          trigger: "#img",
                          start: "0 25%",
                          end: "100% 35%",
                          scrub: 1.5,
                        },
                      }}
                      target="img1"
                      position="0"
                      duration={0.5}
                    />
                    <Tween
                      to={{
                        y: "5vh",
                        x: "-60vw",
                        scrollTrigger: {
                          trigger: "#img",
                          start: "0 25%",
                          end: "100% 35%",
                          scrub: 1.5,
                        },
                      }}
                      target="img2"
                      position="0"
                      duration={0.5}
                    />
                    <Tween
                      to={{
                        y: "5vh",
                        x: "60vw",
                        scrollTrigger: {
                          trigger: "#img",
                          start: "0 25%",
                          end: "100% 35%",
                          scrub: 1.5,
                        },
                      }}
                      target="img4"
                      position="0"
                    />
                    <Tween
                      to={{
                        y: "5vh",
                        x: "60vw",
                        scrollTrigger: {
                          trigger: "#img",
                          start: "0 25%",
                          end: "100% 35%",
                          scrub: 1.5,
                        },
                      }}
                      target="img5"
                      position="0"
                    />
                    {/*  scrolling big image  */}
                    <Tween
                      to={{
                        maxHeight: "2500px",
                      }}
                      target="img3"
                      position="0"
                      duration={0}
                    />
                    <Tween
                      from={{
                        top: "10%",
                      }}
                      to={{
                        height: "190vh",
                        width: "100vw",
                        top: "60vh",
                        objectPosition: "50% -60%",
                        scrollTrigger: {
                          trigger: "#mainImg",
                          start: "0 21%",
                          end: "100% 35%",
                          scrub: 1,
                        },
                      }}
                      target="img3"
                      position="0"
                      duration={1}
                    />
                    {/* shadow */}
                    <Tween
                      to={{
                        top: "100vh",
                        width: "100vw",
                        right: "0",
                        display: "flex",
                        height: "800px",
                        scrollTrigger: {
                          trigger: "#shadow",
                          start: "-100% bottom",
                          end: "140% center",
                        },
                      }}
                      target="shadow"
                      duration={0}
                    />
                  </>
                )
              ) : (
                <>
                  <Tween
                    to={{
                      y: "5vh",
                      x: "-60vw",
                      scrollTrigger: {
                        trigger: "#img",
                        start: "0 25%",
                        end: "100% 35%",
                        scrub: 1.5,
                      },
                    }}
                    target="img1"
                    position="0"
                    duration={0.5}
                  />
                  <Tween
                    to={{
                      y: "5vh",
                      x: "-60vw",
                      scrollTrigger: {
                        trigger: "#img",
                        start: "0 25%",
                        end: "100% 35%",
                        scrub: 1.5,
                      },
                    }}
                    target="img2"
                    position="0"
                    duration={0.5}
                  />
                  <Tween
                    to={{
                      y: "5vh",
                      x: "60vw",
                      scrollTrigger: {
                        trigger: "#img",
                        start: "0 25%",
                        end: "100% 35%",
                        scrub: 1.5,
                      },
                    }}
                    target="img4"
                    position="0"
                  />
                  <Tween
                    to={{
                      y: "5vh",
                      x: "60vw",
                      scrollTrigger: {
                        trigger: "#img",
                        start: "0 25%",
                        end: "100% 35%",
                        scrub: 1.5,
                      },
                    }}
                    target="img5"
                    position="0"
                  />
                  {/*  scrolling big image  */}
                  <Tween
                    to={{
                      maxHeight: "2500px",
                    }}
                    target="img3"
                    position="0"
                    duration={0}
                  />
                  <Tween
                    from={{
                      top: "10%",
                    }}
                    to={{
                      height: "190vh",
                      width: "100vw",
                      top: "60vh",
                      objectPosition: "50% -60%",
                      scrollTrigger: {
                        trigger: "#mainImg",
                        start: "0 21%",
                        end: "100% 35%",
                        scrub: 1,
                      },
                    }}
                    target="img3"
                    position="0"
                    duration={1}
                  />
                  {/* shadow */}
                  <Tween
                    to={{
                      top: "100vh",
                      width: "100vw",
                      right: "0",
                      display: "flex",
                      height: "800px",
                      scrollTrigger: {
                        trigger: "#shadow",
                        start: "-100% bottom",
                        end: "140% center",
                      },
                    }}
                    target="shadow"
                    duration={0}
                  />
                </>
              )
            ) : (
              <>
                <Tween
                  to={{
                    y: "5vh",
                    x: "-60vw",
                    scrollTrigger: {
                      trigger: "#img",
                      start: "0 25%",
                      end: "100% top",
                      scrub: 2.5,
                    },
                  }}
                  target="img1"
                  position="0"
                  duration={0.5}
                />
                <Tween
                  to={{
                    y: "5vh",
                    x: "-60vw",
                    scrollTrigger: {
                      trigger: "#img",
                      start: "0 25%",
                      end: "100% top",
                      scrub: 2.5,
                    },
                  }}
                  target="img2"
                  position="0"
                  duration={0.5}
                />
                <Tween
                  to={{
                    y: "5vh",
                    x: "60vw",
                    scrollTrigger: {
                      trigger: "#img",
                      start: "0 25%",
                      end: "100% top",
                      scrub: 2.5,
                    },
                  }}
                  target="img4"
                  position="0"
                />
                <Tween
                  to={{
                    y: "5vh",
                    x: "60vw",
                    scrollTrigger: {
                      trigger: "#img",
                      start: "0 25%",
                      end: "100% top",
                      scrub: 2.5,
                    },
                  }}
                  target="img5"
                  position="0"
                />
                {/*  scrolling big image  */}
                <Tween
                  to={{
                    maxHeight: "4000px",
                  }}
                  target="img3"
                  position="0"
                  duration={0}
                />
                <Tween
                  from={{
                    top: "10%",
                  }}
                  to={{
                    height: "190vh",
                    width: "100vw",
                    top: "60vh",
                    objectPosition: "50% 10%",
                    scrollTrigger: {
                      trigger: "#mainImg",
                      start: "0 21%",
                      end: "100% top",
                      scrub: 2,
                    },
                  }}
                  target="img3"
                  position="0"
                  duration={1}
                />
              </>
            )}
          </Timeline>
        )}
      </Scene>
    </Controller>
  );
};
