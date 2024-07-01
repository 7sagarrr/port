import "./Projects.css";
import { Button, Container, Modal } from "react-bootstrap";
import { useState } from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Music Player",
      description: "Introducing KaizenBot, your ultimate music companion! Crafted with meticulous attention to detail using JavaScript, HTML, and CSS, KaizenBot is a sleek and powerful music player designed to elevate your listening experience. With its intuitive interface and seamless controls, you can effortlessly navigate through your music library, create personalized playlists, and enjoy your favorite tracks with pristine sound quality. Whether you're in the mood for a relaxing melody or an upbeat tune, KaizenBot is here to accompany you on your musical journey. Get ready to immerse yourself in the world of music with KaizenBot by your side!",

      image:"Musicplayer.png",
      tags: ["HTML", "CSS", "JS"],
      github: "https://github.com/7sagarrr/Music-Player-main",
    },
    {
      id: 2,
      title: "TEXT EDITOR",
      description:
      "Introducing the React Text Editor - a versatile and user-friendly application built with React.js that revolutionizes your text editing experience! This innovative text editor empowers you with a range of features at your fingertips. With just a click of a button, seamlessly switch between a stylish dark mode and a classic light mode to suit your preference. Additionally, effortlessly transform your text to uppercase or lowercase with the touch of a button, enabling easy formatting. The editor even provides the ability to clear the text with a single click, ensuring a clean slate for your next masterpiece. And that's not all! With the integrated text-to-speech functionality, bring your words to life by having them spoken aloud. The React Text Editor is your go-to solution for all your text editing needs, offering convenience, style, and advanced functionality in one comprehensive package. Experience the future of text editing with the React Text Editor today!",
      
      image:
        "text.png",
      tags: ["React", "HTML", "JS"],
      github: "https://github.com/7sagarrr/CRYPTOFORM",
      webapp: "https://cryptoform.vercel.app"
    },
    
  ];

  const [toggle, setToggle] = useState("all");

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <div className="projects">
      <Container id="projects">
        <div id="Wrapper">
          <h1 id="Title">Projects</h1>
          <div id="CardContainer">
            {
              projects.map((project, index) => (
                <Button onClick={() => handleOpenModal(project)} id="Card">
                  <img id="Image" src={project.image} />
                  <div id="Tags">
                    {project.tags?.map((tag, index) => (
                      <div id="Tag">{tag}</div>
                    ))}
                  </div>
                  <div id="Details">
                    <div id="TagTitle">{project.title}</div>
                    <div id="Date">{project.date}</div>
                    <div id="Description">{project.description}</div>
                  </div>
                </Button>
              ))}
            
          </div>
        </div>
      </Container>
      {/* Modal for displaying project details */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProject?.image} alt={selectedProject?.title} id="Image" />
          <p id="Date" style={{marginTop: "10px"}}>{selectedProject?.date}</p>
          <p style={{marginTop: "1rem", marginBottom: "1rem", textAlign: "justify", fontSize: "1.1rem"}}>{selectedProject?.description}</p>
          <div id="Tags">
            {selectedProject?.tags.map((tag, index) => (
              <div id="Tag" key={index}>{tag}</div>
            ))}
          </div>
          <p style={{marginTop: "15px"}}>
            <a href={selectedProject?.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {selectedProject?.webapp && (
            <p style={{display: "inline", marginLeft: "10px"}}>
              <a href={selectedProject?.webapp} target="_blank" rel="noopener noreferrer">Live Page</a>
            </p>
          )}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
} 

export default Projects;
