import React from 'react'
import { skillIcon } from '../../data'
import './skills.scss';

const Skills = () => {
  return (
    <section class="tech-stack" id="tech-stack">
      <h2 class="subtitle">Tech Stack</h2>
      <div class="tech-stack-wrapper">
        {
          skillIcon.map((skill) => { return (<i class={skill} role="img" aria-hidden="true"></i>) })
        }

      </div>
    </section>
  )
}

export default Skills