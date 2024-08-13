import React, { useState } from 'react';

const RobotSimulator = () => {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const moveRobot = (direction) => {
    switch (direction) {
      case 'north':
        if (robotPosition.y > 0) {
          setRobotPosition({ x: robotPosition.x, y: robotPosition.y - 1 });
        }
        break;
      case 'south':
        if (robotPosition.y < 4) {
          setRobotPosition({ x: robotPosition.x, y: robotPosition.y + 1 });
        }
        break;
      case 'east':
        if (robotPosition.x < 4) {
          setRobotPosition({ x: robotPosition.x + 1, y: robotPosition.y });
        }
        break;
      case 'west':
        if (robotPosition.x > 0) {
          setRobotPosition({ x: robotPosition.x - 1, y: robotPosition.y });
        }
        break;
      default:
        break;
    }
  };

  const backToBegin = () => {
    setRobotPosition({x: 0, y: 0})
  };

  return (
    <div className="robot-simulator-container">
      <h1 className="head-line">Robot Simulator</h1>
      <div className="grid">
        {Array(5)
          .fill(null)
          .map((_, y) => (
            <div key={y} className="row">
              {Array(5)
                .fill(null)
                .map((_, x) => (
                  <div
                    key={x}
                    className={`cell ${robotPosition.x === x && robotPosition.y === y ? 'robot' : ''}`}
                  />
                ))}
            </div>
          ))}
      </div>
      <div className="controls">
        <button onClick={backToBegin}>Back to begin</button>
        <button onClick={() => moveRobot('north')}>North</button>
        <button onClick={() => moveRobot('south')}>South</button>
        <button onClick={() => moveRobot('east')}>East</button>
        <button onClick={() => moveRobot('west')}>West</button>
      </div>
    </div>
  );
};

export default RobotSimulator;