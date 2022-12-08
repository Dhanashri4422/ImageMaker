window.onload = function() {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');

    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    $("#file").change(function(e){
        img = new Image;
        img.onload = function() {
            context.drawImage(img,  -20, -20);
        }
        img.src = URL.createObjectURL(e.target.files[0]);
    })

    $(".image-container img").click(function(e){

        var id = $(this).attr("id");
        $("#hidden").attr("src", "shapes/" + id + ".png");

        //clipping code
        img1 = document.getElementById("hidden");

        //resetting canvas
        context.fillStyle = '#fff';
        context.fillRect(-100, -100, canvas.width, canvas.height);

        //clip
        context.globalCompositeOperation = 'source-in';
        context.drawImage(img1,100, 40);
        context.drawImage(img, 30,40);
        context.globalCompositeOperation='source-over';
    })
}