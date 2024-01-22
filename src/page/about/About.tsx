import Title from '../../components/componentTitle/Title';
import imageAuthor from '../../assets/image/author.png';
import './About.scss';
import { TContextApp, contextApp } from '../../App';
import { useContext } from 'react';

const About = () => {
    const dataContextApp: TContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;

    return (
        <div id={`mainAbout${isCheckTheme === true ? '_theme' : ''}`}>
            <div className='about'>
                <Title title='Join Doe' />
                <img src={imageAuthor} alt="" className='about_image' />
                <div className='about_sectionFirst'>
                    <h3 className={`about_sectionFirst_title ${isCheckTheme === true ? 'chageColor' : ''}`}>
                        About Me
                    </h3>
                    <p className={`about_sectionFirst_text ${isCheckTheme === true ? 'chageColor' : ''}`}>
                        As a passionate and experienced UI designer, I am dedicated to creating intuitive and engaging user
                        experiences that meet the needs of my clients and their users. I have a strong understanding of design
                        principles and a proficiency in design tools, and I am comfortable working with cross-functional teams
                        to bring projects to fruition. I am confident in my ability to create designs that are both visually
                        appealing and functional, and I am always looking for new challenges and opportunities to grow as a designer.
                    </p>
                </div>
                <div className='about_sectionSecond'>
                    <h3 className={`about_sectionSecond_title ${isCheckTheme === true ? 'chageColor' : ''}`}>
                        Skills:
                    </h3>
                    <ul className={`about_sectionSecond_title_list ${isCheckTheme === true ? 'chageColor' : ''}`}>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            Extensive experience in UI design, with a strong portfolio of completed projects
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            Proficiency in design tools such as Adobe Creative Suite and Sketch
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            Excellent visual design skills, with a strong understanding of layout, color theory, and typography
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            Ability to create wireframes and prototypes to communicate design concepts
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            Experience conducting user research and gathering insights to inform design decisions
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            EProficiency in HTML, CSS, and JavaScript
                        </li>

                    </ul>
                </div>
                <div className='about_sectionSecond'>
                    <h3 className={`about_sectionSecond_title ${isCheckTheme === true ? 'chageColor' : ''}`}>
                        Experience:
                    </h3>
                    <ul className='about_sectionSecond_title_list'>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            Led the design of a successful e-commerce website, resulting in a 25% increase in online sales
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            Conducted user research and usability testing to inform the redesign of a healthcare provider's website, resulting in a 15% increase in website traffic
                        </li>
                    </ul>
                </div>
                <div className='about_sectionSecond'>
                    <h3 className={`about_sectionSecond_title ${isCheckTheme === true ? 'chageColor' : ''}`}>
                        Education:
                    </h3>
                    <ul className='about_sectionSecond_title_list'>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            Bachelor's degree in Graphic Design
                        </li>
                        <li className={`about_sectionSecond_title_list_item  ${isCheckTheme === true ? 'chageColor' : ''}`}>
                            Certified User Experience Designer (CUED)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About