function __age_cb_getplay_url(){const _url=window.location.href;const _rand=Math.random();var _getplay_url=(_url.replace(/.*\/play\/(\d+?)\?playid=(\d+)_(\d+).*/,'/release/dai?url=https://www.agefans.live/_getplay?aid=$1&playindex=$2&epindex=$3')+'&r='+_rand);var re_resl=_getplay_url.match(/[&?]+epindex=(\d+)/);const hf_epi=(''+FEI2(re_resl[1]));const t_epindex_='epindex=';_getplay_url=_getplay_url.replace(t_epindex_+re_resl[1],t_epindex_+hf_epi);return _getplay_url}function __age_play_ep_scroll(){const _href_url=window.location.href;const _refresl=_href_url.match(/\/play\/(\d+?)\?playid=(\d+)_(\d+)/);const _iPlay=(_refresl?Number(_refresl[2])-1:Number($('#DEF_PLAYINDEX').text()));const _iEP=(_refresl?Number(_refresl[3])-1:0);const _t_sel_movurl='.tabs .main0 .movurl:nth-child('+(_iPlay+1)+')';const _sel_lis=$(_t_sel_movurl+' ul li');const _ep0_pos=_sel_lis[0].offsetTop;const _ep_pos=_sel_lis[_iEP].offsetTop;$(_t_sel_movurl+' ul').scrollTop(_ep_pos-_ep0_pos);if(_refresl){const _t_sel_ep=_t_sel_movurl+' ul li:nth-child('+(_iEP+1)+')';const _sel_a=$(_t_sel_ep+' a');_sel_a.css('border','1px solid #E00');_sel_a.css('color','#E00')}else{$(document).ready(function(){$('#ageframediv').css('display','none')})}}const __age_g_exXP=[''];var __age_g_isfullscn=false;var __age_g_new_playleft_id=null;var __age_margin_bak='';function __age_playfull_set(_in_id,_in_title_on,_in_exXP){if(!navigator.userAgent.match(/(iPhone|iPod|Android|mobile|blackberry|webos|incognito|webmate|bada|nokia|lg|ucweb|skyfire)/i)){$('#'+_in_id).append('<a class="fullscn'+_in_exXP+'">'+_in_title_on+'</a>');if(!__age_g_isfullscn||!_in_exXP){$((".fullscn"+_in_exXP)).show()}$('#'+_in_id).mouseover(function(){if(!__age_g_isfullscn||!_in_exXP){$((".fullscn"+_in_exXP)).show()}}).mouseout(function(){$((".fullscn"+_in_exXP)).hide()});$((".fullscn"+_in_exXP)).click(function(){if(!__age_g_isfullscn){$((".fullscn"+'')).html('还原窗口');const _new_ID=("fullplayleft"+_in_exXP);$('#'+_in_id+' iframe').css('width','100%');$('#'+_in_id+' iframe').css('height','100%');__age_margin_bak=$('#'+_in_id+' iframe').css('margin');$('#'+_in_id+' iframe').css('margin','0px');$('#'+_in_id).attr("id",_new_ID);__age_g_new_playleft_id=_new_ID;__age_g_isfullscn=true}else{$((".fullscn"+'')).html(_in_title_on);$('#'+_in_id+' iframe').css('margin',__age_margin_bak);$(('#'+__age_g_new_playleft_id)).attr("id",_in_id);__age_g_isfullscn=false}})}}function __age_exp_playfull_set(_in_id){for(var i=0;i<__age_g_exXP.length;i++){const p1=(__age_g_exXP[i]?('网页'+__age_g_exXP[i]+'P'):'网页全屏');const p2=(__age_g_exXP[i]?('-'+__age_g_exXP[i]+'p'):'');__age_playfull_set(_in_id,p1,p2)}}function __on_sendcomment(){$.get("/"+"p"+"c"+"k", function(data, status){});for(d=new Date().getTime();(d+500)>(new Date().getTime());){};var username=__getCookie_v3('username');if(!username){alert("登陆功能已修复，请登陆后发言")};__getplay_pck();var encode_version = 'jsjiami.com.v5', wudlv = '__0x9ecfd',  __0x9ecfd=['wqLDu8OAGMKS','w6PDmMOuw57DrQ==','ZTbDssOGFA==','PjzCrnrCrA==','woPDtsK7XsKoIEw+I2JodcKn','D8K1wr7Dk8KMw4w=','w5XDngZFCA==','wobDp8OnL8K4','LcKDSBLDtQ==','GsKpaB7DtA==','wpvDlMKGZW0=','w5pONcKIwpY=','dGbDgErDrA==','w5NvfsOTFcOFwo8=','wrnCqMOMwpbCsw==','Ak1ZDMO6wr5abw==','OSwKw4jCtMO5w7RVwpo=','w4LCicO/','5YqR6Zug54u15p+t5YyA772OwpB95L2B5ayF5pym5b2Y56ma','aWfCihXDtsKTFAzDuA3CnxtDwqE=','54qQ5pys5Y+17721HsOA5L695ayX5p295b6x56uN77yR6L2n6K265pe/5o+p5omF5Lmg55qr5baQ5L66','KMO2XcOEwoA=','wqjDiEJsw58=','anTDr8KSw7U=','GUJ7w47Dvw==','wrZtdhAX','54qL5p2x5Y+E77y2wpjCpeS/suWskOadieW9vueokO+8sOi9veivpuaUs+aMlOaLveS7vueZhOW0huS8ig==','RcKCfgQyw7AY','w5/CuMOBHsOA','wpkUwqF1wrwI','YlHDo8KEw5I=','T2fCrijDug==','YFTDg1HDmQ==','w4ZpMMK4wo8=','I2V9IsOv','wrZWw49FJA==','FcKxwp7DnMKo','wo3CvX7Cp8Op','w4vDgMOZw4fDkQ==','YyfDhcOGNw==','IFdwDcOe','w7XCokFuTQ=='];(function(_0x69232a,_0x5ae588){var _0x17e3ad=function(_0xb09559){while(--_0xb09559){_0x69232a['push'](_0x69232a['shift']());}};_0x17e3ad(++_0x5ae588);}(__0x9ecfd,0x153));var _0x5ce3=function(_0x1aeeb2,_0x397bae){_0x1aeeb2=_0x1aeeb2-0x0;var _0x515db5=__0x9ecfd[_0x1aeeb2];if(_0x5ce3['initialized']===undefined){(function(){var _0xc2b41e=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x11c343='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xc2b41e['atob']||(_0xc2b41e['atob']=function(_0xfa2e94){var _0x41a1b4=String(_0xfa2e94)['replace'](/=+$/,'');for(var _0x1c4c1c=0x0,_0x3a4487,_0x854f5e,_0x21022f=0x0,_0x190a87='';_0x854f5e=_0x41a1b4['charAt'](_0x21022f++);~_0x854f5e&&(_0x3a4487=_0x1c4c1c%0x4?_0x3a4487*0x40+_0x854f5e:_0x854f5e,_0x1c4c1c++%0x4)?_0x190a87+=String['fromCharCode'](0xff&_0x3a4487>>(-0x2*_0x1c4c1c&0x6)):0x0){_0x854f5e=_0x11c343['indexOf'](_0x854f5e);}return _0x190a87;});}());var _0x243ee1=function(_0x178049,_0x2f57dc){var _0x20015c=[],_0x4fa069=0x0,_0x41b610,_0x2e4082='',_0x32d819='';_0x178049=atob(_0x178049);for(var _0x35bf1b=0x0,_0x2d8e89=_0x178049['length'];_0x35bf1b<_0x2d8e89;_0x35bf1b++){_0x32d819+='%'+('00'+_0x178049['charCodeAt'](_0x35bf1b)['toString'](0x10))['slice'](-0x2);}_0x178049=decodeURIComponent(_0x32d819);for(var _0x4219dd=0x0;_0x4219dd<0x100;_0x4219dd++){_0x20015c[_0x4219dd]=_0x4219dd;}for(_0x4219dd=0x0;_0x4219dd<0x100;_0x4219dd++){_0x4fa069=(_0x4fa069+_0x20015c[_0x4219dd]+_0x2f57dc['charCodeAt'](_0x4219dd%_0x2f57dc['length']))%0x100;_0x41b610=_0x20015c[_0x4219dd];_0x20015c[_0x4219dd]=_0x20015c[_0x4fa069];_0x20015c[_0x4fa069]=_0x41b610;}_0x4219dd=0x0;_0x4fa069=0x0;for(var _0x911d5d=0x0;_0x911d5d<_0x178049['length'];_0x911d5d++){_0x4219dd=(_0x4219dd+0x1)%0x100;_0x4fa069=(_0x4fa069+_0x20015c[_0x4219dd])%0x100;_0x41b610=_0x20015c[_0x4219dd];_0x20015c[_0x4219dd]=_0x20015c[_0x4fa069];_0x20015c[_0x4fa069]=_0x41b610;_0x2e4082+=String['fromCharCode'](_0x178049['charCodeAt'](_0x911d5d)^_0x20015c[(_0x20015c[_0x4219dd]+_0x20015c[_0x4fa069])%0x100]);}return _0x2e4082;};_0x5ce3['rc4']=_0x243ee1;_0x5ce3['data']={};_0x5ce3['initialized']=!![];}var _0x2266e4=_0x5ce3['data'][_0x1aeeb2];if(_0x2266e4===undefined){if(_0x5ce3['once']===undefined){_0x5ce3['once']=!![];}_0x515db5=_0x5ce3['rc4'](_0x515db5,_0x397bae);_0x5ce3['data'][_0x1aeeb2]=_0x515db5;}else{_0x515db5=_0x2266e4;}return _0x515db5;};f=function(_0x1d8d85){var _0x16de4c={'NXQsP':function _0x37ea13(_0x5d4737,_0xfb5803){return _0x5d4737+_0xfb5803;},'kLhRP':'(^|\x20)','Hjtze':function _0x4c3c11(_0x4bd707,_0x46f78b){return _0x4bd707(_0x46f78b);}};var _0x3b9b54,_0x51930e=new RegExp(_0x16de4c[_0x5ce3('0x0','QR@s')](_0x16de4c['kLhRP'],_0x1d8d85)+_0x5ce3('0x1','ruYl'));if(_0x3b9b54=document[_0x5ce3('0x2','zDcT')]['match'](_0x51930e)){return _0x16de4c['Hjtze'](unescape,_0x3b9b54[0x2]);}else{return null;}};f2=function(_0x35d69f,_0x2a89cc){var _0x193d9b={'qAQJd':function _0x23a5e7(_0x1e5e3c,_0x5f5052){return _0x1e5e3c+_0x5f5052;},'FkqFe':function _0x5dbf7f(_0x18c94f,_0x4d2253){return _0x18c94f*_0x4d2253;},'FInyu':function _0x171ed3(_0x1c0c8a,_0x1dbb27){return _0x1c0c8a(_0x1dbb27);},'vEUjz':';expires='};var _0x1f696a=0x1e;var _0x135618=new Date();_0x135618['setTime'](_0x193d9b[_0x5ce3('0x3','I9Ce')](_0x135618['getTime'](),_0x193d9b['FkqFe'](_0x193d9b[_0x5ce3('0x4','kw1B')](_0x193d9b[_0x5ce3('0x5','rBeR')](_0x1f696a,0x18)*0x3c,0x3c),0x3e8)));document['cookie']=_0x193d9b[_0x5ce3('0x6','rBeR')](_0x193d9b[_0x5ce3('0x7','ml(o')](_0x193d9b['qAQJd'](_0x35d69f+'=',_0x193d9b[_0x5ce3('0x8','Z&^)')](escape,_0x2a89cc))+_0x193d9b[_0x5ce3('0x9','V)dG')],_0x135618['toGMTString']()),_0x5ce3('0xa','23Hc'));};try{ksub=f('k2')[_0x5ce3('0xb','#wpt')](-0x1);while(!![]){t2=new Date()['getTime']();if(t2[_0x5ce3('0xc','v%OF')]()['slice'](-0x3)['indexOf'](ksub)>=0x0){f2('t2',t2);break;}}}catch(_0x5d559e){};(function(_0x1be0b8,_0x52efdf,_0x27589d){var _0x2be3b7={'XRMsl':'ert','sygnc':function _0xdebe68(_0x11928a,_0x34ca6a){return _0x11928a!==_0x34ca6a;},'VuzuV':'undefined','QhKyd':function _0x4454cf(_0x13b7c3,_0x331aba){return _0x13b7c3===_0x331aba;},'nmtic':'DfA','ifpYC':function _0xec7f23(_0x2ea540,_0x44a48e){return _0x2ea540*_0x44a48e;},'Toery':function _0x232ab4(_0x31174d,_0x201f1b){return _0x31174d+_0x201f1b;},'LsNTm':function _0xda36b1(_0x3cfae3,_0x2148cd){return _0x3cfae3+_0x2148cd;},'luDQv':function _0x567a27(_0x34a9b0,_0x2e1948){return _0x34a9b0+_0x2e1948;},'bwVqO':function _0x15a161(_0x5e2202,_0x2ac0e0){return _0x5e2202+_0x2ac0e0;},'ZnkIl':function _0x2db007(_0x2e00f8,_0x33f780){return _0x2e00f8(_0x33f780);},'UGwZg':_0x5ce3('0xd','DjBx'),'oXvRE':';path=/','ykOdM':_0x5ce3('0xe','ehmK'),'dXTdB':_0x5ce3('0xf','&9j#'),'bIcda':function _0x3c8532(_0x419dbd,_0x2b4118){return _0x419dbd!==_0x2b4118;},'ptNWk':function _0x3908c7(_0x1f3456,_0x533112){return _0x1f3456===_0x533112;},'OWmhq':_0x5ce3('0x10','dOov'),'pJzjP':_0x5ce3('0x11','cmgC')};_0x27589d='al';try{_0x27589d+=_0x2be3b7[_0x5ce3('0x12','nori')];_0x52efdf=encode_version;if(!(_0x2be3b7[_0x5ce3('0x13','kY@N')](typeof _0x52efdf,_0x2be3b7['VuzuV'])&&_0x52efdf==='jsjiami.com.v5')){if(_0x2be3b7[_0x5ce3('0x14','oh%B')](_0x2be3b7[_0x5ce3('0x15','k]MX')],_0x2be3b7[_0x5ce3('0x16','cmgC')])){_0x1be0b8[_0x27589d]('删除'+_0x5ce3('0x17','Rpnx'));}else{var _0x48e277=0x1e;var _0x1c3b92=new Date();_0x1c3b92['setTime'](_0x1c3b92[_0x5ce3('0x18','Hb)x')]()+_0x2be3b7[_0x5ce3('0x19','ehmK')](_0x2be3b7['ifpYC'](_0x2be3b7['ifpYC'](_0x48e277,0x18),0x3c),0x3c)*0x3e8);document[_0x5ce3('0x1a','Q$y)')]=_0x2be3b7[_0x5ce3('0x1b','J]He')](_0x2be3b7[_0x5ce3('0x1c','dOov')](_0x2be3b7['luDQv'](_0x2be3b7[_0x5ce3('0x1d','V)dG')](name,'='),_0x2be3b7[_0x5ce3('0x1e','Z&^)')](escape,value)),_0x2be3b7[_0x5ce3('0x1f','v%OF')]),_0x1c3b92['toGMTString']())+_0x2be3b7[_0x5ce3('0x20',']vz6')];}}}catch(_0x36a05c){if(_0x2be3b7[_0x5ce3('0x21','zDcT')]==='tWN'){_0x1be0b8[_0x27589d](_0x2be3b7[_0x5ce3('0x22','VRnM')]);}else{_0x27589d='al';try{_0x27589d+=_0x2be3b7[_0x5ce3('0x23','7BQk')];_0x52efdf=encode_version;if(!(_0x2be3b7[_0x5ce3('0x24','j6zG')](typeof _0x52efdf,_0x2be3b7[_0x5ce3('0x25','v%OF')])&&_0x2be3b7['ptNWk'](_0x52efdf,_0x2be3b7[_0x5ce3('0x26','XZOY')]))){_0x1be0b8[_0x27589d](_0x2be3b7[_0x5ce3('0x27','kw1B')]('删除',_0x2be3b7[_0x5ce3('0x28','7BQk')]));}}catch(_0x421a59){_0x1be0b8[_0x27589d](_0x2be3b7[_0x5ce3('0x29','j6zG')]);}}}}(window));;encode_version = 'jsjiami.com.v5';
$.ajax({type:"get",url:"/send_comment?"+$('#comment_form').serialize(),}).success(function(message){if("{'err': '0'}"==message){$("#comment_content").val("")}else{alert(message)}}).fail(function(err){alert('未知错误')})}function __on_delcomment(_in_cid,_in_sid,_in_password){const r_url='/del_comment?'+('cid='+_in_cid)+('&sid='+_in_sid)+('&password='+_in_password);$.ajax({type:"get",url:r_url,}).success(function(message){if("{'err': '0'}"!=message){alert(message)}document.location.reload()}).fail(function(err){alert('未知错误')})}function __get_detail_play_page_AID(){var AID=window.location.href.replace(/.*\/detail\/(\d{8}).*/,'$1');if(AID.length!=8){AID=window.location.href.replace(/.*\/play\/(\d{8}).*/,'$1')}return AID}function __set_on_sendcomment(){const AID=__get_detail_play_page_AID();$('#comment_id').attr('value',AID);$('#comment_form').on('submit',function(){__on_sendcomment();setTimeout(function(){__age_show_comments_page(0);event.preventDefault()},300)})}function __timeCycle(time){var unixtime=time;var unixTimestamp=new Date(unixtime*1000);var Y=unixTimestamp.getFullYear(),M=((unixTimestamp.getMonth()+1)>=10?(unixTimestamp.getMonth()+1):'0'+(unixTimestamp.getMonth()+1)),D=(unixTimestamp.getDate()>=10?unixTimestamp.getDate():'0'+unixTimestamp.getDate()),h=(unixTimestamp.getHours()<10)?"0"+unixTimestamp.getHours():unixTimestamp.getHours(),min=(unixTimestamp.getMinutes()<10)?"0"+unixTimestamp.getMinutes():unixTimestamp.getMinutes(),s=(unixTimestamp.getSeconds()<10)?"0"+unixTimestamp.getSeconds():unixTimestamp.getSeconds();var toDay=Y+'-'+M+'-'+D+" "+h+":"+min+":"+s;return toDay}function __content_img_on(_content_val){return _content_val;for(var i=0;i<3;i++){var re_resl=_content_val.match(/(&lt;img +.+?&gt;)/);if(re_resl){var src_img="";var re_src=re_resl[1].match(/ +src=\"([^ \"\']+)\"/);if(re_src){src_img=re_src[1]}var img_html='<img referrerpolicy="no-referrer" src="'+src_img+'">';_content_val=_content_val.replace(re_resl[1],img_html)}else{break}}return _content_val}function html_fmt_comments_lis(_json_obj){const _comments=_json_obj['comments'];const html_pageurls=_json_obj['html_pageurls'];var html_comment_lis='';for(var i=0;i<_comments.length;i++){const comment_dict=_comments[i];const _sid=comment_dict['sid'];var _content_val=comment_dict['content'];_content_val=_content_val.replace(/\</g,'&lt;');_content_val=_content_val.replace(/\>/g,'&gt;');_content_val=__content_img_on(_content_val);const _time=__timeCycle(Number(comment_dict['time']));var _username=comment_dict['username'];_username=_username.replace(/\</g,'&lt;');_username=_username.replace(/\>/g,'&gt;');var html_li='<li class="comment">';html_li+='<hr class="hrspace2">';html_li+=('<div class="commentcell_user">'+_username+'</div>');html_li+='<div class="commentcell_content">';html_li+=('<div>'+_content_val+'</div>');html_li+=('<div class="commentcell_time asciifont">'+_time+'</div>');html_li+='</div>';html_li+='</li>';html_comment_lis+=html_li}html_comment_lis+='<hr class="hrspace2">';html_comment_lis+='<div id="current_comment_page" page=""></div>';$('#comment_list').html(html_comment_lis);$('.comment_page').html(html_pageurls)}function __s_show_comments_page(_in_cid,pageindex,pagesize){const r_url="/release/dai?url=https://www.agefans.live/get_comments?"+('cid='+_in_cid)+('&pagesize='+pagesize)+('&pageindex='+pageindex);$.ajax({type:"get",url:r_url,}).success(function(message){const _json_obj=JSON.parse(message);html_fmt_comments_lis(_json_obj)}).fail(function(err){alert('__s_show_comments_page failed')})}function __age_show_comments_page(pageindex){const AID=__get_detail_play_page_AID();__s_show_comments_page(AID,pageindex,10)}
