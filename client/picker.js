Template.picker.onRendered(()=>{
    $('.datetimepicker').datetimepicker({
        timeZone:'Asia/Shanghai',
        useCurrent:true
    });
    // $.getElementById("tttpicker").placeholder="hahaha111111h";
    // tttpicker.datetimepicker({
    //     timeZone:'Asia/Shanghai',
    //     useCurrent:true
    //
    // });
    //  $('.datetimepicker').placeholder="11111";


});

Template.picker.events({
    'click button'(event,template){
        event.preventDefault();//阻止跳转
        document.getElementById("tttpicker").value="54321"
        // $('.datetimepicker').value="11111";
        // var picker=$('.datetimepicker');//获取html里的datetimepicker类所在input框对象
        // var dateTime = picker.data('DateTimePicker').date();//
        // var ret =dateTime.format('mmmm do yyyy, h:mm:ss a');
        // alert(ret);
    }

});