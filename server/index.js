require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// CORS: Allow access from your specific frontend URL (or * for simple testing)
app.use(cors({
    origin: process.env.CLIENT_URL || '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        process.exit(1); // Exit process with failure
    }
};
connectDB();

// Routes

// Task 5: Health Check Endpoint (Monitoring)
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'UP', 
        timestamp: new Date(), 
        uptime: process.uptime() 
    });
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Simple Post Route
const PostSchema = new mongoose.Schema({ title: String });
const Post = mongoose.model('Post', PostSchema);

app.get('/api/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.post('/api/posts', async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.json(newPost);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));