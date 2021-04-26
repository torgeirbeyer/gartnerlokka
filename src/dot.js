import React from 'react';

export default class Dot extends React.Component {
  render() {
    return (
      <svg className = "button" expanded = "true" height = "100px" width = "100px">
        <circle className = "innerCircle" cx = "50%" cy = "50%" r = "25%" fill = "#000000">
          <animate attributeName="r" begin="0s" dur="1.5s" repeatCount="indefinite" from="5%" to="25%"/>
        </circle>
      </svg>
    )
  }
}