import HelloWorld from "./components/HelloWorld.Vue"

var app = new Vue({
    el: "#app",
    components: {
        HelloWorld
    },
    data: {
        message: "Hello Vue!!"
    }
});