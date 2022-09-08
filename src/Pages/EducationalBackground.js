
const education = [
    {
        name: 'Matric',
        id: '1',
        School: 'APSACS ATTOCK Cantt',
        MajorSubjects: 'Science',
        Marks: 'ss',
        url: 'https://google.com/1',
    },
    {
        name: 'FSC',
        id: '2',
        School: 'APSACS ATTOCK Cantt',
        MajorSubjects: 'Science',
        Marks: 'ss',
        url: 'https://google.com/2',
    },
    {
        name: 'BSC',
        id: '3',
        School: 'Degree College Attock',
        MajorSubjects: 'Science',
        Marks: 'ss',
        url: 'https://google.com/3',
    },
    {
        name: 'MSC',
        id: '4',
        School: 'QAU Islamabad',
        MajorSubjects: 'Image Processing , MicroController programming, C++ ',
        Marks: 'sss',
        url: 'https://google.com/4',
    },
    {
        name: 'MS',
        id: '5',
        School: 'COMSATS Attock',
        MajorSubjects: 'Computer Science, Machine learning, DIP',
        Marks: 'ss',
        url: 'https://google.com/5',
    }
]

function EducationalBackground() {

    return (
        <section>
            <h1> EducationalBackground</h1>
            <tr>
            <th> Name </th><th> School </th><th> Major Subjects</th><th>Marks </th><th>Degree link</th>
            </tr>
             {education.map((myedu,index) => {
                 const { id, name, School, MajorSubjects, Marks, url } = myedu
                return (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{School}</td>
                        <td>{MajorSubjects}</td>
                        <td>{Marks}</td>
                        <td>{url}</td>
                    </tr>
            )
            })
            } 
            
        </section>
    )
}
export default EducationalBackground;