(function(){
  var C=[['carrossel_01','O que significa BTS'],['carrossel_02','Os 7 membros'],['carrossel_03','Perfil de cada membro'],['carrossel_04','Minha história com o BTS'],['carrossel_05','ARIRANG, a volta dos 7'],['carrossel_06','Diário do show'],['carrossel_07','Meu ingresso'],['carrossel_08','Bingo ARMY'],['carrossel_09','Jogo da memória'],['carrossel_10','Quiz em 3 níveis'],['carrossel_11_pacote','Guia + oferta do checkout'],['carrossel_12_bonus1','Oferta do checkout · Bônus 1'],['carrossel_13_bonus2','Oferta do checkout · Bônus 2'],['carrossel_14_bonus3','Oferta do checkout · Bônus 3'],['carrossel_15_bonus4','Oferta do checkout · Bônus 4']];
  var t=document.getElementById('mtrack'),h='';
  for(var r=0;r<2;r++){C.forEach(function(c){h+='<figure class="slide"'+(r?' aria-hidden="true"':'')+'><img src="imagens/'+c[0]+'.webp" alt="'+c[1]+'"><figcaption>'+c[1]+'</figcaption></figure>';});}
  t.innerHTML=h;
  var m=document.getElementById('marquee');
  m.addEventListener('touchstart',function(){m.classList.add('hold')},{passive:true});
  m.addEventListener('touchend',function(){m.classList.remove('hold')});
  m.addEventListener('touchcancel',function(){m.classList.remove('hold')});
  document.querySelectorAll('a.cta').forEach(function(a){a.addEventListener('click',function(){try{fbq('track','InitiateCheckout',{value:16.99,currency:'BRL'})}catch(e){}})});
  var q=new URLSearchParams(location.search),src=q.get('utm_content')||q.get('src')||'',sck=q.get('utm_campaign')||q.get('sck')||'';
  if(src||sck){document.querySelectorAll('a.cta').forEach(function(a){if(a.getAttribute('href').charAt(0)==='#')return;var u=new URL(a.href);if(src)u.searchParams.set('src',src);if(sck)u.searchParams.set('sck',sck);['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(function(k){if(q.get(k))u.searchParams.set(k,q.get(k))});a.href=u.toString();});}
  var bt=document.getElementById('btrack');
  [].slice.call(bt.children).forEach(function(c){var x=c.cloneNode(true);x.setAttribute('aria-hidden','true');bt.appendChild(x)});
  var bm=document.getElementById('bmarq');
  bm.addEventListener('touchstart',function(){bm.classList.add('hold')},{passive:true});
  bm.addEventListener('touchend',function(){bm.classList.remove('hold')});
  bm.addEventListener('touchcancel',function(){bm.classList.remove('hold')});
})();
