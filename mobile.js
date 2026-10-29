
(()=>{const query=matchMedia('(max-width:760px), (max-height:520px) and (pointer:coarse)');const nav=document.querySelector('.mobile-nav'),counter=document.getElementById('mobile-counter'),back=document.getElementById('mobile-prev'),next=document.getElementById('mobile-next');let mobile=false;
function refresh(){const i=Reveal.getIndices().h,n=Reveal.getTotalSlides();counter.textContent=`${i+1} / ${n}`;back.disabled=Reveal.isFirstSlide()&&!Reveal.availableFragments().prev;next.disabled=Reveal.isLastSlide()&&!Reveal.availableFragments().next;next.textContent=Reveal.availableFragments().next?'Revelar →':'Próximo →'}
function resize(){const was=mobile;mobile=query.matches;Reveal.configure({disableLayout:false,touch:!mobile,controls:!mobile,center:!mobile,keyboard:true});if(was!==mobile||!was)Reveal.layout();refresh()}
back.onclick=()=>Reveal.prev();next.onclick=()=>Reveal.next();Reveal.on('ready',resize);Reveal.on('slidechanged',e=>{if(mobile)e.currentSlide.scrollTop=0;refresh()});Reveal.on('fragmentshown',refresh);Reveal.on('fragmenthidden',refresh);query.addEventListener('change',resize);if(Reveal.isReady())resize();
})();
