$(function (){
    var files = [];
    $.getJSON("files.json", function (data){
        $.each(data.files,function(i,f){
            console.log(i)
            console.log(f)
            $.each(f,function (i,key) {
                console.log(i)
                $( 'link[id=1]').attr(href, $(f.key))
            })
        })
    })
})