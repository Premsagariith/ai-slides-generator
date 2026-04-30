from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Simple slide generation logic
def generate_slides(text):
    slides = []

    # Split text into paragraphs
    paragraphs = text.split("\n")

    for para in paragraphs:
        if para.strip() == "":
            continue

        # First few words as title
        words = para.split()
        title = " ".join(words[:5])  # first 5 words

        # Remaining as bullet points
        points = []
        sentences = para.split(".")
        for s in sentences:
            if s.strip():
                points.append(s.strip())

        slides.append({
            "title": title,
            "points": points[:3]  # max 3 bullets
        })

    return slides


@app.route('/generate-slides', methods=['POST'])
def generate():
    data = request.get_json()
    text = data.get("text", "")

    slides = generate_slides(text)

    return jsonify(slides)


@app.route('/')
def home():
    return "Backend working!"


if __name__ == '__main__':
    app.run(debug=True)