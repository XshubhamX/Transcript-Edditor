import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

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
          <Col xs lg={12}>
            <h1>Start speaking few words to create a Note.</h1>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col xs lg={4}>
            {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
            <Button onClick={handleSaveNote} disabled={!note}>
              Save Notes
            </Button>
            <Button onClick={() => setIsListening((prevState) => !prevState)}>
              {isListening ? "Stop" : "Start"}
            </Button>
          </Col>
          <Col xs={8}>
            <h3 className="note">{note}</h3>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col xs lg={12}>
            <h2>Saved Notes</h2>
          </Col>
        </Row>
        <Row>
          {savedNotes.map((n) => (
            <Col xs={12}>
              <Card body>{n}</Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
