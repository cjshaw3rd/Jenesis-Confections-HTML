window.onload=function winload(){
  loc=window.location.pathname;
  dir=loc.substring(0,loc.lastIndexOf('/'));

  ss_photo_list=['photo1.JPG','photo2.JPG','photo3.JPG','photo4.JPG'];


  var searchbox=document.getElementsByClassName('search-box')[0];
  var searchex=document.getElementsByClassName('sexit')[0];
  var mag=document.getElementsByClassName('mag')[0];
  var search=document.getElementsByClassName('souter')[0];
  var sin=document.getElementsByClassName('search')[0];
  var slide_show=document.getElementById('ss_photo');


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

  ss_start=0
  ss_counter=1
  function slide_change(){
    slide_show.style.backgroundImage="url("+dir+'/images/ss_photos/'+ss_photo_list[ss_counter]+")";
    if (ss_counter!=3){
      ss_counter++;
    }
    else{
      ss_counter=0;
    }
  };

  setInterval(slide_change,5000);

}
