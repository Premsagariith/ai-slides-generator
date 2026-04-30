# 🚀 AI Slides Generator

An intelligent web application that converts raw text notes into structured presentation slides using a simple backend logic.

---

## 📌 Features

* ✍️ Input text notes
* 📊 Automatically generate slides (title + bullet points)
* ⬅️➡️ Navigate between slides
* ⏳ Loading state for better UX
* 📥 Download slides as a text file
* 🎨 Clean and modern UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Python
* Flask
* Flask-CORS

---

## ⚙️ How It Works

1. User enters text notes in the frontend
2. React sends a POST request to Flask API
3. Backend processes text:

   * Splits into paragraphs
   * Generates slide titles
   * Extracts bullet points
4. Returns structured JSON
5. Frontend displays slides dynamically

---

## 📂 Project Structure

```
project/
│
├── backend/
│   └── app.py
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   └── App.css
```

---

## ▶️ Run Locally

### 1️⃣ Backend

```
cd backend
pip install flask flask-cors
python app.py
```

---

### 2️⃣ Frontend

```
cd frontend
npm install
npm start
```

---

## 🌐 API Endpoint

```
POST /generate-slides
```

### Request:

```
{
  "text": "Your notes here..."
}
```

### Response:

```
[
  {
    "title": "Slide Title",
    "points": ["Point 1", "Point 2"]
  }
]
```

---

## 🚀 Future Improvements

* 🤖 Integrate LLM (GPT) for smarter slide generation
* 📄 Export slides as PDF or PPT
* 📂 File upload support
* 🗄️ Database integration
* 🔐 User authentication

---

## 💡 Author

PremSagar

---

## ⭐ Notes

This project demonstrates full-stack development using React and Flask, along with basic text processing and UI design.

---
