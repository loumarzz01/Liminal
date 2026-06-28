import './index.css'

import './App.css'

import React, { useRef, useState, useEffect } from "react";
import {
  FaArrowRight, 
  FaSearch, 
  FaHandHoldingUsd, 
  FaSyncAlt, 
  FaShieldAlt, 
  FaRegUser, 
  FaRegEnvelope 
} from "react-icons/fa";

import { FaCircleCheck } from "react-icons/fa6";

import logoImg from "./assets/Liminal logo2.png";
import stationaryBackground from "./assets/stationaryBackground.png";
import work7Img from "./assets/work7.png";
import work4Img from "./assets/work4.png";
import smiling2Img from "./assets/smiling2.png";

export default function About() {
  // Simulating React Native's useWindowDimensions
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = windowDimensions;

  const [isHoveredBook, setIsHoveredBook] = useState(false);
  const [isHoveredServices, setIsHoveredServices] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);

  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isCaseStudiesHovered, setIsCaseStudiesHovered] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const [isSentHovered, setIsSentHovered] = useState(false);

  const scrollRef = useRef(null);
  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const contactRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handlePress = () => {
    fetch("https://formspree.io/f/mjgjdnrl", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setSent(true);
    });
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const visible = width > 800;

  

  return (
    <div className='container'>
      {/* Navigation bar */}
      {visible && (
        <nav className="navbar-container">
          <div style={{ cursor: "pointer", display: "flex" }}>
            <img 
              src={logoImg}
              alt="Liminal Logo"
              style={{ width: 75, height: 20, objectFit: "contain" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div 
              onClick={() => scrollToSection(introRef)} 
              onMouseEnter={() => setIsAboutHovered(true)}
              onMouseLeave={() => setIsAboutHovered(false)}
              style={{ cursor: "pointer", display: "flex" }}
            >
              <span style={{ transition: 'transform 0.2s ease', transform: isAboutHovered ? "scale(1.1)" : "scale(1)", fontFamily: "PoppinsMedium", fontWeight: "500", fontSize: 14, color: "#160101" }}>
                About
              </span>
            </div>

            <div 
              onClick={() => scrollToSection(servicesRef)} 
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
              style={{ cursor: "pointer", display: "flex" }}
            >
              <span style={{ transition: 'transform 0.2s ease', transform: isServicesHovered ? "scale(1.1)" : "scale(1)",fontFamily: "PoppinsMedium", fontWeight: "500", fontSize: 14, color: "#160101" }}>
                Services
              </span>
            </div>

            <div 
              onClick={() => scrollToSection(caseStudiesRef)} 
              onMouseEnter={() => setIsCaseStudiesHovered(true)}
              onMouseLeave={() => setIsCaseStudiesHovered(false)}
              style={{ cursor: "pointer", display: "flex" }}
            >
              <span style={{ transition: 'transform 0.2s ease', transform: isCaseStudiesHovered ? "scale(1.1)" : "scale(1)", fontFamily: "PoppinsMedium", fontWeight: "500", fontSize: 14, color: "#160101" }}>
                Case Studies
              </span>
            </div>
          </div>

          <div
            onClick={() => scrollToSection(contactRef)}

            onMouseEnter={() => setIsHoveredContact(true)}
            onMouseLeave={() => setIsHoveredContact(false)}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              paddingLeft: 15, paddingRight: 15, paddingHorizontal: 15,
              paddingTop: 10, paddingBottom: 10, paddingVertical: 10,
              borderRadius: 99,
              marginRight: -10,
              backgroundColor: isHoveredContact ? "#160101d5" : "#160101",
              gap: 5,
              
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 5,
              transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontWeight: "400",
                letterSpacing: 0.3,
                lineHeight: "16px",
              }}
            >
              Contact
            </span>
          </div>
        </nav>
      )}

      <div ref={scrollRef} style={{ display: "flex", flexDirection: "column", flex: 1,  }}>
        
        {/* INTRO SECTION */}
        <section
          ref={introRef}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            minHeight: 920,
            justifyContent: "center",
            
            backgroundColor: "#ffffff",
            
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              overflow: "hidden",
              
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            <img 
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                objectFit: "cover",
                top: 0, left: 0,
              }}
              src={stationaryBackground}
              alt="Stationary Background"
            />

            
            {/* Intro text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: '20px',
                paddingLeft: 20, paddingRight: 20, paddingHorizontal: 20,
                zIndex: 1,
              }}
            >

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: '5px 15px', backgroundColor: '#f53b3b2c', borderRadius: 99 }}>
                <span style={{ fontSize: 15, fontWeight: "500", color: "#f53b3b" }}> Get the top support now</span>
              </div>




              <span
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 50,
                  fontWeight: "500",
                  color: "#160101",
                  textAlign: "center",
                  alignSelf: "center",
                  marginBottom: '0px',
                }}
              >
                Strategic Fundraising Support <br /> for local charities
              </span>

              

            

              <span
                style={{
                  fontFamily: "PoppinsMedium",
                  fontWeight: "500",
                  color: "#9D999D",
                  fontSize: 17,
                  textAlign: "center",
                  marginBottom: '20px'
                  
                }}
              >
                I help local charities {""}
                
                  strengthen their fundraising
                
                ,<br />
                build
                
                  {" "}
                  sustainable income{" "}
               
                and create <br />
                
                  long-term impact{" "}
                
                for the people they support.
              </span>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div

                  onMouseEnter={() => setIsHoveredBook(true)}
                  onMouseLeave={() => setIsHoveredBook(false)}

                  onClick={() => scrollToSection(contactRef)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    padding: '10px 20px',
                    
                    backgroundColor: isHoveredBook ? "#160101d5" : "#160101",
                    borderColor: "#130000", 
                    borderWidth: '2px',
                    borderStyle: "solid",
                    borderRadius: 99,
                    justifyContent: 'center',
                    textAlign: "center",
                    
                    shadowColor: isHoveredBook ? "#160101" : "#130000",
                    boxShadow: isHoveredBook ? "0px 2px 10px rgba(245, 59, 59, 0.08)" : "0px 2px 10px rgba(0, 0, 0, 0.12)",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    transform: isHoveredBook ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.2s ease, background-color 0.2s ease',
                  }}
                >
                  <span style={{ fontSize: 17, fontWeight: "500", color: "#ffffff" }}>
                    Book a free discovery call
                  </span>
                </div>

                <div
                  onClick={() => scrollToSection(servicesRef)}

                  onMouseEnter={() => setIsHoveredServices(true)}
                  onMouseLeave={() => setIsHoveredServices(false)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    padding: '10px 20px',
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isHoveredServices ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0)",
                    borderRadius: 99,
                    
                    borderWidth: 3,
                    borderStyle: "solid",
                    borderColor: "#160101",
                    flexDirection: "row",
                    gap: 5,
                    transform: isHoveredServices ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.2s ease, background-color 0.2s ease',
                  }}
                >
                  <span style={{ fontSize: 17, fontWeight: "400", color: "#160101" }}>
                    View services
                  </span>
                  <FaArrowRight size={20} color="#160101" />
                </div>
              </div>

              {/* Qualities */}
              <div
                style={{
                  display: "flex",
                  gap: 60,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  maxWidth: 800,
                  maxHeight: 400,
                  marginTop: 50,
                }}
              >
                {/* Years experience */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
                  <FaCircleCheck size={20} color="#f53b3b" />
                  <div style={{ fontSize: 20, fontFamily: "PoppinsMedium", fontWeight: 400, color:"#f53b3b"}}>
                    15+ years experience
                  </div>
                </div>

                {/* 7 figure partnerships */}
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>

                  <FaCircleCheck size={20} color="#f53b3b" />
                  <div style={{ fontSize: 20, fontFamily: "PoppinsMedium", fontWeight: 400, whiteSpace: "pre-line", color:"#f53b3b" }}>
                    Multiple 6 & 7 figure partnerships
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section
          ref={servicesRef}
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: 700,
            margin: "0 auto",
            width: "100%",
            backgroundColor: "white",
            paddingTop: 60, paddingBottom: 20, paddingVertical: 20,
            paddingLeft: 20, paddingRight: 20, paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 40,
              overflow: "hidden",
              paddingTop: 40, paddingBottom: 40, paddingVertical: 40,
              position: "relative",
              boxSizing: "border-box",
            }}
          >

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
              <span style={{ color: "#160101", fontSize: 40, fontFamily: "PoppinsSemiBold", fontWeight: 500 }}>
                Services
              </span>
            </div>

            <div
              style={{
                fontSize: 20,
                marginTop: 40,
                fontFamily: "PoppinsMedium",
                fontWeight: "400",
                color: "#494949",
                textAlign: "center",
                paddingLeft: 20, paddingRight: 20, paddingHorizontal: 20,
                zIndex: 1,
              }}
            >
              I provide clear, practical fundraising support for charities and community organisations.<br />My work helps
              teams focus their time, build confidence and secure funding they need.
            </div>

            {/* Services Boxes Container */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 30,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50,
                maxWidth: '1000px',
                width: "100%",
                zIndex: 1,
              }}
            >
              {/* Pipeline Audit */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                  maxWidth: 340,
                  height: 250,
                  backgroundColor: "#fcfcfc",
                  borderRadius: 30,
                  padding: 30,

                  shadowColor: "#160101",
                  shadowOffset: { width: 2, height: 3 },
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  justifyContent: "center",
                  position: "relative",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    left: -10,
                    top: -10,
                    borderRadius: 20,
                    width: 75,
                    height: 75,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fcfcfc",
                  }}
                >
                  <FaSearch size={40} color="#3babf5" />
                </div>
                <div style={{ fontFamily: "PoppinsSemiBold", fontWeight: 600, color: "#160101", fontSize: 20}}>
                  Pipeline Audit
                </div>
                <div style={{ color: "#595959", marginTop: 10, fontFamily: "PoppinsMedium", fontWeight: 400, fontSize: 17 }}>
                  Focus on opportunities that are most likely to succeed.
                </div>
              </div>

              {/* High-Value Bidding */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                  maxWidth: 340,
                  height: 250,
                  backgroundColor: "#fcfcfc",
                  borderRadius: 30,
                  padding: 30,
                  shadowColor: "#160101",
                  shadowOffset: { width: 2, height: 3 },
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  justifyContent: "center",
                  position: "relative",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    left: -10,
                    top: -10,
                    borderRadius: 20,
                    width: 75,
                    height: 75,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fcfcfc",
                  }}
                >
                  <FaHandHoldingUsd size={40} color="#733bf5" />
                </div>
                <span style={{ fontFamily: "PoppinsSemiBold", fontWeight: 600, color: "#160101", fontSize: 20 }}>
                  High-Value Bidding
                </span>
                <div style={{ color: "#595959", marginTop: 10, fontFamily: "PoppinsMedium", fontWeight: 400, fontSize: 15 }}>
                  Turn your strategy into strong, fundable proposals.
                </div>
              </div>

              {/* Change and Project Management */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                  maxWidth: 340,
                  height: 250,
                  backgroundColor: "#fcfcfc",
                  borderRadius: 30,
                  padding: 30,
                  shadowColor: "#160101",
                  shadowOffset: { width: 2, height: 3 },
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  justifyContent: "center",
                  position: "relative",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    left: -10,
                    top: -10,
                    borderRadius: 20,
                    width: 75,
                    height: 75,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fcfcfc",
                  }}
                >
                  <FaSyncAlt size={40} color="#279235" />
                </div>
                <span style={{ fontFamily: "PoppinsSemiBold", fontWeight: 600, color: "#160101", fontSize: 20 }}>
                  Change and Project Management
                </span>
                <div style={{ color: "#595959", marginTop: 10, fontFamily: "PoppinsMedium", fontWeight: 400, fontSize: 15 }}>
                  Plan and deliver work with clarity.
                </div>
              </div>

              {/* Bespoke Stewardship */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                  maxWidth: 340,
                  height: 250,
                  backgroundColor: "#fcfcfc",
                  borderRadius: 30,
                  padding: 30,

                  shadowColor: "#160101",
                  shadowOffset: { width: 2, height: 3 },
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  justifyContent: "center",
                  position: "relative",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    left: -10,
                    top: -10,
                    borderRadius: 20,
                    backgroundColor: "#fcfcfc",
                    width: 75,
                    height: 75,
                    justifyContent: "center",
                    alignItems: "center",
        
                  }}
                >
                  <FaShieldAlt size={40} color="#db2c20" />
                </div>
                <span style={{ fontFamily: "PoppinsSemiBold", fontWeight: 600, color: "#160101", fontSize: 20 }}>
                  Bespoke Stewardship
                </span>
                <div style={{ color: "#595959", marginTop: 10, fontFamily: "PoppinsMedium", fontWeight: 400, fontSize: 15 }}>
                  Build long-term donor relationships.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES SECTION */}
        <section
          ref={caseStudiesRef}
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: 650,
            width: "100%",
            backgroundColor: "white",
            paddingTop: 20, paddingBottom: 20, paddingVertical: 20,
            paddingLeft: 20, paddingRight: 20, paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 40,
              overflow: "hidden",
              paddingTop: 40, paddingBottom: 40, paddingVertical: 40,
              paddingLeft: 0, paddingRight: 0, paddingHorizontal: 0,
              position: "relative",
              boxSizing: "border-box",
            }}
          >

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
              <h2 style={{ color: '#160101', fontFamily: "PoppinsSemiBold", fontWeight: 400, fontSize: 40, textAlign: "center", margin: 0 }}>
                Case studies
              </h2>
            </div>

            {/* Case studies boxes */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 30,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50,
                width: "100%",
                zIndex: 1,
              }}
            >
              {/* Case study 1 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 30,
                  width: 400,
                  height: 380,
                  maxWidth: "90%",
                  backgroundColor: "#ffffff",
                  padding: 30,
                  justifyContent: "space-between",
                  borderColor: "#e0e0e0",
                  borderWidth: 1,
                  borderStyle: "solid",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.05,
                  shadowRadius: 20,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "rgba(112, 179, 255, 0.17)",
                    borderRadius: 10,
                    height: 25,
                    width: 120,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#0077ff", fontSize: 12, fontFamily: "PoppinsMedium", fontWeight: 400, letterSpacing: 0, alignSelf: "center" }}>
                    CASE STUDY 1
                  </span>
                </div>

                <div style={{ color: "#160101", fontFamily: "PoppinsMedium", fontWeight: 400, marginTop: 20, fontSize: 20 }}>
                  Disability Charity
                </div>

                <div style={{ color: "#595959", fontFamily: "PoppinsMedium", fontWeight: "400", marginTop: 20, fontSize: 15 }}>
                  Turned a sensitive topic into a highly fundable statutory proposal.
                  I presented a clear, strategic, low-risk investment.
                </div>

                <div style={{ fontSize: 15, fontFamily: "PoppinsMedium", fontWeight: 400, marginTop: 30, color: "#595959" }}>
                  OUTCOME
                </div>

                <div style={{ marginTop: 10, fontSize: 20, fontFamily: "PoppinsMedium", fontWeight: 400, color: "#0077ff" }}>
                  £110K Grant Secured
                </div>

                <div style={{ marginTop: 10, fontSize: 15, fontFamily: "PoppinsMedium", fontWeight: "400", color: "#0077ff" }}>
                  Increased and improved employability support for disabled people.
                </div>
              </div>

              {/* Case study 2 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 30,
                  width: 400,
                  height: 380,
                  maxWidth: "90%",
                  backgroundColor: "#ffffff",
                  padding: 30,
                  borderColor: "#e0e0e0",
                  borderWidth: 1,
                  borderStyle: "solid",
                  justifyContent: "space-between",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.05,
                  shadowRadius: 20,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#e63cfd2c",
                    borderRadius: 10,
                    height: 25,
                    width: 120,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#e63cfd", fontSize: 12, fontFamily: "PoppinsMedium", fontWeight: 400, letterSpacing: 0, alignSelf: "center" }}>
                    CASE STUDY 2
                  </span>
                </div>

                <div style={{ color: "#160101", fontFamily: "PoppinsMedium", fontWeight: 400, marginTop: 20, fontSize: 20 }}>
                  Women's and Girls' Charity
                </div>

                <div style={{ color: "#595959", fontFamily: "PoppinsMedium", fontWeight: "400", marginTop: 20, fontSize: 15 }}>
                  No investment in major gifts and grants income.
                  I devised and implemented a replicable bid development framework.
                </div>

                <div style={{ fontSize: 15, fontFamily: "PoppinsMedium", fontWeight: 400, marginTop: 30, color: "#595959" }}>
                  OUTCOME
                </div>

                <div style={{ marginTop: 10, fontSize: 20, fontFamily: "PoppinsMedium", fontWeight: 400, color: "#e63cfd" }}>
                  £1M Grant Secured
                </div>

                <div style={{ marginTop: 10, fontSize: 15, fontFamily: "PoppinsMedium", fontWeight: "400", color: "#e63cfd" }}>
                  More young girls and women accessing early, preventative support
                </div>
              </div>

              {/* Case study 3 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 30,
                  width: 400,
                  minHeight: 380,
                  maxWidth: "90%",
                  backgroundColor: "#ffffff",
                  padding: 30,
                  borderColor: "#e0e0e0",
                  borderWidth: 1,
                  borderStyle: "solid",
                  justifyContent: "space-between",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.05,
                  shadowRadius: 20,
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#6715ff25",
                    borderRadius: 10,
                    height: 25,
                    width: 120,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 0,
                  }}
                >
                  <span style={{ color: "#6715ff", fontSize: 12, fontFamily: "PoppinsMedium", fontWeight: 400, letterSpacing: 0, alignSelf: "center" }}>
                    CASE STUDY 3
                  </span>
                </div>

                <div style={{ color: "#160101", fontFamily: "PoppinsMedium", fontWeight: 400, marginTop: 20, fontSize: 20 }}>
                  Youth work Charity
                </div>

                <div style={{ color: "#595959", fontFamily: "PoppinsMedium", fontWeight: "400", marginTop: 20, fontSize: 15 }}>
                  Strong impact data but unclear proposals.
                  I produced a case for support and provided central strategic input.
                </div>

                <div style={{ fontSize: 15, fontFamily: "PoppinsMedium", fontWeight: 400, marginTop: 30, color: "#595959" }}>
                  OUTCOME
                </div>

                <div style={{ marginTop: 10, fontSize: 20, fontFamily: "PoppinsMedium", fontWeight: 400, color: "#6715ff" }}>
                  £225K Partnership Secured
                </div>

                <div style={{ marginTop: 10, fontSize: 15, fontFamily: "PoppinsMedium", fontWeight: "400", color: "#6715ff" }}>
                  Consistent messaging across fundraising and marketing, strengthening the charity's brand and impact.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          ref={contactRef}
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: 800,
            backgroundColor: "white",
            paddingTop: 40, paddingBottom: 40, paddingVertical: 40,
            paddingLeft: 20, paddingRight: 20, paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ color: '#160101', fontFamily: "PoppinsSemiBold", fontWeight: 400, fontSize: 40, textAlign: "center", margin: 0 }}>
            Contact me
          </h2>

          <div
            style={{
              fontSize: 18,
              marginTop: 20,
              fontFamily: "PoppinsMedium",
              fontWeight: "400",
              color: "#494949",
              textAlign: "center",
              maxWidth: 500,
            }}
          >
            If you'd like to talk about your{" "}
              fundraising needs
            , please get in touch.
            I am able to reply within two working days.
          </div>

          {/* Image / contact UI Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 40,
              marginTop: 40,
              width: "100%",
            }}
          >
            {/* Image Container */}
            <div
              style={{
                width: "100%",
                maxWidth: 500,
                minHeight: 500,
                aspectRatio: 1,
                backgroundColor: "#494949",
                borderRadius: 30,
                overflow: "hidden",
              }}
            >
              <img 
                src={smiling2Img}
                alt="Profile Portrait"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            {/* Contact Form Container */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#EEEEEE",
                maxWidth: 500,
                padding: 30,
                minHeight: 500,
                backgroundColor: "#f8f8f8",
                borderRadius: 30,
                overflow: "hidden",
                justifyContent: "space-between",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <label
                style={{
                  alignSelf: "flex-start",
                  fontFamily: "PoppinsMedium",
                  fontWeight: 400,
                  marginBottom: 10,
                  color: focusedField === "name" ? "#f53b3b" : "#303030",
                }}
              >
                Full Name
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: 15,
                  height: 50,
                  width: "100%",
                  transition: "border-color 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: focusedField === "name" ? "#f53b3b" : "transparent",
                  paddingLeft: 15, paddingRight: 15, paddingHorizontal: 15,
                  boxSizing: "border-box",
                }}
              >
                <FaRegUser
                  size={20}
                  color={focusedField === "name" ? "#f53b3b" : "#303030"}
                />
                <input
                  type="text"
                  onFocus={() => setFocusedField("name")}
                  required
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    flex: 1,
                    height: "100%",
                    marginLeft: 10,
                    fontFamily: "PoppinsMedium",
                    fontWeight: "400",
                    fontSize: 14,
                    outline: "none",
                    color: "#1A1A1A",
                    border: "none",
                    background: "transparent",
                  }}
                />
              </div>

              <label
                style={{
                  alignSelf: "flex-start",
                  fontFamily: "PoppinsMedium",
                  fontWeight: 400,
                  marginTop: 20,
                  color: focusedField === "email" ? "#f53b3b" : "#303030",
                }}
              >
                Email
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: 15,
                  height: 50,
                  transition: "border-color 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  width: "100%",
                  marginTop: 10,
                  paddingLeft: 15, paddingRight: 15, paddingHorizontal: 15,
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: focusedField === "email" ? "#f53b3b" : "transparent",
                  boxSizing: "border-box",
                }}
              >
                <FaRegEnvelope
                  size={20}
                  color={focusedField === "email" ? "#f53b3b" : "#303030"}
                />
                <input
                  type="email"
                  onFocus={() => setFocusedField("email")}
                  required
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    height: "100%",
                    marginLeft: 10,
                    fontFamily: "PoppinsMedium",
                    fontWeight: "400",
                    fontSize: 14,
                    outline: "none",
                    color: "#1A1A1A",
                    border: "none",
                    background: "transparent",
                  }}
                />
              </div>

              <label
                style={{
                  alignSelf: "flex-start",
                  fontFamily: "PoppinsMedium",
                  fontWeight: 400,
                  marginTop: 20,
                  color: focusedField === "message" ? "#f53b3b" : "#303030",
                }}
              >
                Message
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: 15,
                  transition: "border-color 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  height: 150,
                  width: "100%",
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: focusedField === "message" ? "#f53b3b" : "transparent",
                  marginTop: 10,
                  paddingLeft: 15, paddingRight: 15, paddingHorizontal: 15,
                  boxSizing: "border-box",
                }}
              >
                <textarea
                  onFocus={() => setFocusedField("message")}
                  required
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    flex: 1,
                    height: "100%",
                    fontFamily: "PoppinsMedium",
                    fontWeight: "400",
                    fontSize: 14,
                    padding: '0px 0px',
                    outline: "none",
                    color: "#1A1A1A",
                    marginTop: '30px',
                    marginRight: '10px',
                    border: "none",
                    background: "transparent",
                    resize: "none",
                  }}
                />
              </div>

              <button
                onMouseEnter={() => setIsSentHovered(true)}
                onMouseLeave={() => setIsSentHovered(false)}
                onClick={handlePress}
                disabled={sent}
                style={{
                  cursor: sent ? "default" : "pointer",
                  border: "none",
                  backgroundColor: sent ? "#999999" : "#f53b3b",
                  paddingLeft: 30, paddingRight: 30, paddingHorizontal: 30,
                  paddingTop: 20, paddingBottom: 20, paddingVertical: 20,
                  alignSelf: "flex-start",
                  marginTop: 40,
                  borderRadius: 99,
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  boxShadow: sent ? "none" : "0px 2px 10px rgba(245, 59, 59, 0.2)",
                  shadowColor: sent ? "#999999" : "#f53b3b",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 10,
                  display: "flex",
                  transform: isSentHovered ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                }}
              >
                <span
                  style={{
                    fontFamily: "PoppinsMedium",
                    fontWeight: 400,
                    color: "#ffffff",
                    fontSize: 16,
                  }}
                >
                  {sent ? "Sent" : "Send message"}
                </span>

                {!sent && (
                  <FaArrowRight
                    size={20}
                    color="#ffffff"
                  />
                )}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}