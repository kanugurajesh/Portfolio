import '../css/section4.css'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Box({name,github,link,tech,description}){
    const randomkey = uuidv4();
    return (
        <div className="project-box">
                    <div className="project-header">
                        <div className="project-header-1">
                            <img src="https://ik.imagekit.io/hbzknb1hm/icons8-file.gif?updatedAt=1687962773667" alt="" />
                        </div>
                        <div className="project-header-2">
                            <a href={github}><img src="https://ik.imagekit.io/hbzknb1hm/icons8-github.gif?updatedAt=1687962773756" alt="" /></a>
                            <a href={link}><img src="https://ik.imagekit.io/hbzknb1hm/icons8-link.gif?updatedAt=1687962773580" alt="" /></a>
                        </div>
                    </div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className="project-footer">
                        {tech.map((number) => {
                            const randomkey = uuidv4();
                            return <div key={randomkey}>{number}</div>;
                        })}
                    </div>
            </div>   
    )
}

function Section4() {
    return (
        <section id="section4">
            <h1><span>Ø3.</span> &lt;my portfolio&gt;</h1>
            <p>A small gallery of recent projects chosen by me.I've done all of them alone and these projects are only part of my projects</p>
            <div id="grid">
                <Box name={"Udaan Project"} github={"https://github.com/rajesh604/udaan_project_home"} link={"https://udaaniitb.aicte-india.org/udaan/"} description="Frontend application for the udaan project" tech={["Html","Css","Javascript"]}/>
                <Box name={"User Authentication"} github={"https://github.com/rajesh604/userAuthentication"} link={""} description="Developed a Zero cost authentication system for peer developers" tech={["Typescript","MERN","Tailwind"]}/>
                <Box name={"Restaurant App"} github="https://github.com/rajesh604/django_fullstack_project" link="http://rajeshkanugu.pythonanywhere.com/" tech={["django","Html","Css","Javascript","meal api","pythonanywhere"]} description="A basic restaurant web app which contains menu and can reserve seats"/>
                <Box name={"Image Upload"} link="https://improved-funicular.vercel.app/" tech={["Javascript","Html","Css","React","firebase","hosting","mongodb atlas","supabase"]} description="Share your images publicly and see the shared images"/>
                <Box name={"Space Exploration"} github="https://github.com/rajesh604/space-tourism" link="https://space-tourism-l7gb.vercel.app/" tech={["Javascript","Html","Css"]} description="Explore the Space,planets and know about some famous astronauts"/>
                <Box name={"Company Portfolio"} github="https://github.com/rajesh604/rajesh_web_design" link="https://rajesh-web-design.vercel.app/" tech={["Javascript","Html","Css","React Js"]} description="A small company portfolio"/>
                <Box name={"Food Order"} github="https://github.com/rajesh604/food_ordering_app" link="https://rajesh604.github.io/food_ordering_app/" tech={["Javascript","Html","Css"]} description="A Basic Food Ordering Demo"/>
                <Box name={"Portfolio 1"} github="" link="https://salmon-river-0d2437110.3.azurestaticapps.net/" tech={["Javascript","Html","Css","Azure","React Js","Nodemailer","Express","Node Js"]} description="I have build a portfolio"/>
                <Box name={"News Blog"} github="https://github.com/rajesh604/django_blog" link="http://rajeshgowd.pythonanywhere.com/" tech={["Javascript","Html","Css","django","NewsApi","pythonanywhere","Bootstrap"]} description="A Blog Where Users Can see news and write posts only when the superuser allows them"/>
                <Box name={"Portfolio Dashboard"} github="" link="https://dashboard-xpsi.vercel.app/" tech={["Javascript","Html","Css","Azure","React Js","mui","ant design"]} description="I have build a portfolio dashboard"/>
                <Box name={"Portfolio 2"} github="https://github.com/rajesh604/rajesh604.github.io" link="https://rajesh604.github.io" tech={["Javascript","Html","Css","Github Static Pages"]} description="I have build a portfolio"/>
                <Box name={"Restaurant Menu"} github="https://github.com/rajesh604/restaurant-app" link="https://restaurant-app-c7wi.vercel.app/" tech={["Javascript","Html","Css","React","meal api","hosting"]} description="I have build a restaurant menu"/>
            </div>
            <h2>&lt;/my portfolio&gt;</h2>
        </section>
    )
}

export default Section4;