import React from 'react';

export default function Burger(props: any) {
  return (
    <svg width="27px" viewBox="0 0 30 21" {...props}>
      <g>
        <path
          d="M28.5,12H1.5a1.5,1.5,0,0,1,0-3h27a1.5,1.5,0,0,1,0,3Z"
          fill="#262c36"
        />
        <path
          d="M28.5,3H1.5a1.5,1.5,0,0,1,0-3h27a1.5,1.5,0,0,1,0,3Z"
          fill="#262c36"
        />
        <path
          d="M28.5,21H1.5a1.5,1.5,0,0,1,0-3h27a1.5,1.5,0,0,1,0,3Z"
          fill="#262c36"
        />
      </g>
    </svg>
  );
}
