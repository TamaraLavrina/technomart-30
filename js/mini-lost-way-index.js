const lostway=document.querySelector(".lost-way-button"),lostwayPopup=document.querySelector(".modal-write-us"),lostwayClose=lostwayPopup.querySelector(".modal-close"),lostwayForm=lostwayPopup.querySelector(".write-us-form"),lostwayName=lostwayForm.querySelector(".lostway-name"),lostwayEmail=lostwayForm.querySelector(".lostway-email"),mapLink=document.querySelector(".contacts-map"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".modal-close"),goNext=document.querySelector(".gallery-button-next"),goBack=document.querySelector(".gallery-button-back"),slideFirst=document.querySelector(".slide-first"),slideSec=document.querySelector(".slide-second"),slide=document.querySelector(".slide-item"),element=[slideFirst,slideSec],slider=document.querySelector(".service-slider"),tabDelivery=slider.querySelector(".tab-delivery"),tabGaranty=slider.querySelector(".tab-garanty"),tabCredit=slider.querySelector(".tab-credit"),garanty=slider.querySelector(".service-garanty"),credit=slider.querySelector(".service-credit"),delivery=slider.querySelector(".service-delivery");let isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}lostway.addEventListener("click",function(e){e.preventDefault(),lostwayPopup.classList.add("modal-show"),storage?(lostwayName.value=storage,lostwayEmail.focus()):lostwayName.focus()}),lostwayClose.addEventListener("click",function(e){e.preventDefault(),lostwayPopup.classList.remove("modal-show"),lostwayPopup.classList.remove("modal-error")}),lostwayForm.addEventListener("submit",function(e){e.preventDefault()}),lostwayForm.addEventListener("submit",function(e){lostwayName.value&&lostwayEmail.value?isStorageSupport&&localStorage.setItem("login",lostwayName.value):(e.preventDefault(),lostwayPopup.classList.remove("modal-error"),lostwayPopup.offsetWidth=lostwayPopup.offsetWidth,lostwayPopup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&lostwayPopup.classList.contains("modal-show")&&(e.preventDefault(),lostwayPopup.classList.remove("modal-show"),lostwayPopup.classList.remove("modal-error"))}),goNext.addEventListener("click",function(e){e.preventDefault(),slideFirst.classList.contains("slide-current")?(slideFirst.classList.remove("slide-current"),slideSec.classList.add("slide-current")):(slideSec.classList.remove("slide-current"),slideFirst.classList.add("slide-current"))}),goBack.addEventListener("click",function(e){e.preventDefault(),slideSec.classList.contains("slide-current")?(slideSec.classList.remove("slide-current"),slideFirst.classList.add("slide-current")):(slideFirst.classList.remove("slide-current"),slideSec.classList.add("slide-current"))}),mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("modal-show")&&(e.preventDefault(),mapPopup.classList.remove("modal-show"))}),tabDelivery.addEventListener("click",function(e){e.preventDefault(),tabDelivery.classList.add("active"),(tabCredit||tabGaranty.classList.contains(".active"))&&(tabCredit.classList.remove("active")||tabGaranty.classList.remove("active")),delivery.classList.remove("visually-hidden"),credit.classList.add("visually-hidden"),garanty.classList.add("visually-hidden")}),tabGaranty.addEventListener("click",function(e){e.preventDefault(),tabGaranty.classList.add("active"),(tabCredit||tabDelivery.classList.contains(".active"))&&(tabCredit.classList.remove("active")||tabDelivery.classList.remove("active")),garanty.classList.remove("visually-hidden"),credit.classList.add("visually-hidden"),delivery.classList.add("visually-hidden")}),tabCredit.addEventListener("click",function(e){e.preventDefault(),tabCredit.classList.add("active"),(tabDelivery||tabGaranty.classList.contains(".active"))&&(tabDelivery.classList.remove("active")||tabGaranty.classList.remove("active")),credit.classList.remove("visually-hidden"),garanty.classList.add("visually-hidden"),delivery.classList.add("visually-hidden")});
