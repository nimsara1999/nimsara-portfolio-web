import React, { useState, useEffect } from 'react';
import './ProjectCard.css'; // Import the CSS file
import { ContributionCalendar } from 'react-contribution-calendar';
import moment from 'moment';
import axios from 'axios';
import { BsBoxArrowUpRight } from "react-icons/bs";
import {api_key} from "../key"

const GitHubCalendar = () => {
    const [contributionsData, setContributionsData] = useState([]);

    useEffect(() => {
        //handleGithubContribCalendar();
        getContributions(api_key, 'nimsara1999')
    }, []);

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
                    [day.date]: { level: day.contributionCount > 4? 4 : day.contributionCount }
                };
                formatA.push(formattedDay);
            });
        });
        console.log('GitHub Contributions Data:', data);
        setContributionsData(formatA);
        
    }

    const today = moment().format('YYYY-MM-DD');
    const eightMonthsAgo = moment().subtract(11, 'months').format('YYYY-MM-DD');

    

    return (
        <>
            <a href='https://github.com/nimsara1999' className='contributions-link' target='_blank' rel='noopener noreferrer'>
                <h6 className='custom-text-primary-1 mt-4'>My GitHub Contributions.  <BsBoxArrowUpRight style={{fontSize:13,marginBottom:'5'}}/> </h6>
            </a>
            <p className="card-text mt-2 mb-2 custom-text-secondary-2" style={{margin:0}}>These are my personal contributions, excluding company projects. This calendar is updated in real-time with the help of GitHub Developer APIs.</p>
            <div className="mb-5 d-none d-xl-block" style={{ marginLeft: -12, opacity: 1 , zIndex:999}}>
                
                <ContributionCalendar
                    data={contributionsData}
                    start={eightMonthsAgo}
                    end={today}
                    daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                    textColor="white"
                    startsOnSunday={true}
                    includeBoundary={true}
                    theme="dark_grass"
                    cx={10.1}
                    cy={12}
                    cr={2}
                    onCellClick={(e, data) => console.log(data)}
                    scroll={false}
                />
            </div>

            <div className="mb-5 d-none d-md-block d-xl-none" style={{ marginLeft: -12, opacity: 1 }}>
                <ContributionCalendar
                    data={contributionsData}
                    start={eightMonthsAgo}
                    end={today}
                    daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                    textColor="white"
                    startsOnSunday={true}
                    includeBoundary={true}
                    theme="dark_grass"
                    cx={8}
                    cy={10}
                    cr={2}
                    onCellClick={(e, data) => console.log(data)}
                    scroll={false}
                />
            </div>
        </>
    );
};

export default GitHubCalendar;
