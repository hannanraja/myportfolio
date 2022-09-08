import image from './myimg.png'
function Aboutme() {
    return (
        <aboutmesection>
            <heads>
                <col1>
                    <img
                        src={image}
                        ali="hannanraja" /> 
            <h1> Muhammad Hannan Raja </h1>
                    <h2>MS Scholar, Full Stack web developer </h2>
                </col1>
                <col1>
                    <h1> About me </h1>
                    <p>The best part about me is that i am very fast learner and adaptive.
                        I can handle pressure and good at multitasking. I have started my career as a teacher and then
                        i shifted to programming field after knowing my interest. I am a web developer.
                        I started learning wordpress, it was a course conducted by government of Pakistan .
                        then my career have following phase
                        <ul>
                            <li>I moved to UAE in 2020 and worked there as a wordpress developer for 8 month.
                        </li>
                            <li>
                                After returning to Pakistan i have worked as a full stack developer in leadsexpert solution
                                in Rawalpindi for an year.
                            </li>
                            <li>
                                I got a job offer in my hometown Attock for a full stack developer and i started
                                woeking in openbittz in 2021 and have been working there till now

                            </li>

                            </ul>
                    </p>

                    <h2>
                        Future Goals
                    </h2>
                    <p>I am currently learnign<b> reactJS </b>and<b> NodeJS</b> and want to be a <b>Full stack MERN developer</b> plus i am
looking forward to join<b> PhD prgram </b>in parallel to my MERN career                    </p>
                    <h2>
                        My Hobbies
                    </h2>
                    <p>I love to spend my spare time in
                        <ul>
                            <li>
                                Playing Cricket
                            </li>
                            <li>
                                Playing Football
                            </li>
                            <li>
                                Cooking
                            </li>
                            <li>
                                Playing Snooker
                            </li>
                            <li>
                                Playinig Video games
                            </li>
                            <li>
                                Mobile surfing
                            </li>

                        </ul>
                    </p>
                </col1>
              </heads>
            
            </aboutmesection>
        )

}
export default Aboutme;