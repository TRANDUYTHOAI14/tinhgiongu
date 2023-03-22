import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./App.css";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [sleepTime, setSleepTime] = useState(null);
  const [wakeUpTimes, setWakeUpTimes] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleSleep = () => {
    const sleepTime = new Date();
    setSleepTime(sleepTime);

    const cycleMinutes = 90;
    const cycleCount = 6;
    const wakeUpTimes = [];

    for (let i = 1; i <= cycleCount; i++) {
      const wakeUpTime = new Date(
        sleepTime.getTime() + cycleMinutes * i * 60000
      );
      wakeUpTimes.push(wakeUpTime);
    }

    setWakeUpTimes(wakeUpTimes);
  };

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getFormattedTime = (date) => {
    const hours = date.getHours();
    const period = hours < 12 ? "Sáng" : hours < 18 ? "Chiều" : "Tối";
    const hourString = hours > 12 ? hours - 12 : hours;
    const minuteString = date.getMinutes().toString().padStart(2, "0");
    return ` ${hourString}:${minuteString} ${period}`;
  };

  // Đồng hồ
  const getCountdownTime = () => {
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const timeLeft = endOfDay.getTime() - currentTime.getTime();
    const hoursLeft = Math.floor(timeLeft / 3600000);
    const minutesLeft = Math.floor((timeLeft / 60000) % 60);
    const secondsLeft = Math.floor((timeLeft / 1000) % 60);

    return (
      <div className="countdown">
        <div className="countdown-item">
          <div className="countdown-value">{hoursLeft}</div>
          <div className="countdown-label">Giờ</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">
            {minutesLeft.toString().padStart(2, "0")}
          </div>
          <div className="countdown-label">Phút</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">
            {secondsLeft.toString().padStart(2, "0")}
          </div>
          <div className="countdown-label">Giây</div>
        </div>
      </div>
    );
  };

  const imageList = [
    "./images/fususu.com.1.jpg",
    "./images/fususu.com.2.jpg",
    "./images/fususu.com.3.jpg",
    "./images/fususu.com.4.jpg",
    "./images/fususu.com.5.jpg",
    "./images/fususu.com.6.jpg",
    "./images/fususu.com.7.jpg",
    "./images/fususu.com.8.jpg",
    "./images/fususu.com.9.jpg",
    "./images/fususu.com.10.jpg",
    "./images/fususu.com.11.jpg",
    "./images/fususu.com.12.jpg",
    "./images/fususu.com.13.jpg",
    "./images/fususu.com.14.jpg",
    "./images/fususu.com.15.jpg",
    "./images/fususu.com.16.jpg",
    "./images/fususu.com.17.jpg",
    "./images/fususu.com.18.jpg",
    "./images/fususu.com.19.jpg",
    "./images/fususu.com.20.jpg",
    "./images/fususu.com.21.jpg",
    "./images/fususu.com.22.jpg",
    "./images/fususu.com.23.jpg",
    "./images/fususu.com.24.jpg",
    "./images/fususu.com.25.jpg",
    "./images/fususu.com.26.jpg",
    "./images/fususu.com.27.jpg",
    "./images/fususu.com.28.jpg",
    "./images/fususu.com.29.jpg",
    "./images/fususu.com.30.jpg",
    "./images/fususu.com.31.jpg",
    "./images/fususu.com.32.jpg",
    "./images/fususu.com.33.jpg",
    "./images/fususu.com.34.jpg",
    "./images/fususu.com.35.jpg",
    "./images/fususu.com.36.jpg",
    "./images/fususu.com.37.jpg",
    "./images/fususu.com.38.jpg",
    "./images/fususu.com.39.jpg",
    "./images/fususu.com.40.jpg",
    "./images/fususu.com.41.jpg",
    "./images/fususu.com.42.jpg",
    "./images/fususu.com.43.jpg",
    "./images/fususu.com.44.jpg",
    "./images/fususu.com.45.jpg",
    "./images/fususu.com.46.jpg",
    "./images/fususu.com.47.jpg",
    "./images/fususu.com.48.jpg",
    "./images/fususu.com.49.jpg",
    "./images/fususu.com.50.jpg",
    "./images/fususu.com.51.jpg",
    "./images/fususu.com.52.jpg",
    "./images/fususu.com.53.jpg",
    "./images/fususu.com.54.jpg",
  ];

  function randomImage() {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[randomIndex];
    return randomImage;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleSleep}>
            Ngủ mấy giờ
          </Button>
        </Col>
      </Row>
      {sleepTime && (
        <Row className="mt-4">
          <Col>
            <Card bg={"dark"} text={"white"} border="primary">
              <Card.Body>
                <Card.Header
                  as={"h2"}
                  className="text-center bg-primary p-3 mb-4"
                >
                  Hiện tại: {getFormattedTime(sleepTime)}.
                </Card.Header>
                <Row>
                  <Col>
                    <Card.Text>
                      Nếu bạn đi ngủ ngay bây giờ, bạn nên cố gắng thức dậy vào
                      một trong những thời điểm sau:
                    </Card.Text>
                    <ListGroup horizontal>
                      {wakeUpTimes.map((time, index) => (
                        <ListGroupItem key={index} as="h4" action>
                          {time.toLocaleTimeString()}
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  </Col>
                  {/* End Time */}
                  <Col></Col>
                  <Col>
                    <Card.Text border="primary">
                      <Button variant="success">Kết Thúc Ngày trong </Button>
                      <span className="countdown-text">
                        {getCountdownTime()}
                      </span>{" "}
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      <Row>
        {/* // Sử dụng khi trình duyệt reload */}
        <Image src={randomImage()}></Image>
      </Row>
    </Container>
  );
}

export default App;
