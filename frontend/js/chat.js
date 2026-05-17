// ==================== CHAT SYSTEM JS ====================

class ChatSystem {
    constructor() {
        this.messageInput = document.getElementById('messageInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.chatMessages = document.getElementById('chatMessages');
        this.toggleAutoReply = document.getElementById('toggleAutoReply');
        this.autoReplyBanner = document.getElementById('autoReplyBanner');
        
        this.autoReplyActive = true;
        this.messages = [];
        
        this.init();
    }

    init() {
        // Event listeners
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        if (this.toggleAutoReply) {
            this.toggleAutoReply.addEventListener('click', () => this.toggleAutoReplyMode());
        }

        // Scroll ke bawah saat load
        this.scrollToBottom();
        console.log('✅ Chat System initialized');
    }

    sendMessage() {
        const messageText = this.messageInput.value.trim();
        
        if (!messageText) return;

        // Tampilkan pesan dari user (CUSTOMER)
        this.displayMessage(messageText, 'customer');
        this.messageInput.value = '';
        this.messageInput.focus();

        // Auto-reply dari driver jika aktif
        if (this.autoReplyActive) {
            setTimeout(() => {
                const autoReplyMessage = this.getAutoReplyMessage();
                this.displayMessage(autoReplyMessage, 'driver', true);
            }, 500);
        }
    }

    displayMessage(text, sender, isAutoReply = false) {
        const messageGroup = document.createElement('div');
        messageGroup.className = `message-group ${sender}`;

        const message = document.createElement('div');
        message.className = 'message';
        if (isAutoReply) {
            message.classList.add('bot-indicator');
        }
        message.textContent = text;

        const timestamp = document.createElement('span');
        timestamp.className = 'timestamp';
        timestamp.textContent = this.getCurrentTime();

        messageGroup.appendChild(message);
        messageGroup.appendChild(timestamp);
        this.chatMessages.appendChild(messageGroup);

        this.scrollToBottom();
    }

    getAutoReplyMessage() {
        const autoReplies = [
            '🤖 Driver sedang dalam perjalanan, akan sampai dalam 5 menit!',
            '🤖 Maaf sedang fokus mengemudi, akan balas setelah sampai tujuan',
            '🤖 Driver dalam perjalanan, terima kasih sudah menunggu!',
            '🤖 Sedang mengemudi dengan aman, akan segera menghubungi Anda'
        ];
        return autoReplies[Math.floor(Math.random() * autoReplies.length)];
    }

    toggleAutoReplyMode() {
        this.autoReplyActive = !this.autoReplyActive;
        
        if (this.autoReplyBanner) {
            if (this.autoReplyActive) {
                this.autoReplyBanner.style.display = 'flex';
                this.toggleAutoReply.textContent = 'Matikan';
                this.showNotification('✅ Auto-Reply AKTIF');
            } else {
                this.autoReplyBanner.style.display = 'none';
                this.toggleAutoReply.textContent = 'Aktifkan';
                this.showNotification('❌ Auto-Reply DIMATIKAN');
            }
        }
    }

    getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    showNotification(message) {
        console.log(message);
        // Bisa di-enhance dengan toast notification library
    }
}

// Initialize saat DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new ChatSystem();
});

console.log('🚀 Web-Ojol Chat System Loaded');