// ==================== SOCKET.IO CHAT HANDLER ====================
// Real-time chat dengan Socket.io

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`✅ User connected: ${socket.id}`);

        // User join room (untuk private chat)
        socket.on('join_chat', (data) => {
            const { userId, driverId } = data;
            const roomId = [userId, driverId].sort().join('_'); // Unique room ID
            
            socket.join(roomId);
            console.log(`📍 ${socket.id} joined room: ${roomId}`);
        });

        // Send message
        socket.on('send_message', (data) => {
            const { senderId, receiverId, message, isAutoReply } = data;
            const roomId = [senderId, receiverId].sort().join('_');
            
            // Emit pesan ke room
            io.to(roomId).emit('receive_message', {
                sender: data.sender,
                message,
                isAutoReply,
                timestamp: new Date(),
                senderAvatar: data.senderAvatar
            });
            
            console.log(`💬 Message sent in room ${roomId}`);
        });

        // Auto-reply toggle
        socket.on('toggle_auto_reply', (data) => {
            const { driverId, isActive } = data;
            
            socket.broadcast.emit('auto_reply_status_changed', {
                driverId,
                isActive
            });
            
            console.log(`🤖 Auto-reply ${isActive ? 'activated' : 'deactivated'} for driver ${driverId}`);
        });

        // Typing indicator
        socket.on('typing', (data) => {
            const { senderId, receiverId } = data;
            const roomId = [senderId, receiverId].sort().join('_');
            
            socket.to(roomId).emit('user_typing', {
                sender: data.sender,
                isTyping: true
            });
        });

        socket.on('stop_typing', (data) => {
            const { senderId, receiverId } = data;
            const roomId = [senderId, receiverId].sort().join('_');
            
            socket.to(roomId).emit('user_typing', {
                sender: data.sender,
                isTyping: false
            });
        });

        // Disconnect
        socket.on('disconnect', () => {
            console.log(`❌ User disconnected: ${socket.id}`);
        });
    });
};