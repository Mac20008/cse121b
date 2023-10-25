const options = {
    method: 'GET',
    url: 'https://sportspage-feeds.p.rapidapi.com/teams',
    params: { league: 'NBA' },
    headers: {
        'X-RapidAPI-Key': '8afe1d7827mshcdb8c22adcdf2dep128efajsn011f3371ecb1',
        'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await axios(options);
        console.log('Response Data:', response.data);
        const teamsContainer = document.getElementById('teams-container');

        if (!Array.isArray(response.data)) {
            throw new Error('Data is not in the expected format');
        }

        const divisionFilter = document.getElementById('division-filter');
        divisionFilter.addEventListener('change', function () {
            const selectedDivision = this.value;
            const filteredTeams = selectedDivision !== 'all' ? response.data.filter(team => team.division === selectedDivision) : response.data;
            displayTeams(filteredTeams);
        });

        function displayTeams(teams) {
            teamsContainer.innerHTML = '';
            teams.forEach(team => {
                const teamCard = document.createElement('div');
                teamCard.classList.add('team-card');

                const teamName = document.createElement('div');
                teamName.classList.add('team-name');
                teamName.textContent = team.full_name;

                const teamDivision = document.createElement('div');
                teamDivision.classList.add('team-division');
                teamDivision.textContent = `Division: ${team.division}`;

                const teamConference = document.createElement('div');
                teamConference.classList.add('team-conference');
                teamConference.textContent = `Conference: ${team.conference}`;

                teamCard.appendChild(teamName);
                teamCard.appendChild(teamDivision);
                teamCard.appendChild(teamConference);

                teamsContainer.appendChild(teamCard);
            });
        }

        displayTeams(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

