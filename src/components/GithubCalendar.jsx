import React, { useState } from 'react';
import './ProjectCard.css'; // Import the CSS file
import { ContributionCalendar } from 'react-contribution-calendar'

const data = [
    {
      '2020-04-20': { level: 2 }
    },
    {
        '2020-04-21': { level: 3 }
      },
    {
      '2023-07-08': { level: 1 },
    },
    {
      '2023-07-09': { level: 4, data: {} },
    },
    {
      '2023-03-31': {
        level: 3,
        data: {
          myKey: 'my data',
        },
      },
    },
  ]

const GitHubCalendar = ({ }) => {

    return (
        <ContributionCalendar
            className=""
            data={data}
            start="2024-01-01"
            end="2024-07-19"
            daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
            textColor="white"
            startsOnSunday={true}
            includeBoundary={true}
            theme="grass"
            cx={12}
            cy={12}
            cr={0}
            onCellClick={(e, data) => console.log(data)}
            scroll={false}
/>
    );
};

export default GitHubCalendar;
