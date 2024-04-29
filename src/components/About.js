import React from "react";

export default function About({ mode }) {
  return (
    <div
      className="container py-1 px-2"
      style={{
        color: mode === "light" ? "#000814" : "white",
        backgroundColor:
          mode === "light"
            ? "white"
            : mode === "dark"
            ? "#001f38"
            : mode === "green"
            ? "#284e28"
            : "#4a2354",
      }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              mode === "light"
                ? "#f8f9fa"
                : mode === "dark"
                ? "#001f38"
                : mode === "green"
                ? "#284e28"
                : "#4a2354",
            color: mode === "light" ? "#000814" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={{
                backgroundColor:
                  mode === "light"
                    ? "#f8f9fa"
                    : mode === "dark"
                    ? "#001f38"
                    : mode === "green"
                    ? "#284e28"
                    : "#4a2354",
                color: mode === "light" ? "#000814" : "white",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Welcome to our Text Utilities!
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              We are passionate about simplifying your text-related tasks and
              enhancing your productivity. Our suite of tools is designed to
              provide you with efficient solutions for various text manipulation
              needs.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              mode === "light"
                ? "#f8f9fa"
                : mode === "dark"
                ? "#001f38"
                : mode === "green"
                ? "#284e28"
                : "#4a2354",
            color: mode === "light" ? "#000814" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor:
                  mode === "light"
                    ? "#f8f9fa"
                    : mode === "dark"
                    ? "#001f38"
                    : mode === "green"
                    ? "#284e28"
                    : "#4a2354",
                color: mode === "light" ? "#000814" : "white",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Explore textUtils
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Explore our range of utilities and discover how they can simplify
              your text-related tasks. We're constantly updating and improving
              our tools to ensure they meet your evolving needs.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              mode === "light"
                ? "#f8f9fa"
                : mode === "dark"
                ? "#001f38"
                : mode === "green"
                ? "#284e28"
                : "#4a2354",
            color: mode === "light" ? "#000814" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                backgroundColor:
                  mode === "light"
                    ? "#f8f9fa"
                    : mode === "dark"
                    ? "#001f38"
                    : mode === "green"
                    ? "#284e28"
                    : "#4a2354",
                color: mode === "light" ? "#000814" : "white",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Thank you
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Thank you for choosing Text Utilities for all your text
              manipulation needs. We're here to make your text-related tasks
              easier and more efficient!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
