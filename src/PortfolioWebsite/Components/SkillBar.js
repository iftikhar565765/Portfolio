import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function SkillBar() {
    const percentage = 66;
  return (
    <div>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </div>
  )
}
