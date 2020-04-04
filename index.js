window.onload=function winload(){
  var searchbox=document.getElementsByClassName('search-box')[0];
  var searchex=document.getElementsByClassName('sexit')[0];
  var mag=document.getElementsByClassName('mag')[0];
  var search=document.getElementsByClassName('souter')[0];
  var sin=document.getElementsByClassName('search')[0];


  var sopen=0;
  var sexit=1
  function open_search(){
    if (sopen==0){
      searchbox.classList.toggle('open');
      searchex.classList.toggle('open');
      mag.classList.toggle('open');
      search.classList.toggle('open');
      sin.classList.toggle('open');
      sin.placeholder='Type Here';
      sopen=1;
      sexit=0;
  }}
  function exit_search(){
    if (sexit==0){
      searchbox.classList.toggle('open');
      searchex.classList.toggle('open');
      mag.classList.toggle('open');
      search.classList.toggle('open');
      sin.classList.toggle('open');
      sin.placeholder='';
      sexit=1;
      setTimeout(function(){sopen=0},500);
    }
  }
  function toggle_mag(){
    mag.classList.toggle('on');
  }
  function toggle_searchbox(){
    searchbox.classList.toggle('on');
  }

  searchex.addEventListener('click',exit_search);
  searchbox.addEventListener('click',open_search);

  searchbox.addEventListener('mouseover',toggle_searchbox);
  searchbox.addEventListener('mouseout',toggle_searchbox);
  mag.addEventListener('mouseover',toggle_mag);
  mag.addEventListener('mouseout',toggle_mag);


}
