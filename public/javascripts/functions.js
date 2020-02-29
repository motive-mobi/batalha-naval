$(document).ready(function(){
  $('#enterGame').click(function(){
    let data = $('#inputNickName').val();

    axios.post('/api', {
      nickname: data,
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  });
});
