import projectdata from './ProjectData';
import HeroSection from '../components/HeroSection'
import ProjectCard from '../components/ProjectCard';

function Home() {
    return (
    <div className="min-h-screen bg-zinc-300  flex flex-col">
        <HeroSection/>
        <div className='pb-10'>
            {projectdata.map((data)=>
                <div key={data.title} className="py-10">
                    <ProjectCard title={data.title} description={data.description} img={data.img} url={data.url}/>
                </div>
                )}
        </div>
    </div>)}
export default Home;