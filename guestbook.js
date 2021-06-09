const app = Vue.createApp({
    data() {
        return {
            header: "Write your Message :)",
            message: "Write your Message",
        };
    },
    methods: {
        btnsignin: function(event) {
            window.location.href = "guestbook.html";
        },
        btnsignup: function(event) {
            window.location.href = "signup.html";
        },
    },
}).mount("#container");