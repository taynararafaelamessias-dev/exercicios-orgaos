(function(){
  var C=[['carrossel_01','Órgãos do tronco'],['carrossel_02','O coração: corte interno'],['carrossel_03','O olho: vista externa'],['carrossel_04','O encéfalo: corte sagital'],['carrossel_05','As meninges'],['carrossel_06','O néfron'],['carrossel_07','A orelha'],['carrossel_08','Os alvéolos'],['carrossel_09','A boca e os dentes'],['carrossel_10','Relacione cada órgão ao seu sistema'],['carrossel_11_pacote','Caderno + oferta do checkout'],['carrossel_12_bonus1','Oferta do checkout · Bônus 1'],['carrossel_13_bonus2','Oferta do checkout · Bônus 2'],['carrossel_14_bonus3','Oferta do checkout · Bônus 3'],['carrossel_15_bonus4','Oferta do checkout · Bônus 4']];
  var t=document.getElementById('mtrack'),h='';
  for(var r=0;r<2;r++){C.forEach(function(c){h+='<figure class="slide"'+(r?' aria-hidden="true"':'')+'><img src="imagens/'+c[0]+'.webp" alt="'+c[1]+'"><figcaption>'+c[1]+'</figcaption></figure>';});}
  t.innerHTML=h;
  var m=document.getElementById('marquee');
  m.addEventListener('touchstart',function(){m.classList.add('hold')},{passive:true});
  m.addEventListener('touchend',function(){m.classList.remove('hold')});
  m.addEventListener('touchcancel',function(){m.classList.remove('hold')});
  document.querySelectorAll('a.cta').forEach(function(a){a.addEventListener('click',function(){try{fbq('track','InitiateCheckout',{value:14.99,currency:'BRL'})}catch(e){}})});
  var q=new URLSearchParams(location.search),src=q.get('utm_content')||q.get('src')||'',sck=q.get('utm_campaign')||q.get('sck')||'';
  if(src||sck){document.querySelectorAll('a.cta').forEach(function(a){if(a.getAttribute('href').charAt(0)==='#')return;var u=new URL(a.href);if(src)u.searchParams.set('src',src);if(sck)u.searchParams.set('sck',sck);['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(function(k){if(q.get(k))u.searchParams.set(k,q.get(k))});a.href=u.toString();});}
  var b=document.querySelector('.bonos'),ds=document.querySelectorAll('.dots i');
  function upd(){var w=b.firstElementChild.getBoundingClientRect().width+16,n=Math.round(b.scrollLeft/w);ds.forEach(function(d,i){d.classList.toggle('on',i===n)});}
  b.addEventListener('scroll',upd,{passive:true});
  document.querySelectorAll('.barrow').forEach(function(a){a.addEventListener('click',function(){var w=b.firstElementChild.getBoundingClientRect().width+16;b.scrollBy({left:a.dataset.d*w,behavior:'smooth'})})});
  var hold=0;function step(){if(Date.now()<hold)return;var w=b.firstElementChild.getBoundingClientRect().width+16,n=Math.round(b.scrollLeft/w),last=b.children.length-1;b.scrollTo({left:(n>=last?0:n+1)*w,behavior:'smooth'});}
  ['touchstart','mouseenter','wheel'].forEach(function(ev){b.addEventListener(ev,function(){hold=Date.now()+6000},{passive:true})});
  document.querySelectorAll('.barrow').forEach(function(a){a.addEventListener('click',function(){hold=Date.now()+6000})});
  setInterval(step,3500);
})();
