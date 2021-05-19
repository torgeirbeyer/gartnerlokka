import React from 'react';

export default function circleLink({ title, href, color, position, classes }) {
  return (
    <div className={`relative h-16 w-16 rounded-full ${color} ${position} flex`}>
      <a
        className="m-auto self-center text-xs"
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </div>
  )
}