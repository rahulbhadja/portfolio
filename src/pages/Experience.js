import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2017 - 2021'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            'Gujarat Technological University', Ahmedabad, Gujarat
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor's Degree
          </h4>

          <p>Bachelor of Engineering in Computer Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2022 - 2024'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            {/* My Cool University, Vancouver, British Columbia */}
            {'University of Windsor, Windsor, Ontario'}
          </h3>

          <h4 className='vertical-timeline-element-subtitle'>
            Masters's Degree
          </h4>

          <p>Master of Applied Computing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='Feb 2021  - Aug 2021'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Software Engineer - TrustedNode
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Hong Kong</h4>
          <p>
            Developed web interfaces for the TrustedNode platform using NuxtJS,
            VueJS, and TailwindCSS. Worked on the backend using NodeJS, Express,
            and passportJS. Worked on the database using MariaDb.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2021 - present'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Freelance Software Developer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Remote, Ontario, Canada
          </h4>
          <p>
            Helped the team launch 2 major web applications by working both in
            the front end and back end.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
