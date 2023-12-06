new Vue({
    el:"#app",
    data:{
        title:"vue",
        cars:["prado","miyako"],
        robot:{
            name:"khadija",
            add:"naogaon"
        } ,
        link:"https://vuejs.org/api/built-in-directives.html#v-bind",
        mytext:"Dhaka",
        myhtml:"<h1>Bangladesh</h1>",
        
        age:16,
        extraage:18
    },
    methods:{
        greeting:()=>{
            return "Hello "
        },
        extra(){
            return this.title;
        },
        changeuser(){
            return this.title==='vue'? true : false;
        }
    }
});