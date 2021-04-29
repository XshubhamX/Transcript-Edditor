import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Home = (props) => {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote("");
  };

  return (
    <>
      <Container>
      <Row>
        <h1>
            
        </h1>

      </Row>
        <Row>
          <Col>
            {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
            <Button onClick={handleSaveNote} disabled={!note}>
              Save Notes
            </Button>
          </Col>
          <Col>
            <Button onClick={() => setIsListening((prevState) => !prevState)}>
              {isListening ? "Stop" : "Start"}
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <h2>Current Note</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <h3>{note}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
