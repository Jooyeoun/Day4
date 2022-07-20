$(function(){
    $(document).on('click', '#sendit', function(){
        if(!$('#userid').val()){
            alert('아이디를 입력하세요');
            $('#userid').focus();
            return false;
        }

        if(!$('#userpw').val()) {
            alert('비밀번호를 입력하세요');
            $('#userpw').focus();
            return false;
        }

        if(!$('#hp').val()){
            alert('휴대폰번호를 입력하세요');
            $('#hp').focus();
            return false;
        }

        /*
                    {
                        "transaction_time":"2022-07-12",
                        "resultCode":"ok",
                        "description":"ok",
                        "data":{
                            "userid":"ryu",
                            "userpw":"1111",
                            "email":"ryu@naver.com",
                            "hp":"010-1111-1111"
                        }
                    }
         */

        let jsonData = {
            transaction_time: new Date(),
            resultCode:"ok",
            description:"ok",
            data:{
                userid: $('#userid').val(),
                userpw: $('#userpw').val(),
                email: $('#email').val(),
                hp: $('#hp').val()
            }
        }

        $.post({
            url: '/api/user',
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(){
                alert('등록성공!');
                location.href='/pages/user';
            },
            error: function(){
                alert('등록실패!');
                location.reload();
            }
        });
    });
});