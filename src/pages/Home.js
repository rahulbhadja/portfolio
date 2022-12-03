import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Rahul</h2>
        <div className='prompt'>
          <p>
            I am a software developer with a passion for using technology to
            create innovative solutions to complex problems. My unique
            perspective as a multilingual individual allows me to approach
            software development from a global perspective, bringing a fresh
            perspective to any project I work on.
          </p>
          <div className='contact'>
            <a
              href='https://www.linkedin.com/in/rahulbhadja13/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon className='icons' />
            </a>
            <a
              href='https://github.com/rahulbhadja'
              target='_blank'
              rel='noreferrer'
            >
              <EmailIcon className='icons' />
            </a>

            <a
              href='www.github.com/rahulbhadja'
              target='_blank'
              rel='noreferrer'
            >
              <GithubIcon
                className='icons'
                style={{
                  marginBottom: '10px',
                  fontSize: '52px',
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>
              JavaScript, TypeScript, ReactJS, NextJS, VueJs, nuxtJS, Svelte,
              Redux, HTML, CSS, TailwindCSS
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, MongoDB, MySQL, MariaDB, PostgreSQL,
              Firebase
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, Go, Python, C, C++ </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
