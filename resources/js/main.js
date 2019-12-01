import $ from 'jquery';
import Axios from 'axios';

$('.c-menu').css('bottom', function() {
    var value = $(this).prev().height()
    return value;
}).addClass('d-none');

$(document).click(function() {
    $('.c-menu').addClass('d-none');
});

$('.c-menu-toggle').click(function(e) {
    e.stopPropagation();
    if ($(this).next('.c-menu').hasClass('d-none')) {
        $('.c-menu').addClass('d-none');
        $(this).next('.c-menu').removeClass('d-none');
    } else {
        $('.c-menu').addClass('d-none');
    }
});

$('.edit-comment').click(function() {
    var content = $(this).closest('.comment').find('.content');
    $("#post"+$(this).attr('value')).val(content.text().trim());
    var el = "<input value="+$(content).attr('value')+" type='hidden' name='comment_id'/>"
    $("#post"+$(this).attr('value')).parent().append(el);
    window.scrollTo(0, $("#post"+$(this).attr('value')).offset().top - window.outerHeight/2);
    $("#post"+$(this).attr('value')).closest('.add-comment').find('.text').text('Edit Comment');
});

$('.edit-post').click(function(e) {
    $('#postModal').modal();
    var parent = $(this).closest('.post');
    var title = parent.find('.post-title').text().trim();
    var content = parent.find('.post-content').text().trim();
    $('#postModal').find('#title').val(title);
    $('#postModal').find('#content').val(content);
    $('#postModal').find('#post_id').val($(this).attr('value'));
    $('#postModal').find('#submitBtn').text('Edit');
});

$('.new-post').click(function(e) {
    $('#postModal').modal();
    $('#postModal').find('#title').val("");
    $('#postModal').find('#content').val("");
    $('#postModal').find('#post_id').val("");
    $('#postModal').find('#submitBtn').text('Create');
});

$('.delete-post').click(function(e) {
    if (confirm('Are you sure you want to delete this Post ?')) {
        Axios.delete('/post', {
            params: {
                post_id: e.currentTarget.attributes['value'].value
            }
        }).then(window.location.reload());
    }
});

$('.delete-user').click(function() {
    if (confirm('Are you sure you want to delete this User, his Comments and Posts ?')) {
        Axios.delete('/user/'+$(this).attr('value')).then(window.location.reload());
    }
});

$('.edit-user').click(function(e) {
    $('#userModal').modal();
    var el = $(this).closest('.user');
    $('#userModal').find('#user_id').val(el.attr('value'))
    $('#userModal').find('#name').val(el.find('.name').text().trim());
    $('#userModal').find('#email').val(el.find('.email').text().trim());
    $('#userModal').find('#role').val(role(el.find('.role').text().trim()));
    $('#userModal').find('#submitBtn').text('Edit');
});

$('#add-user').click(function(e) {
    $('#userModal').modal();
    $('#userModal').find('#user_id').val("")
    $('#userModal').find('#name').val("");
    $('#userModal').find('#email').val("");
    $('#userModal').find('#role').val("");
    $('#userModal').find('#submitBtn').text('Create');
});

function role(string) {
    if (string == 'Admin') {
        return 1;
    } else if (string == 'Author') {
        return 2;
    } else {
        return 3;
    }
}

window.filter = function(e) {
    $('.user').addClass('d-table-row').removeClass('d-none');
    if (e) {
        $('.user').each((i, el)=>{
            if (role($(el).find('.role').text().trim()) != e) {
                $(el).toggleClass('d-table-row d-none');

            }
        });
    }
}

window.getResult = function() {
    var val = $('#search_query').val();
    if (val != '')
    window.location = '/searchPage?query='+val;
}

var isTimeoutSet = false;
window.search = function(e) {
    if (e.value != "") {
        if (!isTimeoutSet) {
            isTimeoutSet = true;
            setTimeout(()=>{
                if (e.value != "") {
                    Axios.get('/search?query='+e.value).then((res)=>{
                        $('.c-dropdown').show();
                        $('.c-dropdown').find('.content').empty();
                        res.data.forEach((data)=>{
                            let title = data.title.slice(0, 45) + ' ...'
                            $('.c-dropdown').find('.content').append(
                            "<a href='/post/"+data.id+"'>\
                            <li class='p-1 border border-primary rounded m-1'>"+title+"</li>\
                            </a>")
                        });
                        if (res.data.length == 0) {
                            $('.c-dropdown').find('.content').append('No Posts Found')
                        }
                    });
                } else {
                    $('.c-dropdown').hide();
                    $('.c-dropdown').find('.content').empty();
                }
                isTimeoutSet = false;
            }, 500)
        }
    } else {
        $('.c-dropdown').hide();
        $('.c-dropdown').find('.content').empty();
    }
    
}
$('.c-dropdown').hide();