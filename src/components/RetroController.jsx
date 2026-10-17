// A pixel-art gamepad. Each <rect> is a block of "pixels".
export default function RetroController() {
  return (
    <svg
      className="controller"
      viewBox="0 0 34 17"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* Shoulder bumpers */}
      <g className="pad-outline">
        <rect x="4" y="0" width="8" height="3" />
        <rect x="22" y="0" width="8" height="3" />
      </g>
      <g className="pad-blue">
        <rect x="5" y="1" width="6" height="1" />
        <rect x="23" y="1" width="6" height="1" />
      </g>

      {/* Black outline of the body and grips */}
      <g className="pad-outline">
        <rect x="4" y="2" width="26" height="1" />
        <rect x="2" y="3" width="30" height="8" />
        <rect x="1" y="4" width="32" height="6" />
        <rect x="1" y="10" width="11" height="4" />
        <rect x="2" y="14" width="8" height="2" />
        <rect x="3" y="16" width="6" height="1" />
        <rect x="22" y="10" width="11" height="4" />
        <rect x="24" y="14" width="8" height="2" />
        <rect x="25" y="16" width="6" height="1" />
        <rect x="10" y="11" width="14" height="1" />
      </g>

      {/* Orange body and grips */}
      <g className="pad-body">
        <rect x="4" y="3" width="26" height="8" />
        <rect x="3" y="4" width="28" height="7" />
        <rect x="2" y="5" width="30" height="4" />
        <rect x="2" y="10" width="9" height="4" />
        <rect x="3" y="14" width="6" height="2" />
        <rect x="23" y="10" width="9" height="4" />
        <rect x="25" y="14" width="6" height="2" />
      </g>

      {/* Highlight along the top edge */}
      <g className="pad-light">
        <rect x="5" y="3" width="24" height="1" />
      </g>

      {/* Black rims: D-pad, face buttons, sticks, center buttons */}
      <g className="pad-outline">
        <rect x="7" y="3" width="3" height="7" />
        <rect x="5" y="5" width="7" height="3" />

        <rect x="25" y="4" width="3" height="1" />
        <rect x="26" y="3" width="1" height="3" />
        <rect x="25" y="8" width="3" height="1" />
        <rect x="26" y="7" width="1" height="3" />
        <rect x="23" y="6" width="3" height="1" />
        <rect x="24" y="5" width="1" height="3" />
        <rect x="27" y="6" width="3" height="1" />
        <rect x="28" y="5" width="1" height="3" />

        <rect x="12" y="7" width="3" height="5" />
        <rect x="11" y="8" width="5" height="3" />
        <rect x="20" y="7" width="3" height="5" />
        <rect x="19" y="8" width="5" height="3" />

        <rect x="14" y="5" width="2" height="1" />
        <rect x="18" y="5" width="2" height="1" />
      </g>

      {/* Blue D-pad, face buttons, sticks, and center light */}
      <g className="pad-blue">
        <rect x="8" y="4" width="1" height="5" />
        <rect x="6" y="6" width="5" height="1" />

        <rect x="26" y="4" width="1" height="1" />
        <rect x="26" y="8" width="1" height="1" />
        <rect x="24" y="6" width="1" height="1" />
        <rect x="28" y="6" width="1" height="1" />

        <rect x="13" y="8" width="1" height="3" />
        <rect x="12" y="9" width="3" height="1" />
        <rect x="21" y="8" width="1" height="3" />
        <rect x="20" y="9" width="3" height="1" />

        <rect x="16" y="8" width="2" height="1" />
      </g>
    </svg>
  )
}
