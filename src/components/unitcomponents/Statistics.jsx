import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
export default function Statistics() {
  const isDark = useSelector((state) => state.root.isDark);
  return (
    <Card>
      <div className={`card-container ${isDark ? "dark" : "light"}`}>
        <div class="card">
          <div class="child card-1">
            <div>
              <CountUp
                start={0}
                end={1000}
                delay={0}
                enableScrollSpy={true}
                scrollSpyDelay={500}
              >
                {({ countUpRef }) => (
                  <div className="">
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              <span>
                Satisfied
                <br />
                Patients
              </span>
            </div>
          </div>
          <div class="child card-2">
            <div>
              <CountUp
                start={0}
                end={250}
                delay={0}
                enableScrollSpy={true}
                scrollSpyDelay={500}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              <span>
                Verified
                <br />
                Doctors
              </span>
            </div>
          </div>
          <div class="child card-3">
            <div className>
              <CountUp
                start={0}
                end={75}
                delay={0}
                enableScrollSpy={true}
                scrollSpyDelay={500}
              >
                {({ countUpRef }) => (
                  <div className>
                    <span ref={countUpRef} />+
                  </div>
                )}
              </CountUp>
              <span className>
                Specialist
                <br />
                Doctors
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  .card-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .card {
    width: 400px;
    height: 600px;

    background: lightgray;
    box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
  }

  .card > .child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: clip-path 0.6s;
    z-index: 1;
  }

  .card .card-1 {
    clip-path: polygon(0% 0%, 75% 0%, 0% 75%);
  }

  .card .card-1:hover {
    clip-path: polygon(0% 0%, 170% 0%, 0% 170%);
  }

  .card .card-1:has(~ .card-2:hover),
  .card .card-1:has(~ .card-3:hover) {
    clip-path: polygon(0% 0%, 15% 0%, 0% 15%);
  }

  .card .card-2 {
    z-index: 0;
  }

  .card .card-3 {
    clip-path: polygon(25% 100%, 100% 25%, 100% 100%);
  }

  .card .card-3:hover {
    clip-path: polygon(-70% 100%, 100% -70%, 100% 100%);
  }

  .card .card-1:hover ~ .card-3,
  .card .card-2:hover ~ .card-3 {
    clip-path: polygon(85% 100%, 100% 85%, 100% 100%);
  }

  /*Optional styles*/
  .card {
    font: 30px Arial, Helvetica, sans-serif;
  }

  .card > .child {
    /*If using background image on card children*/
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.6s;
  }

  .card .card-1 {
    background-color: #23a;
    padding-top: 30%;
    padding-left: 20%;
  }

  .card .card-1:hover {
    padding-top: 65%;
    padding-left: 48%;
  }

  .card .card-2 {
    padding-top: 65%;
    padding-left: 48%;
    background-color: #f16;
  }

  .card .card-3 {
    padding-top: 100%;
    padding-left: 76%;
    background-color: #dd2;
  }

  .card .card-3:hover {
    padding-top: 65%;
    padding-left: 48%;
  }
`;
