//Connected Discord-Github. Discord: l.mrz Roblox: loumarzzz00


import './index.css'; //Imports the css file from index.css
import './App.css'; //Imports the app css file

import { useRef, useState, useEffect } from "react"; //Imports the react hooks, useRef, useState and useEffect
import { FaArrowRight, FaSearch, FaHandHoldingUsd, FaSyncAlt, FaShieldAlt, FaRegUser, FaRegEnvelope } from "react-icons/fa"; //Imports font awesome from react-icons
import { FaCircleCheck } from "react-icons/fa6";  //Imports Font Awesome 6 from react-icons
import logoImg from "./assets/Liminal logo2.png"; //Imports the liminal logo2 image from the assets folder
import stationaryBackground from "./assets/abstract16.png"; //Imports the stationaryBackground image from the assets folder

import {motion} from 'framer-motion' //import is used so that the page fade in animations work


import { TypeAnimation } from "react-type-animation"; //this is used as a component in the jsx so that the title in the hero section has a type-in animation


import { Search, HandCoins, Send, HeartHandshake } from "lucide-react";

import smiling2Img from "./assets/smiling2.png"; //Imports the smiling2 image from the assets folder

export default function About() { //This function is exported so that it can be used again

  const [width, setWidth] = useState(0); //stores the current screen width
  const [height, setHeight] = useState(0); //stores the current screen height

  useEffect(() => {
    const updateSize = () => {
        setWidth(window.innerWidth); //The width variable is set to the current width of the screen
        setHeight(window.innerHeight); //The height variable is set to the current height of the screen
    }

    updateSize(); //The updateSize function is called so that the correct size of the screen is passed to the width and height variables

    window.addEventListener("resize", updateSize); //An event listener is created so that when the browser window is resized, the updateSize function is ran

    return () => window.removeEventListener("resize", updateSize) //Stops the event listener from running in the background

  } ,[])

  const [isHoveredBook, setIsHoveredBook] = useState(false); //used to check whether the book button is being hovered on
  const [isHoveredServices, setIsHoveredServices] = useState(false); //used to check whether the services button is being hovered on
  const [isHoveredContact, setIsHoveredContact] = useState(false); //used to check whether the contact button is being hovered on

  const [isAboutHovered, setIsAboutHovered] = useState(false); //used to check whether the about text is being hovered on
  const [isCaseStudiesHovered, setIsCaseStudiesHovered] = useState(false); //used to check whether the case studies button is being hovered on
  const [isServicesHovered, setIsServicesHovered] = useState(false); //used to check whether the services button is being hovered on

  const scrollRef = useRef(null); //scrollref is a variable that holds a reference to a DOM
  const introRef = useRef(null); //creates a reference to the intro section
  const servicesRef = useRef(null); //creates a reference to the services section
  const caseStudiesRef = useRef(null); //creates a reference to the case studies section
  const contactRef = useRef(null); //creates a reference to the contact section

  
  

  const scrollToSection = (ref) => { //creates a function that uses 'ref' as the parameter to reference where the location of the DOM is
    if (ref.current) { //the function will only continue if the reference is pointing to an elemenmt
      ref.current.scrollIntoView({ //scrollIntoView allows the page to scroll to the position of the current reference
        behavior: "smooth", //scrolls smoothly
        block: "start", //The scroll will arrive to a point where the element is at the top of the screen
      });
    }
  };



  const [name, setName] = useState(""); //variable used for the name in the contact form
  const [email, setEmail] = useState(""); //variable used for the email in the contact form
  const [message, setMessage] = useState(""); //variable used for the message in the contact form

  const [sent, setSent] = useState(false); //used to change the styles of the 'Send message' button when it is clicked

  const visible = width > 800; //If the screen width is greater than 800, the navigation bar will be visible


  const [focusedField, setFocusedField] = useState(null); //used to give whatever input that is clicked an outline

  const handlePress = async () => {
    await fetch("https://formspree.io/f/mdaqgkwa", { //sends a request to the form spree API
      method: "POST", //POST is used because data is being sent
      body: JSON.stringify({ name, email, message }), //The name, email and message are converted into a string format to be sent
      headers: { "Content-Type": "application/json" }, //lets the server know that JSON data is being sent
    })
 
    setSent(true) //the sent variable is set to true
  };

  
  const [count, setCount] = useState(0) //the count variable is set to 0 so that 


  useEffect(() => { //this function is used to animate a number scaling from 0 to 15

    const target = 15 //this is the target length of the animation (not in seconds)
    let current = 0 //this tracks the current number of the following timer until it reaches 15


    const timer = setInterval(() => { //creates a timer that updates the current variable (every 50 milliseconds) until it reaches 15
      current += 1; //every 50 milliseconds the current variable is updated by 1

      setCount(current) //the count variable is set to current

      if (current >= target) { //if current's value is greater than or equal to the target value the timer is cleared
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer) //this clears the interval of the timer so that it doesnt run in the background
  }, [])


  return (
    <div className='container'>
      {/* Navigation bar */}
      {visible && (
        <nav className="navbar-container">
          <div className="logo-container" onClick={() => scrollToSection(introRef)}>
            <img src={logoImg} alt="Liminal Logo" className="logo-img" />
          </div>

          <div className="nav-links-wrapper">
            <div onClick={() => scrollToSection(introRef)} onMouseEnter={() => setIsAboutHovered(true)} onMouseLeave={() => setIsAboutHovered(false)} className="nav-item">
              <span className="nav-text" style={{ transform: isAboutHovered ? "scale(1.1)" : "scale(1)" }}>
                About
              </span>
            </div>

            <div onClick={() => scrollToSection(servicesRef)} onMouseEnter={() => setIsServicesHovered(true)} onMouseLeave={() => setIsServicesHovered(false)} className="nav-item">
              <span className="nav-text" style={{ transform: isServicesHovered ? "scale(1.1)" : "scale(1)" }}>
                Services
              </span>
            </div>

            <div onClick={() => scrollToSection(caseStudiesRef)} onMouseEnter={() => setIsCaseStudiesHovered(true)} onMouseLeave={() => setIsCaseStudiesHovered(false)} className="nav-item">
              <span className="nav-text" style={{ transform: isCaseStudiesHovered ? "scale(1.1)" : "scale(1)" }}>
                Case Studies
              </span>
            </div>
          </div>

          {/* Contact Button*/}
          <div onClick={() => scrollToSection(contactRef)} onMouseEnter={() => setIsHoveredContact(true)} onMouseLeave={() => setIsHoveredContact(false)} className="contact-nav-btn" style={{ backgroundColor: isHoveredContact ? "#160101d5" : "#160101" }}>
            <span className="contact-nav-text">
              Contact
            </span>
          </div>
        </nav>
      )}

      <div ref={scrollRef} className="scroll-wrapper">
        
        {/* INTRO SECTION */}
        <motion.section //these motion sections (there are multiple) are used to create a fade in animation when the section is in view
        initial={{opacity: 0, y:50}} //this is the starting appearance of the section. So it starts invisible and slightly upwards
        whileInView={{opacity: 1, y: 0}} //while it is in view, the section is animated to become visible and move vertically slightly
        transition={{ duration: 0.8}} //it lasts 0.8 seconds
        viewport={{ once: true, amount: 0.1 }} //it only runs once and only starts when 10% of the section is in view
        
        ref={introRef} className="intro-section">
          <div className="intro-content-wrapper">
            <img className="intro-bg-img" src={stationaryBackground} alt="Stationary Background" />
            

            {/* Intro text */}
            <div className="intro-text-container">
              <div className="top-support-badge">
                <span className="top-support-text">Get the top support now</span>
              </div>

              <span className="intro-heading">
                
                <TypeAnimation
                  sequence={["Strategic Fundraising Support\nfor local charities"]}
                  speed={60}
                  repeat={0}
                  style={{ whiteSpace: "pre-line"}}
                />
              </span>

              <span className="intro-subheading">
                I help local charities strengthen their fundraising,<br /> build sustainable income and create <br /> long-term impact for the people they support.
              </span>

              <div className="action-buttons-container">
                <div onMouseEnter={() => setIsHoveredBook(true)} onMouseLeave={() => setIsHoveredBook(false)} onClick={() => scrollToSection(contactRef)} className="book-call-btn" style={{ backgroundColor: isHoveredBook ? "#160101d5" : "#160101", boxShadow: isHoveredBook ? "0px 2px 10px rgba(245, 59, 59, 0.08)" : "0px 2px 10px rgba(0, 0, 0, 0.12)", transform: isHoveredBook ? 'scale(1.05)' : 'scale(1)' }}>
                  <span className="book-call-text">
                    Book a free discovery call
                  </span>
                </div>

                <div onClick={() => scrollToSection(servicesRef)} onMouseEnter={() => setIsHoveredServices(true)} onMouseLeave={() => setIsHoveredServices(false)} className="view-services-btn" style={{ backgroundColor: isHoveredServices ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0)", transform: isHoveredServices ? 'scale(1.05)' : 'scale(1)' }}>
                  <span className="view-services-text">
                    View services
                  </span>
                  <FaArrowRight size={20} color="#160101" />
                </div>
              </div>

              {/* Qualities */}
              <div className="qualities-container">
                {/* Years experience */}
                <div className="quality-item">
                  <FaCircleCheck size={20} color="#f53b3b" />
                  <div className="quality-text">
                    {count}+ years experience
                  </div>
                </div>

                {/* 7 figure partnerships */}
                <div className="quality-item">
                  <FaCircleCheck size={20} color="#f53b3b" />
                  <div className="quality-text-pre">
                    Multiple 6 & 7 figure partnerships
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* SERVICES SECTION */}
        <motion.section 
        initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.8}}
        viewport={{ once: true, amount: 0.1 }}
        ref={servicesRef} className="services-section">
          <div className="services-content-wrapper">

            <div className="section-title-container">
              <span className="section-title-text">
                Services
              </span>
            </div>

            <div className="services-desc">
              I provide clear, practical fundraising support for charities and community organisations.<br />My work helps teams focus their time, build confidence and secure funding they need.
            </div>

            {/* Services Boxes Container */}
            <div className="services-grid">
              {/* Pipeline Audit */}
              <div className="service-card">
                <div className="service-icon-container">
                  <Search size={40} color="#db2c20" />
                </div>
                <div className="service-title">
                  Pipeline Audit
                </div>
                <div className="service-text">
                  Focus on opportunities that are most likely to succeed.
                </div>
              </div>

              {/* High-Value Bidding */}
              <div className="service-card">
                <div className="service-icon-container">
                  <HandCoins size={40} color="#db2c20" />
                </div>
                <span className="service-title">
                  High-Value Bidding
                </span>
                <div className="service-text-sm">
                  Turn your strategy into strong, fundable proposals.
                </div>
              </div>

              {/* Change and Project Management */}
              <div className="service-card">
                <div className="service-icon-container">
                  <Send size={40} color="#db2c20" />
                </div>
                <span className="service-title">
                  Change and Project Management
                </span>
                <div className="service-text-sm">
                  Plan and deliver work with clarity.
                </div>
              </div>

              {/* Bespoke Stewardship */}
              <div className="service-card">
                <div className="service-icon-container">
                  <HeartHandshake size={40} color="#db2c20" />
                </div>
                <span className="service-title">
                  Bespoke Stewardship
                </span>
                <div className="service-text-sm">
                  Build long-term donor relationships.
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CASE STUDIES SECTION */}
        <motion.section 
        initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.8}}
        viewport={{ once: true, amount: 0.1 }}
        ref={caseStudiesRef} className="case-studies-section">
          <div className="case-studies-wrapper">

            <div className="section-title-container">
              <h2 className="section-title-text">
                Case studies
              </h2>
            </div>

            {/* Case studies boxes */}
            <div className="case-studies-grid">
              
              {/* Case study 1 */}
              <div className="case-study-card">
                <div className="cs-badge bg-blue-light">
                  <span className="cs-badge-text text-blue">
                    CASE STUDY 1
                  </span>
                </div>

                <div className="cs-title">
                  Disability Charity
                </div>

                <div className="cs-desc">
                  Turned a sensitive topic into a highly fundable statutory proposal.
                  I presented a clear, strategic, low-risk investment.
                </div>

                <div className="cs-outcome-label">
                  OUTCOME
                </div>

                <div className="cs-outcome-val text-blue">
                  £110K Grant Secured
                </div>

                <div className="cs-outcome-desc text-blue">
                  Increased and improved employability support for disabled people.
                </div>
              </div>

              {/* Case study 2 */}
              <div className="case-study-card">
                <div className="cs-badge bg-pink-light">
                  <span className="cs-badge-text text-pink">
                    CASE STUDY 2
                  </span>
                </div>

                <div className="cs-title">
                  Women's and Girls' Charity
                </div>

                <div className="cs-desc">
                  No investment in major gifts and grants income.
                  I devised and implemented a replicable bid development framework.
                </div>

                <div className="cs-outcome-label">
                  OUTCOME
                </div>

                <div className="cs-outcome-val text-pink">
                  £1M Grant Secured
                </div>

                <div className="cs-outcome-desc text-pink">
                  More young girls and women accessing early, preventative support
                </div>
              </div>

              {/* Case study 3 */}
              <div className="case-study-card">
                <div className="cs-badge bg-purple-light">
                  <span className="cs-badge-text text-purple">
                    CASE STUDY 3
                  </span>
                </div>

                <div className="cs-title">
                  Youth work Charity
                </div>

                <div className="cs-desc">
                  Strong impact data but unclear proposals.
                  I produced a case for support and provided central strategic input.
                </div>

                <div className="cs-outcome-label">
                  OUTCOME
                </div>

                <div className="cs-outcome-val text-purple">
                  £225K Partnership Secured
                </div>

                <div className="cs-outcome-desc text-purple">
                  Consistent messaging across fundraising and marketing, strengthening the charity's brand and impact.
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
        initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.8}}
        viewport={{ once: true, amount: 0.1 }}
        ref={contactRef} className="contact-section">
          <h2 className="section-title-text">
            Contact me
          </h2>

          <div className="contact-subtitle">
            If you'd like to talk about your fundraising needs, please get in touch.
            I am able to reply within two working days.
          </div>

          {/* Image / contact UI Container */}
          <div className="contact-content-grid">
            
            {/* Image Container */}
            <div className="contact-img-container">
              <img src={smiling2Img} alt="Profile Portrait" className="contact-img" />
            </div>

            {/* Contact Form Container */}
            <div className="contact-form-container">
              <label className="form-label mb-10" style={{ color: focusedField === "name" ? "#f53b3b" : "#303030" }}>
                Full Name
              </label>
              <div className="input-wrapper h-50" style={{ borderColor: focusedField === "name" ? "#f53b3b" : "transparent" }}>
                <FaRegUser size={20} color={focusedField === "name" ? "#f53b3b" : "#303030"} />
                <input type="text" onFocus={() => setFocusedField("name")} required onBlur={() => setFocusedField(null)} placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="text-input" />
              </div>

              <label className="form-label mt-20" style={{ color: focusedField === "email" ? "#f53b3b" : "#303030" }}>
                Email
              </label>
              <div className="input-wrapper h-50 mt-10" style={{ borderColor: focusedField === "email" ? "#f53b3b" : "transparent" }}>
                <FaRegEnvelope size={20} color={focusedField === "email" ? "#f53b3b" : "#303030"} />
                <input type="email" onFocus={() => setFocusedField("email")} required onBlur={() => setFocusedField(null)} placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-input" />
              </div>

              <label className="form-label mt-20" style={{ color: focusedField === "message" ? "#f53b3b" : "#303030" }}>
                Message
              </label>
              <div className="input-wrapper h-150 mt-10" style={{ borderColor: focusedField === "message" ? "#f53b3b" : "transparent" }}>
                <textarea onFocus={() => setFocusedField("message")} required onBlur={() => setFocusedField(null)} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} className="textarea-input" />
              </div>

              
              <button onClick={handlePress} className={`send-btn ${sent ? "sent" : "not-sent"}`}>
                <span className="btn-text">
                  {sent ? "Sent" : "Send message"}
                </span>
                {!sent && (
                  <FaArrowRight size={20} color="#ffffff" />
                )}
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}