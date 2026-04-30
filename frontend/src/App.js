import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate Slides
  const generateSlides = async () => {
    setLoading(true);
    try {
      const res = await axios.post("https://ai-slides-generator.onrender.com/generate-slides", {
        text: text
      });
      setSlides(res.data);
      setCurrentIndex(0);
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  // Navigation
  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Download Slides
  const downloadSlides = () => {
    let content = "";

    slides.forEach((slide, index) => {
      content += `Slide ${index + 1}\n`;
      content += `${slide.title}\n`;
      slide.points.forEach(p => {
        content += `- ${p}\n`;
      });
      content += "\n\n";
    });

    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "slides.txt";
    a.click();
  };

  return (
    <div className="container">
      <h1 className="title">AI Slides Generator</h1>
      <p className="subtitle">Convert notes into presentation slides</p>

      {/* Input */}
      <textarea
        rows="6"
        placeholder="Paste your notes here..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setSlides([]);
        }}
      />

      <br /><br />

      {/* Buttons */}
      <button onClick={generateSlides} disabled={!text || loading}>
        {loading ? "Generating..." : "Generate Slides"}
      </button>

      <button onClick={downloadSlides} disabled={slides.length === 0}>
        Download Slides
      </button>

      <hr />

      {/* Slide Viewer */}
      {slides.length > 0 && (
        <div className="slide-card">
          <h2>{slides[currentIndex].title}</h2>

          <ul>
            {slides[currentIndex].points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <div className="nav-buttons">
            <button onClick={prevSlide} disabled={currentIndex === 0}>
              Previous
            </button>

            <span>
              Slide {currentIndex + 1} / {slides.length}
            </span>

            <button
              onClick={nextSlide}
              disabled={currentIndex === slides.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;