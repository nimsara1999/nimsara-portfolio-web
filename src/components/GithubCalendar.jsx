import React, { useState, useEffect } from 'react';
import './ProjectCard.css'; // Import the CSS file
import { ContributionCalendar } from 'react-contribution-calendar';
import moment from 'moment';
import axios from 'axios';
import { BsBoxArrowUpRight } from "react-icons/bs";

const GitHubCalendar = () => {
    const [contributionsData, setContributionsData] = useState([]);

    useEffect(() => {
        //handleGithubContribCalendar();
        getContributions('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', 'nimsara1999')
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

    async function getContributions(token, username) {
        const headers = {
            'Authorization': `bearer ${token}`,
        }
        const body = {
            "query": `query {
                user(login: "${username}") {
                  contributionsCollection {
                    contributionCalendar {
                      weeks {
                        contributionDays {
                          color
                          contributionCount
                          date
                        }
                      }
                    }
                  }
                }
              }`
        }
        const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers });
        const data = await response.json();
    
        // Extract the contributionDays array
        const weeks = data["data"]["user"]["contributionsCollection"]["contributionCalendar"]["weeks"];
        
        // Initialize an empty array to hold the formatted data
        const formatA = [];
    
        // Iterate over each week and then over each day's contribution
        weeks.forEach(week => {
            week.contributionDays.forEach(day => {
                const formattedDay = {
                    [day.date]: { level: day.contributionCount }
                };
                formatA.push(formattedDay);
            });
        });
        console.log('GitHub Contributions Data:', data);
        setContributionsData(formatA);
        
    }
    

    const convertToFormatB = (formatAData) => {
        return formatAData.slice(0, 300).map(item => ({
            [item.date]: { level: item.level }
        }));
    };

    const today = moment().format('YYYY-MM-DD');
    const eightMonthsAgo = moment().subtract(11, 'months').format('YYYY-MM-DD');

    return (
        <>
            <a href='https://github.com/nimsara1999' className='contributions-link' target='_blank' rel='noopener noreferrer'>
                <h6 className='custom-text-primary-1 mt-5'>My GitHub Contributions Chart.  <BsBoxArrowUpRight style={{fontSize:13,marginBottom:'5'}}/> </h6>
            </a>
            <div className="mb-5 d-none d-xl-block" style={{ marginLeft: -10, opacity: 0.7 }}>
                
                <ContributionCalendar
                    data={contributionsData}
                    start={eightMonthsAgo}
                    end={today}
                    daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                    textColor="white"
                    startsOnSunday={true}
                    includeBoundary={true}
                    theme="grass"
                    cx={10.1}
                    cy={12}
                    cr={0}
                    onCellClick={(e, data) => console.log(data)}
                    scroll={false}
                />
            </div>

            <div className="mb-5 d-none d-md-block d-xl-none" style={{ marginLeft: -10, opacity: 0.8 }}>
                <ContributionCalendar
                    data={contributionsData}
                    start={eightMonthsAgo}
                    end={today}
                    daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                    textColor="white"
                    startsOnSunday={true}
                    includeBoundary={true}
                    theme="grass"
                    cx={8}
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
