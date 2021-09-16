var app = new Vue({
    el:'#root',
    data:{
        show:[],
        prova2:[]
    },
    mounted(){
        for (let i = 0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response)=>{
                        
                        this.prova2.push(response.data.response);
                        console.log(response.data.response);
                        if (this.prova2.length == 10){
                            this.show= this.prova2
                        }
                    })
        }
        
        
     },


  


})