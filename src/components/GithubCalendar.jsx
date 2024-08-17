import React, { useState, useEffect } from 'react';
import './ProjectCard.css'; // Import the CSS file
import { ContributionCalendar } from 'react-contribution-calendar';
import moment from 'moment';
import axios from 'axios';

const GitHubCalendar = () => {
    const [contributionsData, setContributionsData] = useState([]);

    useEffect(() => {
        handleGithubContribCalendar();
    }, []);

    const handleGithubContribCalendar = async () => {
        try {
            const response = await axios.get('https://github-contributions-api.jogruber.de/v4/nimsara1999');
            const formattedData = convertToFormatB(response.data.contributions);
            setContributionsData(formattedData);
            console.log('GitHub Contributions Data:', formattedData);
        } catch (error) {
            console.error('There was an error making the get request:', error);
        }
    };

    const convertToFormatB = (formatAData) => {
        return formatAData.slice(0, 300).map(item => ({
            [item.date]: { level: item.level }
        }));
    };

    const today = moment().format('YYYY-MM-DD');
    const eightMonthsAgo = moment().subtract(8, 'months').format('YYYY-MM-DD');

    return (
        <>
            <div className="mt-5 mb-5 d-none d-xl-block" style={{ marginLeft: -10, opacity: 0.7 }}>
                <h6>--  My GitHub Contributions Chart</h6>
                <ContributionCalendar
                    data={contributionsData}
                    start={eightMonthsAgo}
                    end={today}
                    daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                    textColor="white"
                    startsOnSunday={true}
                    includeBoundary={true}
                    theme="grass"
                    cx={13}
                    cy={13}
                    cr={0}
                    onCellClick={(e, data) => console.log(data)}
                    scroll={false}
                />
            </div>

            <div className="mt-5 mb-5 d-none d-md-block d-xl-none" style={{ marginLeft: -10, opacity: 0.8 }}>
                <h6>--  Live GitHub Contributions</h6>
                <ContributionCalendar
                    data={contributionsData}
                    start={eightMonthsAgo}
                    end={today}
                    daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                    textColor="white"
                    startsOnSunday={true}
                    includeBoundary={true}
                    theme="grass"
                    cx={10}
                    cy={10}
                    cr={0}
                    onCellClick={(e, data) => console.log(data)}
                    scroll={false}
                />
            </div>
        </>
    );
};

export default GitHubCalendar;
