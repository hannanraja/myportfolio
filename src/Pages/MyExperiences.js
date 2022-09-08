const experiences = [
    {
        Post: 'Online Teacher',
        id: '1',
        Organization: 'BnB campus Islamabad',
        Skills: 'Teaching, Presentations, Scheduling',
        Duration: '2015-2016',
        CompanyLink: 'https://google.com/1',
    },
    {
        Post: 'Internee',
        id: '2',
        Organization: 'ADC F&P Attock',
        Skills: 'Computer operator, management, teaching',
        Duration: '2016-2017',
        CompanyLink: 'https://google.com/1',
    },
    {
        Post: 'Web developer',
        id: '3',
        Organization: 'The watchTower Dubai',
        Skills: 'Wordpress , SEO',
        Duration: '2019-2022',
        CompanyLink: 'https://thewatchtower.com',
    },
    {
        Post: 'Web developer',
        id: '4',
        Organization: 'The Leads Expert Solutions Rawalpindi',
        Skills: 'Wordpress, PHP , HTML, CSS, JavaScript, SEO',
        Duration: '2020-2021',
        CompanyLink: 'https://leadsexpertsolution.com',
    },
    {
        Post: 'Web developer',
        id: '5',
        Organization: 'Openbittz',
        Skills: 'Wordpress, Javascript, PHP, SEO',
        Duration: '2021-2022',
        CompanyLink: 'https://openbittz.com',
    },
]

function MyExperiences() {
    return (
        <section>
             <h1> MyExperiences </h1>
            <tr>
                <th>Post</th><th>Organization</th><th>Skills</th><th>Duration</th><th>Company website</th>
            </tr>
            

            {experiences.map((myexp, index) => {
                const { id, Post, Organization, Skills, Duration, CompanyLink } = myexp
                return (
                    < tr key={id} >
                        <td>{Post}</td>
                        <td>{Organization}</td>
                        <td>{Skills}</td>
                        <td>{Duration}</td>
                        <td>{CompanyLink}</td>
                    </tr>
                )
            })
            }
)            </section>
        )

}
export default MyExperiences;