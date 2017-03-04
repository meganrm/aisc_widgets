
$(".photo-upload").change(function(e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

        var file = e.originalEvent.srcElement.files[i];
        var id = this.id
        var img = $('#' + id + '-target');
        console.log(img);
        var reader = new FileReader();
        reader.onloadend = function() {
             img.attr('src',  reader.result);
        }
        reader.readAsDataURL(file);
    }
});
