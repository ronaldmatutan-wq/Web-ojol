const express = require('express');
const router = express.Router();

// ==================== CHAT ROUTES ====================

// POST: Send message
router.post('/send', (req, res) => {
    const { senderId, receiverId, message } = req.body;

    if (!senderId || !receiverId || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'Missing required fields' 
        });
    }

    // TODO: Save message to database
    // TODO: Emit Socket.io event untuk real-time update

    res.json({
        success: true,
        message: 'Message sent successfully',
        data: {
            senderId,
            receiverId,
            message,
            timestamp: new Date()
        }
    });
});

// GET: Get chat history
router.get('/history/:userId/:driverId', (req, res) => {
    const { userId, driverId } = req.params;

    // TODO: Get messages dari database
    // TODO: Return messages antara userId dan driverId

    res.json({
        success: true,
        data: [
            {
                sender: 'customer',
                message: 'Mas, ada di mana sekarang?',
                timestamp: '2026-05-17T10:30:00Z'
            },
            {
                sender: 'driver',
                message: '🤖 Driver sedang dalam perjalanan, akan sampai dalam 5 menit!',
                isAutoReply: true,
                timestamp: '2026-05-17T10:31:00Z'
            }
        ]
    });
});

// POST: Send auto-reply
router.post('/auto-reply/send', (req, res) => {
    const { driverId, customerId } = req.body;

    // TODO: Get auto-reply template dari database
    // TODO: Send auto-reply message

    res.json({
        success: true,
        message: 'Auto-reply sent',
        data: {
            message: '🤖 Driver sedang dalam perjalanan, akan sampai dalam 5 menit!',
            isAutoReply: true,
            timestamp: new Date()
        }
    });
});

// PUT: Toggle auto-reply status
router.put('/auto-reply/toggle/:driverId', (req, res) => {
    const { driverId } = req.params;
    const { active } = req.body;

    // TODO: Update driver auto-reply status di database

    res.json({
        success: true,
        message: `Auto-reply ${active ? 'activated' : 'deactivated'}`,
        data: {
            driverId,
            autoReplyActive: active
        }
    });
});

module.exports = router;