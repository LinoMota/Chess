
//pegar todos as areas da ufam
$.ajax({
    url:"/area/all",
    method : "get",
    dataType: "json",
    success : function(e){
        //array de cursos
        console.log(e)
        $(e).each((i,v)=>{
            if(v.id != $("select")[0].children[0].value)
                $("#areas").append("<option value='"+ v.id +"' >"+ v.nome +"</option>")
        })
    },
    error : function(e){
        console.log(e)
    }
})