import styled from "styled-components";
function Flipcard() {
  return (
    <Fcard>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h1>
              Your Health, <br />
              Our Responsibility
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam tenetur doloremque molestias repellat minus asperiores
              in aperiam dolor, quaerat praesentium.
            </p>
          </div>
          <div className="card-back">
            <h1>
              Our Well-Being, <br />
              Your Responsibility
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam tenetur doloremque molestias repellat minus asperiores
              in aperiam dolor, quaerat praesentium.
            </p>
          </div>
        </div>
      </div>
    </Fcard>
  );
}
export default Flipcard;

const Fcard = styled.div`
  .card {
    width: 550px;
    height: 320px;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;
    gap: 15px;
    backface-visibility: hidden;
  }

  .card-front {
    background-color: #6a2c70;
    color: #fff;
    display: flex;
    // align-items: center;
    border: 10px solid #6a2c70;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
  }

  .card-front p,
  .card-back p {
    text-align: center;
    font-size: 20px;
  }

  .card-back {
    background-color: #f08a5d;
    color: #fff;
    display: flex;
    // align-items: center;
    border: 10px solid #f08a5d;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(180deg);
  }
`;
