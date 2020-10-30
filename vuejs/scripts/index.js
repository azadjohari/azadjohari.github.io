var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!!"
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "You loaded this page on " + new Date().toLocaleString(),
        linkURL: "https://www.google.com.my",
        linkText: "Go to Google Malaysia!"
    }
});

var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { text: "Learn HTML - Done" },
            { text: "Learn CSS - Done" },
            { text: "Learn JS - Done" },
            { text: "Learn Vue - In Progress" }
        ]
    }
});

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "Azad Johari"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "Hello World!"
    }
});