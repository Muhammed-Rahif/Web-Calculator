import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faBatteryHalf,
  faBackspace,
} from "@fortawesome/free-solid-svg-icons";
import "./Main.css";

function Main() {
  const [time, setTime] = useState(moment().format("LT"));
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setInterval(() => {
      let seconds: number = new Date().getSeconds();
      if (seconds === 0) {
        setTime(moment().format("LT"));
      }
    }, 1000);
  }, []);

  var handleBtnClick = (innerBtn: string): void => {
    if (innerBtn === "backspace") {
      // Backspace operation
      setOperation(operation.slice(0, -1));
    } else if (innerBtn === "clear") {
      // Clear opertation
      setOperation("");
    } else if (operation.charAt(operation.length - 1) === ".") {
      // If current operation ending with "."
      if (
        innerBtn === "=" ||
        innerBtn === "+" ||
        innerBtn === "-" ||
        innerBtn === "*" ||
        innerBtn === "/"
      ) {
      } else {
        setOperation(operation + innerBtn);
      }
    } else if (innerBtn === "=") {
      // Equal button operation
      if (
        // Checking that is the existing operation is ending with a operator
        operation.charAt(operation.length - 1) === "+" ||
        operation.charAt(operation.length - 1) === "-" ||
        operation.charAt(operation.length - 1) === "*" ||
        operation.charAt(operation.length - 1) === "/" ||
        operation.charAt(operation.length - 1) === "="
      ) {
        // if it ending with operator nothing to do
      } else {
        // Otherwise
        setOperation(operation + innerBtn);
        setResult(eval(operation));
      }
    } else if (
      // Checking that is the existing operation is ending with a operator
      operation.charAt(operation.length - 1) === "+" ||
      operation.charAt(operation.length - 1) === "-" ||
      operation.charAt(operation.length - 1) === "*" ||
      operation.charAt(operation.length - 1) === "/"
    ) {
      if (
        // If existing operation ending with operator replacing that operator with new operator
        innerBtn === "+" ||
        innerBtn === "-" ||
        innerBtn === "*" ||
        innerBtn === "/"
      ) {
        setOperation(operation.slice(0, -1) + innerBtn);
      } else if (
        (operation.charAt(operation.length - 1) === "*" &&
          operation.length === 1) ||
        (operation.charAt(operation.length - 1) === "/" &&
          operation.length === 1)
      ) {
        setOperation(operation.slice(0, -1) + innerBtn);
      } else {
        // Checking that operation is ending with equal the replacing the whole operation and starting a new one
        if (operation.charAt(operation.length - 1) === "=") {
          setOperation(innerBtn);
        } else {
          // Otherwise
          setOperation(operation + innerBtn);
        }
      }
    } else if (
      operation.charAt(operation.length - 1) === "=" &&
      operation.length === 2
    ) {
      // If the operation like this :- [0-9] =
      setOperation(operation.slice(0, -1) + innerBtn);
    } else {
      // Last case here
      if (operation.charAt(operation.length - 1) === "=") {
        setOperation(innerBtn);
      } else {
        setOperation(operation + innerBtn);
      }
    }
  };

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center full-height">
        <Col sm="8" md="6" xl="4" xs="12" className="calculator">
          <div className="status-bar">
            <div className="wifi">
              <p
                style={{
                  fontSize: "small",
                  fontWeight: "bold",
                  marginRight: "8px",
                }}
              >
                AT&T
              </p>
              <FontAwesomeIcon icon={faWifi} className="wifi" />
            </div>
            <div className="time">
              <p
                style={{
                  fontSize: "small",
                  fontWeight: "bold",
                  marginRight: "8px",
                }}
              >
                {time}
              </p>
            </div>
            <div className="battery">
              <p
                style={{
                  fontSize: "small",
                  fontWeight: "bold",
                  marginRight: "8px",
                }}
              >
                58%
              </p>
              <FontAwesomeIcon icon={faBatteryHalf} className="battery" />
            </div>
          </div>
          <div className="calcualtor-body">
            <div className="results">
              <div className="operations">
                {operation
                  .replaceAll("-", " - ")
                  .replaceAll("+", " + ")
                  .replaceAll("*", " × ")
                  .replaceAll("/", " ÷ ")
                  .replaceAll("=", " =")}
              </div>
              <div className="result">{result ? result : " "}</div>
            </div>
            <div className="buttons">
              <div className="btn-row">
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("clear");
                  }}
                >
                  C
                </button>
                <button
                  className="button"
                  onClick={() => {
                    // handleBtnClick("%");
                  }}
                >
                  {/* % */}
                </button>
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("backspace");
                  }}
                >
                  <FontAwesomeIcon icon={faBackspace} />
                  {/* ⌫ */}
                </button>
                <button
                  className="operator"
                  onClick={() => {
                    handleBtnClick("/");
                  }}
                >
                  ÷
                </button>
              </div>
              <div className="btn-row">
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("7");
                  }}
                >
                  7
                </button>
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("8");
                  }}
                >
                  8
                </button>
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("9");
                  }}
                >
                  9
                </button>
                <button
                  className="operator"
                  onClick={() => {
                    handleBtnClick("*");
                  }}
                >
                  ×
                </button>
              </div>
              <div className="btn-row">
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("4");
                  }}
                >
                  4
                </button>
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("5");
                  }}
                >
                  5
                </button>
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("6");
                  }}
                >
                  6
                </button>
                <button
                  className="operator"
                  onClick={() => {
                    handleBtnClick("-");
                  }}
                >
                  -
                </button>
              </div>
              <div className="btn-row">
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("1");
                  }}
                >
                  1
                </button>
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("2");
                  }}
                >
                  2
                </button>
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("3");
                  }}
                >
                  3
                </button>
                <button
                  className="operator"
                  onClick={() => {
                    handleBtnClick("+");
                  }}
                >
                  +
                </button>
              </div>
              <div className="btn-row">
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("0");
                  }}
                >
                  0
                </button>
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick("00");
                  }}
                >
                  00
                </button>
                <button
                  className="button"
                  onClick={() => {
                    handleBtnClick(".");
                  }}
                >
                  .
                </button>
                <button
                  className="equal"
                  onClick={() => {
                    handleBtnClick("=");
                  }}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
