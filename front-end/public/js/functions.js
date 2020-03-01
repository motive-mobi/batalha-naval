$(document).ready(function(){
  $('#enterGame').click(function(){
    let data = $('#inputNickName').val();

    axios.post('/api/v1/players', {
      nickname: data,
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  });
});
