// ==================== AUTO REPLY MODEL ====================
// MongoDB Schema untuk auto-reply templates

const mongoose = require('mongoose');

const autoReplySchema = new mongoose.Schema({
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    templates: [
        {
            _id: false,
            message: {
                type: String,
                required: true
            },
            trigger: {
                type: String,
                enum: ['driving', 'on_order', 'idle'],
                default: 'driving'
            }
        }
    ],
    defaultTemplate: {
        type: String,
        default: '🤖 Driver sedang dalam perjalanan, akan sampai dalam 5 menit!'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('AutoReply', autoReplySchema);