<div align="center">
  <img src="static-assests/nandi-logo.png" alt="nandi-logo" width="250"/>
</div>

# 🌾 NANDI - AI-Powered Digital Krishi Officer

<!-- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) -->
<!-- [![Docker](https://img.shields.io/badge/Docker-20.10.7-blue?style=for-the-badge&logo=docker)](https://www.docker.com/) -->
<!-- [![Kubernetes](https://img.shields.io/badge/Kubernetes-1.21-blue?style=for-the-badge&logo=kubernetes)](https://kubernetes.io/) -->


[![Python](https://img.shields.io/badge/Python-3.9%2B-blue?style=for-the-badge&logo=python)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.70.0-green?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![RAG](https://img.shields.io/badge/Architecture-RAG-red?style=for-the-badge&logo=deepmind)](https://arxiv.org/abs/2005.11401)
[![Next.js](https://img.shields.io/badge/Frontend-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![PyTorch](https://img.shields.io/badge/Deep%20Learning-PyTorch-EE4C2C?style=for-the-badge&logo=pytorch)](https://pytorch.org/)
[![Hugging Face](https://img.shields.io/badge/Models-Hugging%20Face-yellow?style=for-the-badge&logo=huggingface)](https://huggingface.co/)
[![NVIDIA CUDA](https://img.shields.io/badge/GPU-NVIDIA%20CUDA-76B900?style=for-the-badge&logo=nvidia)](https://developer.nvidia.com/cuda-toolkit)
[![AI4Bharat](https://img.shields.io/badge/AI4Bharat-IndicBERT-orange?style=for-the-badge&logo=ai4bharat)](https://ai4bharat.org/)
[![Agriculture](https://img.shields.io/badge/Domain-Agriculture-green?style=for-the-badge&logo=leaf)](https://github.com/justAbhinav/Nandi-System)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-purple?style=for-the-badge&logo=openai)](https://openai.com/)
[![Multilingual](https://img.shields.io/badge/Supports-12%2B%20Languages-purple?style=for-the-badge&logo=translate)](https://github.com/justAbhinav/Nandi-System)

> **Democratizing agricultural expertise for India's 146 million farmers through AI-powered, multilingual advisory services**

## 🎯 Our Mission

NANDI transforms agricultural advisory services by creating an intelligent, multilingual AI system that provides instant, context-aware farming guidance. We bridge the critical gap where only 49% of farmers currently access technical advisory services, making expert-level farming advice accessible to all.

---

## ✨ Key Features

### 🗣️ **Multilingual Voice & Text Processing**

- Support for 12+ Indian languages including Hindi, Tamil, Telugu, Bengali, and more
- Fine-tuned Whisper models for accurate speech recognition
- Natural conversation flow in farmer's native language

### 📱 **Multimodal Intelligence**

- **Voice Queries**: "मेरी गेहूं की फसल में पीले धब्बे हैं, क्या करूं?"
- **Image Analysis**: Upload crop photos for disease detection (97.25% accuracy)
- **Text Chat**: Type questions in any supported language

### 🎯 **Context-Aware Recommendations**

- Location-based advice using GPS coordinates
- Crop-specific guidance based on farmer's cultivation
- Seasonal recommendations aligned with agricultural calendar
- Historical query understanding for personalized responses

### 🏥 **Smart Escalation System**

- Complex queries automatically routed to local agricultural officers
- Context and preliminary diagnostics shared with experts
- Seamless handoff with query history preservation

### 📈 **Continuous Learning**

- Real-time feedback integration
- Expert validation loops
- Self-improving AI models
- Community knowledge enhancement

---

## 🚀 Core Values

### **Accessibility First**

Every farmer, regardless of literacy level or smartphone access, deserves expert agricultural guidance.

### **Cultural Sensitivity**

Deep respect for local farming practices, integrating traditional wisdom with modern AI.

### **Privacy & Trust**

Farmer data protection with transparent, explainable AI recommendations.

### **Scalable Impact**

Building for millions - from individual farmers to entire agricultural communities.

---

## 🛠️ Technology Stack

### **Backend Architecture**

```
├── 🤖 AI/ML Layer
│   ├── RAG (Retrieval-Augmented Generation)
│   ├── Fine-tuned Whisper ASR
│   ├── AI4Bharat Language Models
│   └── Computer Vision (CNN-based)
│
├── 🌐 API Services
│   ├── FastAPI / Flask
│   ├── PostgreSQL / MongoDB
│   ├── Redis Caching
│   └── Celery Task Queue
│
└── ☁️ Infrastructure
    ├── Docker Containerization
    ├── Kubernetes Orchestration
    ├── AWS/GCP Cloud Services
    └── Edge Computing Support
```

### **Frontend Interfaces**

- **Mobile App**: React Native / Flutter
- **Web Dashboard**: React.js / Next.js
- **SMS Gateway**: Twilio / MSG91
- **WhatsApp Bot**: WhatsApp Business API

### **AI & ML Components**

- **Speech Recognition**: OpenAI Whisper (fine-tuned)
- **Language Models**: AI4Bharat IndicBERT, GPT-3.5/4
- **Computer Vision**: TensorFlow/PyTorch CNN models
- **Knowledge Retrieval**: FAISS Vector Database
- **Real-time APIs**: Weather, Market Prices, Government Schemes

---

## 📊 Impact Metrics

| Metric                 | Target             | Current Status |
| ---------------------- | ------------------ | -------------- |
| 👨‍🌾 Farmers Reached     | 10M+               | In Development |
| ⚡ Response Time       | <5 seconds         | Optimizing     |
| 🎯 Query Accuracy      | >95%               | Testing Phase  |
| 🌍 Languages Supported | 12+                | 5 Ready        |
| 💰 Cost Reduction      | 90% vs traditional | Projected      |

---

## 🏗️ System Architecture

```mermaid
graph TD
    A[Farmer Input] --> B{Input Type}
    B -->|Voice| C[Whisper ASR]
    B -->|Text| D[NLP Processing]
    B -->|Image| E[Computer Vision]

    C --> F[Language Detection]
    D --> F
    E --> G[Disease Detection]

    F --> H[Intent Classification]
    G --> H
    H --> I[Knowledge Retrieval]

    I --> J[RAG Processing]
    J --> K{Confidence Check}

    K -->|High| L[AI Response]
    K -->|Low| M[Expert Escalation]

    L --> N[Response Generation]
    M --> O[Agricultural Officer]

    N --> P[Output Processing]
    P --> Q[Farmer Response]
```

---

## 🚦 Getting Started

### Prerequisites

- Python 3.9+
- Node.js 16+
- Docker & Docker Compose
- PostgreSQL
- Redis

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/justAbhinav/Nandi-System.git
cd Nandi-System

# Set up backend
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Set up frontend
cd ../frontend
npm install
npm start

# Run with Docker
docker-compose up -d
```

### Configuration

```bash
# Environment Variables
cp .env.example .env

# Required API Keys
OPENAI_API_KEY=your_openai_key
WHISPER_MODEL_PATH=path_to_fine_tuned_model
WEATHER_API_KEY=your_weather_api_key
SMS_GATEWAY_KEY=your_sms_key
```

---

## 📱 Usage Examples

### Voice Query (Hindi)

```
🎤 "मेरे टमाटर के पौधे में कीड़े लग गए हैं। कौन सी दवा डालूं?"

🤖 "आपके टमाटर में फल छेदक कीट लगा है। इमामेक्टिन बेंजोएट
    5% SG @ 0.4 ग्राम प्रति लीटर पानी में मिलाकर छिड़काव करें।"
```

### Image Analysis

```
📷 [Farmer uploads crop disease image]

🤖 "Detected: Tomato Late Blight
    Confidence: 96.8%
    Treatment: Apply Metalaxyl + Mancozeb fungicide
    Prevention: Improve drainage, avoid overhead watering"
```

---

## 🤝 Contributing

Currently we are not open for contirbutions, The Idea is still in its ideation phase.

<!-- ### Development
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

### Agricultural Content

- Submit crop-specific knowledge
- Share local farming practices
- Contribute to multilingual datasets
- Validate AI recommendations

---

## 📚 Documentation

- [API Documentation](docs/API.md)
- [Model Training Guide](docs/TRAINING.md)
- [Deployment Instructions](docs/DEPLOYMENT.md)
- [Contributing Guidelines](CONTRIBUTING.md)

---

## 🎯 Roadmap

### Phase 1

- [ ] Core RAG system deployment
- [ ] 5 Indian languages support
- [ ] Basic crop disease detection
- [ ] SMS/WhatsApp integration

### Phase 2

- [ ] 12+ language support
- [ ] Advanced computer vision
- [ ] Mobile app launch
- [ ] Government scheme integration

### Phase 3

- [ ] Livestock advisory
- [ ] Market price predictions
- [ ] Satellite integration
- [ ] 10M farmer milestone

---

<!-- ## 🏆 Recognition
 -->

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Core Development Team**

- **Abhinav Singh (Team Leader)** - AI & ML Engineer
- **Lakshya Rawat** - Backend Developer
- **Jyoti Kumari** - Cybersecurity Engineer
- **Sanskriti Arora** - Frontend Developer
- **Aditya Narula** - UI/UX Developer
- **Karun Pacholi** - Blockchain & Web3 Developer

---

## 📞 Contact & Support

- 📧 Email: 22ucs004@lnmiit.ac.in
- 🌐 Website: [nandi-farming-copilot.vercel.app](https://nandi-farming-copilot.vercel.app/)
  <!-- - 📱 WhatsApp: +91-XXXXX-XXXXX -->
  <!-- - 🐦 Twitter: [@NandiAgri](https://twitter.com/NandiAgri) -->

---

<!-- ## 🙏 Acknowledgments

- **AI4Bharat** for Indic language models and datasets
- **OpenAI** for Whisper speech recognition technology
- **Indian Agricultural Research Institute** for domain expertise
- **Smart India Hackathon** for platform and support
- **Farming communities** for continuous feedback and validation -->

---

<div align="center">

### 🌱 _Empowering Every Farmer, One Query at a Time_ 🌱

**Made with ❤️ for India's farming community**

[![Star this repo](https://img.shields.io/github/stars/justAbhinav/Nandi-System?style=social)](https://github.com/justAbhinav/Nandi-System/stargazers)
[![Follow on GitHub](https://img.shields.io/github/followers/justAbhinav?style=social)](https://github.com/justAbhinav)

</div>
