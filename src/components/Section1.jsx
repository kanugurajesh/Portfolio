import React,{useState,useEffect} from "react";
import axios from 'axios'

function Section1({windowsize}) {
  const [show,setshow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password,setPassword] = useState("");

  useEffect(() => {
    const envMessage = import.meta.env.VITE_REACT_APP_PASSKEY;
    setPassword(envMessage);
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = {
      firstName,
      lastName,
      email,
      message,
      password,
    };
    
    axios.post('https://backend-developer.azurewebsites.net/send', jsonData)
    .then(response => {
      // 
    })
    .catch(error => {
      // 
    });

    setshow(!show);
  }

  const shower = (e) => {
    e.preventDefault();
    setshow(!show);
  }

  return (
    <section id="section1">
      <div id="section1-div">
        <img src="https://ik.imagekit.io/hbzknb1hm/rajesh1.jpeg?updatedAt=1687880887870" alt="" id="section1-img"/>
      </div>
      
      {windowsize &&
        <h1>Hi,I'm <span>Rajesh <br /> Software <br /> Engineer </span> </h1>
      }

      {!windowsize &&
        <h1>Hi,I'm <span>Rajesh <br /> Software Engineer</span> </h1>
      }

      <p>I'm a software engineer with experience in building and deploying websites.I am currently learning more about frontend and backend.</p>
      <div id="icons">
        <ul>
          <li><a href="https://twitter.com/exploringengin1" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/icons8-twitter.gif?updatedAt=1688106018779" alt=""/></a></li>
          <li><a href="https://github.com/rajesh604" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/icons8-github.gif?updatedAt=1687962773756" alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/rajesh-kanugu-aba8a3254/" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/icons8-linkedin-circled.gif?updatedAt=1688106080968" alt="" /></a></li>
          <li><a href="https://www.youtube.com/@Rajeshcoder" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/icons8-youtube_1_.gif?updatedAt=1688106213427" alt="" /></a></li>
        </ul>
      </div>
      <a href="" id="button" onClick={shower}>Contact me</a>
      
      {show && (
        <div id="width">
          <form onSubmit={handleSubmit}>
            <div>
              <div id="close" onClick={()=>{
                setshow(!show)
              }}>❌</div>
              <div id="name">
                <input type="text" className="input-field" placeholder="First Name" onChange={(e)=>{
                  setFirstName(e.target.value)
                }} required/>
                <input type="text" className="input-field" placeholder="Last Name" onChange={(e)=>{
                  setLastName(e.target.value)
                }} required/>
              </div>
              <input type="text" placeholder="Enter Your Gmail" onChange={(e)=>{
                setEmail(e.target.value)
              }} required/>
              <textarea name="" id="" placeholder="Enter Your Message" onChange={(e)=>{
                setMessage(e.target.value)
              }} required></textarea>
              <button type="submit">Submit</button>
            </div>
        </form>
        </div>
      )}
    </section>
  )
}

export default Section1;
