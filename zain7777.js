
$('div#tlogins hand.nosel.fl.uzr.border').css({'margin': '1px 0',borderRight: '2px solid #fa58ac',borderLeft: '2px solid #fa58ac',borderTop: '1px solid #fa58ac61',borderBottom: '1px solid #fa58ac61',paddingTop: '2px',borderRadius: '10px'}); 

$("div#tlogins button.btn.btn-primary").click(function(){
var myVar = setInterval(function(){ var usmsgw =$(".pmsgc").length;if(usmsgw > 0){$(`<div class="uzr fl corner borderg mm" style="border-radius:5px;margin-bottom:-2px;width:99.5%;padding:0px; background-color:white;"><img style="width: 36px; height: 38px; margin-left: 1px; margin-top: 1px; background-image: url(https://galychat.com/sico/z1cl0bul3f10.JPG);" class="fl fitimg hand u-pic"><div class="uzr fl" style="padding:0px;width:80%"> <div style="padding:0px;width:100%;" class="fl"><img class="fl u-ico" alt="" src="https://galychat.com/sico/z1cjeh33b410.gif"> <span style="padding: 1px 8px; margin-top: 2px; display: block; max-width: 82%; border-radius: 3px; color: rgb(199, 103, 48);" class="corner nosel u-topic dots fl hand"></span></div><br><div style="padding: 0px; width: 100%; color: rgb(60, 0, 255);" class=" u-msg   break  fl"><div style="padding: 0px;width: 100%;color: rgb(60, 0, 255);text-align: left;display: block;margin-top: -17px;" class=" u-msg   break  fl">  عزيزي🌹  <h1 style="display: inline-block;color: red;">`+ getuser(myid).topic+ `</h1> بأجمل باقات الورد والياسمين نستقبلك ,شكراً لحضورك,وأسعدنا وجودك معنا </div>`).appendTo('div#d2')
clearInterval(myVar);
}else{console.log(usmsgw)} }, 2000);
})
$("div#tlogins button.btn.btn-primary").click(function(){
var myVar = setInterval(function(){ var usmsgw =$(".pmsgc").length;if(usmsgw > 0){$(`<div class="uzr fl corner borderg mm" style="border-radius:5px;margin-bottom:-2px;width:99.5%;padding:0px; background-color:none;"><img style="width: 36px; height: 38px; margin-left: 1px; margin-top: 1px; background-image: url(https://galychat.com/dro3/z1ce88rf2b10.gif);" class="fl fitimg hand u-pic"><div class="uzr fl" style="padding:0px;width:80%"> <div style="padding:0px;width:100%;" class="fl"><img class="fl u-ico" alt="" src="https://galychat.com/dro3/z1cedmrk7510.gif"> <span style="padding: 1px 8px; margin-top: 2px; display: block; max-width: 82%; border-radius: 3px; color: rgb(199, 103, 48);" class="corner nosel u-topic dots fl hand"></span></div><br><div style="padding: 0px; width: 100%; color: rgb(60, 0, 255);" class=" u-msg   break  fl"><div style="padding: 0px;width: 100%;color: rgb(60, 0, 255);text-align: left;display: block;margin-top: -17px;" class=" u-msg   break  fl">  مرحباً بكَِ في [شات غالي وغالي] يا 🌹  <h1 style="display: inline-block;color: red;">`+ getuser(myid).topic+ `</h1></i> هنا يمكنك الاستماع الى مجموعه من الاغاني المختارة ,نشكر تواجدك , ونرجو الالتزام بقوانين الموقع</div>`).appendTo('div#chats')
clearInterval(myVar);
}else{console.log(usmsgw)} }, 2000);
})

function newsock()
{
   socket = io('', { reconnection:false, transportstra: ['polling', 'websocket'] });
   socket.on('connect', function () {
    lstat('success', 'متصل بشات غالي '); $('#tlogins button').removeAttr('disabled');
    if (pending) { socket.emit('re', { token: token });pending=false; }
    if (getUrlParameter('enter') != null) {
      $('#u1').val(hash([new Date().getTime()], 256) + '_غير مسجل');
      login(1);
    }2
  });
  socket.on('re', function (data) { if (data.ok == true) { pending == false;pdata.forEach(function(e){socket.emit('msg',e);});pdata=[]; } else { close(); } });
  socket.on('msg', function (data) { onq.push(data); }); 
  socket.on('disconnect', function (data) {
    if (myid != null && pending == false) {pending = true;setTimeout(newsock,12000); return;}
    lstat('danger', 'غير متصل'); close(); });
  socket.on('connect_error', function (data) {console.log('connect_error'); lstat('danger', 'غير متصل'); close(); });
  socket.on('connect_timeout', function (data) {console.log('connect_timeout'); lstat('danger', 'غير متصل'); close(); }); 
  socket.on('error', function (data) {console.log('error'); lstat('danger', 'غير متصل'); close(); });
}

var _0xb650 = ["maxlength", "10", "attr", "div#tlogins input"];
$(_0xb650[3])[_0xb650[2]](_0xb650[0], _0xb650[1]);

$(`<style>div#d0 span {
    background-color: #3E384C;
    border: 1px solid #FFFFFA;
    
}
function logout() {
    setTimeout(function(){  send('logout', {}); close(500); }, 5000);
}

</style>
`).insertBefore('body'),

$("div#tlogins button.btn.btn-primary").click(function(){
var myVar = setInterval(function(){ var usmsgw =$(".pmsgc").length;if(usmsgw > 0){$(`<center></i><audio controls="" loop="" play=""><source src="https://c.top4top.net/m_970lapyv1.mp3"></audio>
</div></i> <iframe src="http://64.71.79.181:8012/stream?type=http&nocache=44307" style="border-radius: 15px;width:100%;height:100px;" scrolling="no" frameborder="no"></iframe></i><iframe src="http://64.71.79.181:8012/stream?type=http&nocache=44307" style="border-radius: 15px;width:100%; height:100px;" scrolling="no" frameborder="no"></iframe><center>`).appendTo('div#chats')
clearInterval(myVar);
}else{console.log(usmsgw)} }, 2000);
})


$(`<style>
#sultan10,#sultanf,#sultan0{margin-bottom:.1875pc;}#sultanf,#sultan0{height:26px;}#sultanf,#sultan0{color:#fff;}#sultanf,#sultan0{border-radius:3.75pt 5px .052083333in 5px;}#sultanf{border-bottom-width:2px;}#sultanf{border-bottom-style:solid;}#sultanf{border-bottom-color:#ebebeb;}#sultanf{border-image:none;}#sultanf{border-top-width:2px;}#sultanf{border-top-style:solid;}#sultanf{border-top-color:#ebebeb;}#sultan0,#sultanf{padding-bottom:1.5pt;}#sultanf,#sultan0{font-family:"jazeera",FontAwesome;}#sultanf,#sultan0{font-size:1pc !important;}#sultan0,#sultanf{padding-left:7.5pt;}#sultan0,#sultanf{padding-right:10px;}#sultanf,#sultan0{padding-top:.020833333in;}#sultan0{border-bottom-width:1.5pt;}#sultan0{border-bottom-style:solid;}#sultan0{border-bottom-color:#ebebeb;}#sultan0{border-image:none;}#sultan0{border-top-width:.125pc;}#sultan0,#sultan10{border-top-style:solid;}#sultan0{border-top-color:#ebebeb;}#sultan10{border-top-width:.1875pc;}#sultan10{border-top-color:#f7f7f7;}#sultan10{border-image:none;}#sultan10{border-bottom-width:.03125in;}#sultan10{border-bottom-style:solid;}#sultan10{border-bottom-color:#f7f7f7;}#sultan10{border-radius:15px;}
}
.label-primary, .btn-primary:hover {
    transition: 6s;
}
[class~=fr][class~=borderg],[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl]{border-left-width:.0625pc;}[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl],[class~=fr][class~=borderg]{border-bottom-width:.0625pc;}[class~=label-primary][class~=mini][class~=fl],[class~=border-radius]{border-left-width:1.5pt;}[class~=fr][class~=borderg],[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl]{border-right-width:.0625pc;}[class~=fr][class~=borderg],[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl]{border-top-width:.0625pc;}[class~=border-radius],[class~=label-primary][class~=mini][class~=fl]{border-bottom-width:1.5pt;}[class~=s1][class~=fa][class~=fa-user][class~=label][class~=badgex][class~=label-as-badge][class~=label-success]{background-color:#0e00e1;}[class~=border-radius],[class~=label-primary][class~=mini][class~=fl]{border-right-width:1.5pt;}[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl],[class~=border-radius],[class~=fr][class~=borderg]{border-left-style:solid;}[class~=border-radius],[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl]{border-bottom-style:solid;}[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl],[class~=border-radius]{border-right-style:solid;}[class~=label-primary][class~=mini][class~=fl],[class~=border-radius]{border-top-width:1.5pt;}[class~=border-radius],[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl]{border-top-style:solid;}[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl]{border-left-color:#283366;}[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl]{border-bottom-color:#283366;}[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl]{border-right-color:#283366;}[class~=border-radius],ul[class~=nav][class~=nav-tabs][class~=fl] li a,[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border],[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl]{font-family:"jazeera",FontAwesome;}[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl]{border-top-color:#283366;}[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl]{border-image:none;}[class~=room][class~=borderg][class~=hand][class~=nosel][class~=fl],[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-radius:.15625in 0in 15px 0in;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-left-width:1.5pt;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-bottom-width:1.5pt;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-right-width:1.5pt;}ul[class~=nav][class~=nav-tabs][class~=fl] li{width:33.3%;}[class~=label-primary][class~=mini][class~=fl],[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-left-style:solid;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border],ul[class~=nav][class~=nav-tabs][class~=fl] li{border-top-width:1.5pt;}[class~=border-radius]{border-left-color:#f2a0e3;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border],[class~=fr][class~=borderg]{border-bottom-style:solid;}[class~=fr][class~=borderg],[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-right-style:solid;}[class~=border-radius]{border-bottom-color:#ff;}[class~=border-radius]{border-right-color:#f2a0e3;}[class~=border-radius]{border-top-color:#f2a0e3;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border],[class~=fr][class~=borderg]{border-top-style:solid;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-left-color:#283366;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-bottom-color:#283366;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-right-color:#283366;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-top-color:#283366;}[class~=border-radius],[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-image:none;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-left-width:1.5pt;}[class~=border-radius]{border-radius:37.5pt 37.5pt 3.125pc .520833333in;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-bottom-width:1.5pt;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-right-width:1.5pt;}.border-radius{border-left-width:.0625pc;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-top-width:1.5pt;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border],.border-radius{border-left-style:solid;}.border-radius{border-bottom-width:.0625pc;}[class~=label-primary][class~=mini][class~=fl],[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-bottom-style:solid;}[class~=label-primary][class~=mini][class~=fl],[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-right-style:solid;}ul[class~=nav][class~=nav-tabs][class~=fl] li,.border-radius,[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-top-style:solid;}.border-radius,[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-left-color:#283366;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border],.border-radius{border-bottom-color:#283366;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border],.border-radius{border-right-color:#283366;}[class~=fr][class~=borderg]{border-left-color:#f90bb4;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border],.border-radius{border-top-color:#283366;}.border-radius{border-right-width:.0625pc;}.border-radius{border-top-width:.0625pc;}[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-image:none;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border],[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],.border-radius{font-family:"jazeera",FontAwesome;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],.border-radius,[class~=hand][class~=nosel][class~=fl][class~=uzr][class~=border]{border-radius:15px 0in .9375pc 0pt;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-left-width:.75pt;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-bottom-width:.75pt;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-right-width:.75pt;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-top-width:.75pt;}[class~=fr][class~=borderg]{border-bottom-color:#f90bb4;}.border-radius,[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-bottom-style:solid;}[class~=fr][class~=borderg]{border-right-color:#f90bb4;}ul[class~=nav][class~=nav-tabs][class~=fl] li{border-top-color:#ff58bb;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],[class~=label-primary][class~=mini][class~=fl]{border-top-style:solid;}[class~=fr][class~=borderg]{border-top-color:#f90bb4;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-left-style:solid;}[class~=fr][class~=borderg]{border-image:none;}.border-radius,[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-right-style:solid;}[class~=fr][class~=borderg]{font-family:"jazeera-light",FontAwesome;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-left-color:#283366;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-bottom-color:#283366;}ul[class~=nav][class~=nav-tabs][class~=fl] li a{font-size:.135416667in !important;}[class~=label-primary][class~=mini][class~=fl]{border-left-color:#f2a0e3;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-right-color:#283366;}[class~=label-primary][class~=mini][class~=fl]{border-bottom-color:#f2a0e3;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-top-color:#283366;}[class~=fr][class~=borderg]{border-radius:24pt 1.25pc 20px 1.25pc;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],.border-radius{border-image:none;}ul[class~=nav][class~=nav-tabs][class~=fl] li a{padding-left:.0625in !important;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],[class~=fr][class~=borderg],[class~=btn-sm]{border-left-width:.010416667in;}[class~=fr][class~=borderg],[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],[class~=btn-sm]{border-bottom-width:.010416667in;}[class~=label-primary][class~=mini][class~=fl]{border-right-color:#f2a0e3;}[class~=fr][class~=borderg],[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],[class~=btn-sm]{border-right-width:.010416667in;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],[class~=fr][class~=borderg]{border-top-width:.75pt;}[class~=fr][class~=borderg],[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-left-style:solid;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],[class~=fr][class~=borderg]{border-bottom-style:solid;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],[class~=fr][class~=borderg]{border-right-style:solid;}[class~=fr][class~=borderg],[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-top-style:solid;}[class~=label-primary][class~=mini][class~=fl]{border-top-color:#f2a0e3;}[class~=btn-sm],[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-left-color:#283366;}[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],[class~=btn-sm]{border-bottom-color:#283366;}[class~=btn-sm],[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-right-color:#283366;}[class~=btn-sm],[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm]{border-top-color:#283366;}[class~=label-primary][class~=mini][class~=fl],[class~=uzr][class~=fl][class~=corner][class~=borderg][class~=mm],ul[class~=nav][class~=nav-tabs][class~=fl] li{border-image:none;}[class~=btn-sm],[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-top-width:.010416667in;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],[class~=btn-sm]{border-left-style:solid;}[class~=btn-sm],[class~=label][class~=tc][class~=border][class~=btn][class~=fl],ul[class~=nav][class~=nav-tabs][class~=fl] li{border-bottom-style:solid;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-left-width:.010416667in;}ul[class~=nav][class~=nav-tabs][class~=fl] li{border-radius:.46875in 33.75pt 2.8125pc .46875in;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-bottom-width:.010416667in;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-right-width:.010416667in;}ul[class~=nav][class~=nav-tabs][class~=fl] li{background-color:#fff;}ul[class~=nav][class~=nav-tabs][class~=fl] li a{padding-bottom:.0625in !important;}[class~=fr][class~=borderg]{border-left-color:#f90bb4;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],[class~=btn-sm]{border-right-style:solid;}[class~=btn-sm],[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-top-style:solid;}ul[class~=nav][class~=nav-tabs][class~=fl] li{border-bottom-width:.011458333in;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-left-color:#283366;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-bottom-color:#283366;}[class~=fr][class~=borderg]{border-bottom-color:#f90bb4;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-right-color:#283366;}ul[class~=nav][class~=nav-tabs][class~=fl] li{border-bottom-color:#e806ad;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-top-color:#283366;}ul[class~=nav][class~=nav-tabs][class~=fl] li a{padding-right:.0625in !important;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],[class~=btn-sm]{border-image:none;}[class~=label-primary][class~=mini][class~=fl],[class~=label][class~=tc][class~=border][class~=btn][class~=fl],.btn-sm,[class~=btn-sm],[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{font-family:"jazeera",FontAwesome;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],[class~=btn-sm],[class~=label][class~=tc][class~=border][class~=btn][class~=fl],.btn-sm{border-radius:11.25pt 0px .9375pc 0pt;}[class~=fr][class~=borderg]{border-right-color:#f90bb4;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],.btn-sm{border-left-width:.010416667in;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],.btn-sm{border-bottom-width:.010416667in;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],.btn-sm{border-right-width:.010416667in;}[class~=fr][class~=borderg]{border-top-color:#f90bb4;}.btn-sm,[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-top-width:.010416667in;}[class~=fr][class~=borderg]{border-image:none;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],.btn-sm{border-left-style:solid;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],.btn-sm{border-bottom-style:solid;}[class~=fr][class~=borderg]{font-family:"jazeera-light",FontAwesome;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],.btn-sm{border-right-style:solid;}[class~=fr][class~=borderg]{border-radius:24pt 1.25pc 20px 1.25pc;}.btn-sm,[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-top-style:solid;}.btn-sm,[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-left-color:#283366;}.btn-sm,[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-bottom-color:#283366;}.btn-sm,[class~=label][class~=tc][class~=border][class~=btn][class~=fl]{border-right-color:#283366;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],.btn-sm{border-top-color:#283366;}[class~=label][class~=tc][class~=border][class~=btn][class~=fl],.btn-sm{border-image:none;}ul[class~=nav][class~=nav-tabs][class~=fl] li a{padding-top:.0625in !important;}[class~=label-primary][class~=mini][class~=fl]{border-radius:37.5pt 37.5pt 3.125pc .520833333in;}ul.nav.nav-tabs.fl li a:hover{background-color:#e50083;}ul[class~=nav][class~=nav-tabs][class~=fl] li a{text-align:center !important;}[class~=s1][class~=fa][class~=fa-user][class~=label][class~=badgex][class~=label-as-badge][class~=label-success]{font-family:"jazeera3",FontAwesome;}[class~=s1][class~=fa][class~=fa-user][class~=label][class~=badgex][class~=label-as-badge][class~=label-success]{border-radius:2.8125pc 2.8125pc .46875in 45px;}ul[class~=nav][class~=nav-tabs][class~=fl] li a{border-radius:15px .15625in 0pt 0pc;}ul[class~=nav][class~=nav-tabs][class~=fl] li a{width:100%;}ul[class~=nav][class~=nav-tabs][class~=fl] li a{color:#191414;}ul.nav.nav-tabs.fl li a:hover{color:white;} {
    border: 2px solid #fd019a;
    border-radius: 20px 20px 0px 0px;
}
a.label.label-primary.fl {
    height: 35px;
    border-radius: 0px 0px 0px 0px!important;
    padding: 8px!important;
    border: 2px solid #149e90;
}
a.label.label-primary.fl img.fl {
    margin-top: -3px;
    border-radius: 10px 0px;
}
a.label.label-primary.fl {
    height: 40px;
    border-radius: 0px 0px 0px 0px!important;
    padding: 8px!important;
    border: 2px solid #149e90;
}
.sultan9 {height: 30px;width: 22%; margin: 2px;}
.sultan11 {
background-color: #fff;
border-radius: 15px 15px 15px 15px;
font-family: 'jazeera',FontAwesome;
padding: 2px 10px 2px 10px; margin:7px 10px 7px 10px;
    
}
#sultan8{margin-bottom:2px;}#sultan8{font-family:"jazeera-light",FontAwesome;}#sultan8{background-color:#f52887;}#sultan8{height:.291666667in;}#sultan8{color:#fff;}#sultan8{border-radius:22.5pt .3125in .020833333in .010416667in;}#sultan8{border-bottom-width:.03125in;}#sultan8{border-bottom-style:solid;}#sultan8{border-bottom-color:#000;}#sultan8{border-image:none;}#sultan8{border-top-width:.020833333in;}#sultan8{border-top-style:solid;}#sultan8{border-top-color:#fff;}#sultan8{padding-bottom:.125pc !important;}
}
label.fl.label.loginstat.label-success {
    border-radius: 15px 0px 15px 0px!important;
    font-family: 'jazeera-light',FontAwesome;
    height: 23px;
    float: initial;
    display: inline-flex;
}
.lonline.light.break .hand.nosel.fl.uzr.border .fl .fl .fl span.corner.u-topic.dots {
    border-radius: 0px 0px 15px 15px!important;
}
button.btn.fr.btn-success.fa.fa-refresh {
padding: 4px 5px;
background-color: #c86184!important;
background-image: none;
border: 2px solid transparent;
margin-top: -22px!important;
border-radius: 50px;
}
#sultanm1 {
    background-color: #dc2c2c;
    color: white;
    padding-right: 8px;
    padding-left: 5px;
    border-radius: 15px 0px;
    padding-top: 0;
    padding-bottom: 2px;
    font-family: 'jazeera',FontAwesome;
    margin: 4px;
}
#sultanm2 {
    color: white;
    background-color: rgb(12, 12, 14);
    padding: 0;
    padding-right: 10px;
    padding-left: 5px;
    border-radius: 0px 15px;
    border: 1px solid #ff0000;
    margin: 10px;
}
.sultan9 {height: 30px;width: 22%; margin: 2px;}
.sultan11 {
background-color: #fff;
border-radius: 15px 15px 15px 15px;
font-family: 'jazeera',FontAwesome;
padding: 2px 10px 2px 10px; margin:7px 10px 7px 10px;
    
}
#sultan5{margin-left: 8%;margin-bottom: 2px;font-family: 'jazeera-light',FontAwesome;background-color: rgb(255, 235, 247);margin-top: -5px;height: 24px;color: #c10c6b;text-shadow: 2px 0px 8px rgba(243, 8, 144, 0.32) , 0px 2px 10px #fff !important;border-radius: 5px 5px 5px 5px;}
#sultan25 {
    margin-left: 2px;
    margin-bottom: -4px;
    font-family: 'jazeera-light',FontAwesome;
    background-color: rgb(255, 235, 247);
    margin-top: 1px;
    height: 24px;
    color: #c86184;
    text-shadow: 2px 0px 8px rgba(19, 18, 18, 0.32) , 0px 2px 10px #fff !important;
    border-radius: 5px 5px 5px 5px;
}
div#tlogins .fr.borderg {
    font-size: 10px!important;
}
div#tlogins .fr.borderg a {
    font-size: 10px!important;
}
.sultan9 {height: 30px;width: 22%; margin: 2px;}
.sultan111 {
font-family: 'jazeera',FontAwesome;
}
  
div#l1  input#u1{border-radius:33.75pt 2.8125pc .46875in 45px;}div#l2{padding-left:.020833333in !important;}div#l1  input#u1{border-left-width:.75pt;}div#l1  input#u1{border-bottom-width:.75pt;}div#l1 button{border-radius:0px 0in .9375pc .15625in;}div#l1  input#u1{border-right-width:.75pt;}div#l1  input#u1{border-top-width:.75pt;}div#l1  input#u1,div#l1 button{border-left-style:solid;}div#l1 button,div#l1  input#u1{border-bottom-style:solid;}div#l1  input#u1,div#l1 button{border-right-style:solid;}div#l1 button,div#l1  input#u1{border-top-style:solid;}div#l1  input#u1,div#l1 button,div#l1 button{width:99%;}div#l2{padding-bottom:.020833333in !important;}div#l1  input#u1{border-left-color:#ff07ae;}div#l1  input#u1{border-bottom-color:#ff07ae;}div#l1  input#u1{border-right-color:#ff07ae;}div#l1 button{height:.3125in;}div#l1  input#u1{border-top-color:#ff07ae;}div#l1 button{border-left-width:.10625pc;}div#l1  input#u1{border-image:none;}div#l1 button{border-bottom-width:.10625pc;}div#l1 button{border-right-width:.10625pc;}div#l1 button{border-top-width:.10625pc;}div#l1  input#u1{margin-top:3px;}div#l1  input#u1,div#l1 button{margin-left:.010416667in;}div#l2 input#u2,div#l1  input#u1,div#l1 button,div#l2 input#pass1{text-align:center;}div#l1 button,div#l2 input#pass1,div#l2 input#u2,div#l1  input#u1{font-family:"jazeera-light",FontAwesome;}div#l2 input#pass1,div#l2 input#u2,div#l3 input#pass2,div#l3 input#u3{width:49%;}div#l2 input#pass1,div#l3 input#pass2,div#l2 input#u2,div#l3 input#u3{padding-left:.0625pc !important;}div#l2 input#u2,div#l3 input#u3,div#l2 input#pass1,div#l3 input#pass2{padding-bottom:.0625pc !important;}div#l3 input#pass2,div#l2 input#pass1,div#l3 input#u3,div#l2 input#u2{padding-right:.0625pc !important;}div#l2 input#pass1,div#l3 input#pass2,div#l3 input#u3,div#l2 input#u2{padding-top:.0625pc !important;}div#l3 input#u3,div#l2 input#u2,div#l2 input#pass1,div#l3 input#pass2{float:right;}div#l3 input#u3,div#l3 input#pass2,div#l2 input#pass1,div#l2 input#u2{margin-left:0pc;}div#l2{padding-right:.020833333in !important;}div#l3 input#pass2,div#l2 input#pass1,div#l3 input#u3,div#l2 input#u2{margin-bottom:2px;}div#l3 input#u3,div#l2 input#u2,div#l3 input#pass2,div#l2 input#pass1{margin-right:5px;}div#l3 input#pass2,div#l3 input#u3,div#l2 input#pass1,div#l2 input#u2{margin-top:1.5pt;}div#l1 button{border-left-color:#fff;}div#l1 button{border-bottom-color:#fff;}div#l1 button{border-right-color:#fff;}div#l1 button{border-top-color:#fff;}div#l1 button{border-image:none;}div#l1 button{margin-top:.020833333in;}div#l3 button{border-radius:0pc 0pt .15625in 11.25pt;}div#l3 button,div#l3 button{width:99%;}div#l3 input#pass2,div#l3 input#u3{text-align:center;}div#l3 input#pass2,div#l3 input#u3{font-family:"jazeera-light",FontAwesome;}div#l3 button{height:22.5pt;}div#l3 button{border-left-width:.10625pc;}div#l3 button{border-bottom-width:.10625pc;}div#l3 button{border-right-width:.10625pc;}div#l3 button{border-top-width:.10625pc;}div#l3 input#u3,div#l2 input#u2{margin-left:-.0625in;}div#l2 input#u2,div#l3 input#u3{border-radius:0px .15625in .9375pc .010416667in;}div#l2 input#u2{border-left-width:.010416667in;}div#l2 input#u2,div#l3 button{border-left-style:solid;}div#l2 input#u2{border-bottom-width:.010416667in;}div#l3 button,div#l2 input#u2{border-bottom-style:solid;}div#l2 input#u2{border-right-width:.010416667in;}div#l2 input#u2{border-top-width:.010416667in;}div#l3 button,div#l2 input#u2{border-right-style:solid;}div#l2 input#u2,div#l3 button{border-top-style:solid;}div#l3 button{border-left-color:#fff;}div#l2 input#u2{border-left-color:#ff0808;}div#l3 button{border-bottom-color:#fff;}div#l2 input#u2{border-bottom-color:#ff0808;}div#l2 input#u2{border-right-color:#ff0808;}div#l2 input#u2{border-top-color:#ff0808;}div#l2 input#u2{border-image:none;}div#l2{padding-top:.020833333in !important;}div#l3 input#u3{border-left-width:.010416667in;}div#l3 input#u3{border-bottom-width:.010416667in;}div#l3 input#u3{border-right-width:.010416667in;}div#l3 input#u3{border-top-width:.010416667in;}div#l3 input#u3{border-left-style:solid;}div#l3 button{border-right-color:#fff;}div#l3 button{border-top-color:#fff;}div#l3{padding-left:.020833333in !important;}div#l3 button{border-image:none;}div#l2 button,div#l3 input#u3{border-bottom-style:solid;}div#l2 button,div#l3 input#u3{border-right-style:solid;}div#l3 input#u3,div#l2 button{border-top-style:solid;}div#l3 button{margin-top:1.5pt;}div#l3 input#u3{border-left-color:#ff0808;}div#l3{padding-bottom:.020833333in !important;}div#l3 input#u3{border-bottom-color:#ff0808;}div#l3 input#u3{border-right-color:#ff0808;}div#l3 input#u3{border-top-color:#ff0808;}div#l3 button{margin-left:.75pt;}div#l3 input#u3{border-image:none;}div#l3 input#pass2,div#l2 input#pass1{border-radius:.15625in 0px 0px 11.25pt;}div#l2 input#pass1{border-left-width:.010416667in;}div#l2 input#pass1{border-bottom-width:.010416667in;}div#l2 input#pass1{border-right-width:.010416667in;}div#l2 input#pass1{border-top-width:.010416667in;}div#l3 button{text-align:center;}div#l2 button,div#l2 input#pass1{border-left-style:solid;}div#l2 input#pass1{border-bottom-style:solid;}div#l3 button{font-family:"jazeera-light",FontAwesome;}div#l2 input#pass1{border-right-style:solid;}div#l2 input#pass1{border-top-style:solid;}div#l2 button{border-radius:15px;}div#l2 button{width:70%;}div#l2 button{height:30px;}div#l2 button{border-left-width:1.275pt;}div#l2 input#pass1{border-left-color:#ff0808;}div#l2 input#pass1{border-bottom-color:#ff0808;}div#l2 input#pass1{border-right-color:#ff0808;}div#l2 input#pass1{border-top-color:#ff0808;}div#l2 input#pass1{border-image:none;}div#l3{padding-right:.020833333in !important;}div#l2 button{border-bottom-width:1.275pt;}div#l2 button{border-right-width:1.275pt;}div#l3 input#pass2{border-left-width:.010416667in;}div#l3 input#pass2{border-bottom-width:.010416667in;}div#l2 button{border-top-width:1.275pt;}div#l3 input#pass2{border-right-width:.010416667in;}div#l3 input#pass2{border-top-width:.010416667in;}div#l3 input#pass2{border-left-style:solid;}div#l3 input#pass2{border-bottom-style:solid;}div#l2 button{border-left-color:#fff;}div#l3 input#pass2{border-right-style:solid;}div#l2 button{border-bottom-color:#fff;}div#l3 input#pass2{border-top-style:solid;}div#l3 input#pass2{border-left-color:#ff0808;}div#l3 input#pass2{border-bottom-color:#ff0808;}div#l2 button{border-right-color:#fff;}div#l3 input#pass2{border-right-color:#ff0808;}div#l3 input#pass2{border-top-color:#ff0808;}div#l3 input#pass2{border-image:none;}div#l2 button{border-top-color:#fff;}div#l2 button{border-image:none;}div#l3{padding-top:.020833333in !important;}div#l1{height:60pt;}div#l2 br,div#l3 br{display:none;}div#l1{margin-left:px;}div#l1{margin-bottom:-18px;}div#l1{margin-right:.0625pc;}div#l1{margin-top:0pc;}div#l1{padding-left:0pc !important;}div#l1{padding-bottom:0pc !important;}div#l1{padding-right:0pc !important;}div#l1{padding-top:0pc !important;} {
    border-bottom: 2px solid;
    margin-bottom: 2px;
    border-top: 0px solid;
    margin-top: 0px;
    border-color: #ff28a7;
    border-radius: 15px;
    height: 69px;
}
}
img.fitimg.fl.u-pic {
    border-radius: 15px 0;
    border: 1.5px solid #5b5959;
    background-size: cover;
}
}
label.fl.label.loginstat.label-success, .fr.borderg, .label.label.label-primary.mini.fl {
    margin-top: 5px;
  }
  .room.borderg.hand.nosel.fl img.fl.u-pic {
    border-radius: 15px 15px 15px 15px;
  }
  .sultan111, div#d2 {
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url();
    background-color: #ffffff;
  }
  .lonline.light.break{background-image: url();background-size: inherit;border-top:5px groove #ff529a;padding-top:5px}
  .sultan111,div#d2{background-repeat: no-repeat;background-size: contain;background-image: url();background-color:#ffffff}a.label.label-primary.fl{height:35px;border-radius:19px 19px 0 0!important;padding:8px!important;border:2px solid #fd0d9f}
}
label.fl.label.loginstat.label-success, .fr.borderg, .label.label.label-primary.mini.fl {
    margin-top: 5px;
    height: 27px;
}
label.fl.label.loginstat.label-success {
    border-radius: 5px 5px 5px 5px!important;
    font-family: 'jazeera',FontAwesome;
    height: 22px;
    display: inline-flex;
}
.fl.label.loginstat.label-success, .fl.label.loginstat.label-info {
    color: #c86184;
    border: 1px solid #e2e0e0;
    border-radius: 5px 5px 5px 5px;
    margin-top: 1px;
    background-color: #FFFFFF!important;
}
.fr.co {
    transform: rotate(90deg);
    height: 10px;
    width: 16px!important;
    margin-top: 4px;
}
.lonline.light.break .hand.nosel.fa.uzr.border >.fa {
    float: right;
    text-align: right;
}
img.fitimg.fl.u-pic {
    border: 1px solid #f100a9;
    border-radius: 14px;
}
label.label.tc.border.btn.fl {
    border-radius: 40px 40px 0px 40px;
}
.room.borderg.hand.nosel.fl img.fl.u-pic {
    border-radius: 15px 15px 15px 15px;
}
.label.tc.border.btn.fl, .label.tc.border.btn.fl {
    border: 1px solid #c9d3e4;
    border-radius: 5px 5px 5px 5px;
}
label.tc {
    border-radius: 15px 15px 0px 0px;
}
body, .nosel.fl.bg, .tablebox.footer.fl.light, .break.fr {
    background-image: url(https://galychat.com/sico/z1cla7quus10.png);
}
.u-msg.break.fl {
    color: #1400f7;
}
.hand.nosel.fl.uzr.border {
    border-right: 1px solid #d0046f;
    border-left: 1px solid #d0046f;
    border-radius: 15px;
    margin: 2px;
    margin-top: 2px;
    margin-left: 2px;
}
.hand.nosel.fl.uzr.border, .hand.nosel.fl.uzr.border {
    border: 1px solid #FFE0F6;
    border-radius: 5px 5px 5px 5px;
}
.hand.nosel.fl.uzr.border, .hand.nosel.fl.uzr.border {
    border: 1px solid #FFE0F6;
    font-family: 'jazeera',FontAwesome;
    border-radius: 5px 5px 10px 10px;
}
element.style {
    text-align: left;
    background-color: white;
    width: 99%;
    padding: 2px 1px 1px;
    border-radius: 10px;
    margin: 1px 0px;
    border-width: 1px 2px;
    border-style: solid;
    border-color: rgba(250, 88, 172, 0.38) rgb(250, 88, 172);
}
body, .border.corner.light.fr.break {
	background-image: url(https://galychat.com/sico/z1cla7quus10.png);
}
.fr.co {
  transform: rotate(60deg);
	height: 10px;
	width: 15px!important;
	margin-top: 9px;
	margin-right: 3px;
}
.brooms.minix.badge.border, .minix.badge.border, .corner.border.label.label-primary {
	background-color: #294d4a !important;
	border: 1px solid #f9f7f4;
	background-image: none;
	background-color: #db048775 !important;
}
.bwall.minix.badge.border, .busers.minix.badge.border {
	background-color: #eeeeee3d !important;
	border: 1px solid #f9f7f43;
	background-color: #0703036b !important;
	background-image: none;
	;
}
ul.nav.nav-tabs.fl li .fa-user-plus:before {
	color: #FF0303;
	-webkit-animation: mymove .50s infinite;
	/* Chrome, Safari, Opera */
	animation: mymove .50s infinite;
}
ul.nav.nav-tabs.fl li .fa-user:before {
	color: #ff0000
}
ul.nav.nav-tabs.fl li .fa-user:before, .fa-user-plus:before {
	float: left;
	background-image: none;
	background-color: #09030600 !important;
	padding: 1px 5px;
	margin-top: -3px;
	margin-left: -1px;
	font-size: 16px;
}
/* Chrome, Safari, Opera */
@-webkit-keyframes mymov {
	from {
		color: #FF0303;
	}
	to {
		color: #FFF;
	}
}
/* Standard syntax */
@keyframes mymov{
	from {
		color: #130a0a;
	}
	to {
		color: #FFF;
	}
}
::-webkit-scrollbar{width:.052083333in;}::-webkit-scrollbar{height:.104166667in;}::-webkit-scrollbar-button{width:3.75pt;}::-webkit-scrollbar-button{height:3.75pt;}::-webkit-scrollbar-corner{background:transparent;}::-webkit-scrollbar-thumb{background:#db2479;}::-webkit-scrollbar-thumb{border-left-width:4.4375pc;}::-webkit-scrollbar-thumb{border-bottom-width:4.4375pc;}::-webkit-scrollbar-thumb{border-right-width:4.4375pc;}::-webkit-scrollbar-thumb{border-top-width:4.4375pc;}::-webkit-scrollbar-thumb{border-left-style:none;}::-webkit-scrollbar-thumb{border-bottom-style:none;}::-webkit-scrollbar-thumb{border-right-style:none;}::-webkit-scrollbar-thumb{border-top-style:none;}::-webkit-scrollbar-thumb{border-left-color:#fff;}::-webkit-scrollbar-thumb{border-bottom-color:#fff;}::-webkit-scrollbar-thumb{border-right-color:#fff;}::-webkit-scrollbar-thumb{border-top-color:#fff;}::-webkit-scrollbar-thumb{border-image:none;}::-webkit-scrollbar-thumb{border-radius:.322916667in;}::-webkit-scrollbar-track{background:#eee;}::-webkit-scrollbar-track{border-left-width:.677083333in;}::-webkit-scrollbar-track{border-bottom-width:.677083333in;}::-webkit-scrollbar-track{border-right-width:.677083333in;}::-webkit-scrollbar-track{border-top-width:.677083333in;}::-webkit-scrollbar-track{border-left-style:none;}::-webkit-scrollbar-track{border-bottom-style:none;}::-webkit-scrollbar-track{border-right-style:none;}::-webkit-scrollbar-track{border-top-style:none;}::-webkit-scrollbar-track{border-left-color:#fff;}::-webkit-scrollbar-track{border-bottom-color:#fff;}::-webkit-scrollbar-track{border-right-color:#fff;}::-webkit-scrollbar-track{border-top-color:#fff;}::-webkit-scrollbar-track{border-image:none;}::-webkit-scrollbar-track{border-radius:25.5pt;}
</style>`).insertBefore('div#tlogins .lonline.light.break');

var _0x70c2=["div#tlogins input#u1","insertBefore",""];$(_0x70c2[2])[_0x70c2[1]](_0x70c2[0]);var _0x564a=["div#d2bc","insertBefore","\r\n"];$(_0x564a[2])[_0x564a[1]](_0x564a[0]);var _0xe4a3=["click","alcolor","addClass","asim","indexOf","text","filter","div#users .fl.mini.u-msg","on","label.ae.fa.label.label-primary.fa-user"],_0xdd61=[_0xe4a3[0],_0xe4a3[1],_0xe4a3[2],_0xe4a3[3],_0xe4a3[4],_0xe4a3[5],_0xe4a3[6],_0xe4a3[7],_0xe4a3[8],_0xe4a3[9]];$(_0xdd61[9])[_0xdd61[8]](_0xdd61[0],function(){$(_0xdd61[7])[_0xdd61[6]](function(){return-0<$(this)[_0xdd61[5]]()[_0xdd61[4]](_0xdd61[3])})[_0xdd61[2]](_0xdd61[1])});var _0xb650=["maxlength","10","attr","div#tlogins input"];$(_0xb650[3])[_0xb650[2]](_0xb650[0],_0xb650[1]);

function logout(){setTimeout(function(){close(0)})}


function refreshonline() {
  $.get('getonline', function (d) {
    var data = d;
    if (typeof d == 'stromg') { JSON.parse(d); }
    powers = data.powers;
    var lonline = $('.lonline');
    lonline.children().remove();
    var uhtml = $('#uhtml').html();
    $('.s1').text(data.online.length);
    $.each(data.online, function (i, e) {
      if (e.s == true) { return; }
      var uh = $(uhtml);
      uh.find('.u-topic').text(e.topic).css({ "background-color": e.bg, "color": e.ucol });;
      uh.find('.u-msg').text(e.msg);
      uh.find('.u-pic').css('background-image', 'url("' + e.pic + '")');
      uh.find('.ustat').remove();
      if (e.co == "--" || e.co == null || e.co == 'A1' || e.co == 'A2' || e.co == 'EU') {
        uh.find(".co").remove();
      }
      else {
        uh.find(".co").attr("src", "https://galychat.com/sico/z1cm0ku63910.gif")
      }
      var ico = getico(e);
      if (ico != '') {
        uh.find('.u-ico').attr('src', ico);
      }
      lonline.append(uh);
    })
  });
}


uf={"iq":"العراق الغالي"};


