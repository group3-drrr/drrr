// JavaScript code to toggle the hamburger menu
    $(document).ready(function() {
        $('.hamburger').click(function() {

  if ($('.hamburger').hasClass('on'))
  { 
    $('.hamburger').toggleClass('on')         
    $('.site-nav').css({
        'position': 'fixed',
        'top': '0',
        'display': 'block',
        'right': '0',
        'opacity': '1',
        'visibility': 'visible',
        'z-index': '9999'
    });

const offset = $(this).offset();
    const top = offset.top;
    const left = offset.left;
    console.log('Top:', top);
    console.log('Left:', left);
    

        $(this).css({

     'position': 'fixed', 
     'left': ${left}px


    })


} else {
    $('.hamburger').toggleClass('on');

    $('.site-nav').css({
        'top': '0',
        'right': '-150px', 
        'visibility': 'hidden',
        'opacity': '0'
        
    });
    



    
    
}




        });

const checker = $(".hamburger").hasClass("on")

  
  
$('body').on('click', ':not(.site-nav)', function() {
  

  if (!checker) {
    $('.hamburger').toggleClass('on');
        $('.site-nav').css({

        'top': '0',
        'right': '-150px', 
        'visibility': 'hidden',
        'opacity': '0'
        
    });
    
  }
  console.log("sg")
    
  });

        
          
          $(".test-btn").on('click', function(){
       // test btn
          });
          
  //  let totalDivs = $('.hero-content').length;
          

      
      
  let heroTotal = $('.hero-content').length;
console.log(heroTotal);



  $('.test-btn').click(function() {
    
  
    let currentRadio = $('input[type="radio"]:checked');
    let nextRadio;

    if (currentRadio.length) {
      nextRadio = currentRadio.next('input[type="radio"]');
    } else {
      nextRadio = $('input[type="radio"]:first');
    }

    if (nextRadio.length) {
      nextRadio.prop('checked', true);
    } else {
      $('input[type="radio"]:first').prop('checked', true);
    }
  });

// carousell let timer = setInterval(myFunction, 1000);



function myFunction() {

const selectedRadioIndex = $('input[name="option"]:checked').index();
console.log(The selected radio index is: ${selectedRadioIndex});


let currentRadio = $('input[type="radio"]:checked');

    let nextRadio;


    if (currentRadio.length) {
      nextRadio = currentRadio.next('input[type="radio"]');
    } else {
      nextRadio = $('input[type="radio"]:first');
    }

    if (nextRadio.length) {
      nextRadio.prop('checked', true);
    } else {
      $('input[type="radio"]:first').prop('checked', true);
    }

let xx =$('input[type="radio"]').length;

if (selectedRadioIndex === -1) {
    $('.first').css("transform", translateX(0%))
} else if (selectedRadioIndex === xx -1) {
     $('.first').css("transform", translateX(0%))
}



else {
  $('.first').css("transform", translateX( ${(selectedRadioIndex + 1)* -100}%))
}
}



    $('input[type="radio"]').click(function() {

  let selectedIndex = $('input[type="radio"]').index(this);

  $('.first').css("transform", translateX( ${selectedIndex * -100}%))
  console.log(selectedIndex)
  
  /* carousell
  clearInterval(timer);
  timer = setInterval(myFunction, 1000);
*/
  console.log("Timer reset.");
});


const gradients = [
  "linear-gradient(90deg, rgba(58,180,131,1) 0%, rgba(29,163,253,1) 50%, rgba(255,0,245,1) 100%)",
  "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  "linear-gradient(90deg, rgba(215,214,24,1) 0%, rgba(29,253,95,1) 50%, rgba(0,230,255,1) 100%)"
  
  
  ]



$('.btn').each(function() {
  
  
  const iii = $(this).parent().index();
  console.log(iii)
  
  $(this).css({
    "background": ${gradients[iii]},
    "background-size": "300%",

    
    
    })
 
  
})

const bg = [
  "url(/images/fourpics/1/2.jpg)",
  "url(/images/fourpics/0/2.jpg)"
  ];
  
  
const description = [
  "Ground Shaking. Ground shaking is the vibration that we feel when the energy built up by the application of stress to the lithosphere is released by faulting during an earthquake. Most natural earthquakes are caused by sudden slippage along a fault is hindered because there are irregularities on the fault plane. If an earthquake generates a large enough energy-giving enough shaking intensity, infrastructures such as buildings, bridges, and dams might experience severe damage. Furthermore, ground shaking might result in the destabilization of the slope of cliffs and the ground. Piled objects may fall and might bring additional hazards to the individuals nearby. <br> **Ground shaking per se cannot harm you if you are in an open field. Harm to individuals may cause by the inferior design of infrastructures such as poor constructions, or weak foundations.",
    "Ground Rupture. Ground rupture is another important effect of earthquakes that occurs when the earthquake movement along a fault breaks the Earth's surface. The lithosphere breaks when its strength is overcome by a large amount of stress applied. This breaking happens in much the same way a piece of rock does when struck hard enough with a hammer. When an earthquake is strong enough, faulting initiated at depths may breach the earth’s surface to form a ground rupture. Faulting tends to occur along zones of weakness such as old or pre-existing faults, fractures (or rock breaks not involving slip), or along bedding planes (contacts between sedimentary rock layers and between different types of rocks). Stresses acting on broken rock masses need only to overcome frictional resistance along these old planes of weakness. <br> **The ground rupture length depends on the magnitude of an earthquake. Earthquakes with a magnitude 6.5 or greater are generally strong enough to produce large-scale ground ruptures. The ground rupture of the 1990 Luzon earthquake is 120 km long.",
  "Liquefaction. When the ground shakes, some areas especially those made of wet fine sand are subjected to liquefaction. Liquefaction is when sediment grains are made to float in groundwater, which causes the soil to lose all its solidity. They can spray mud and sand over an area a few meters across. Liquefaction takes place when loosely packed, water-logged sediments at or near the ground surface lose their strength in response to strong ground shaking. Liquefaction occurring beneath buildings and other structures can cause major damage during earthquakes. Liquefaction causes some of the most striking ground failures and damages to man-made structures. Damage during liquefaction results from the settlement of structures into the soil, flow landslides, laterally spreading landslides, and the ejection of water and sediments at the surface in the form of sand blows or sand boils, fountains, or even seepage of water that leads to flooding.<br> **To better understand how Liquefaction happens due to an earthquake, you may access the given link for video presentation; https://www.youtube.com/watch?v=tW1iUAAMZZU",
  `Earthquake-induced landslide. Ground shaking due to earthquakes
  destabilizes cliffs and steep slopes, causing landslides and rockfalls as a significant side-effect. Heavy rain and unconsolidated or fractured rock are exacerbating factors. Landslides are caused by earthquakes both by direct rupture and by sustained shaking of unstable slopes. They can easily destroy buildings in their path, or block roads and railroad lines, or take hilltop homes with them as they tumble. Why landslides occur? A change in the stability of a slope can be caused by several factors acting together or alone. These factors include below;`,
  "1. Removal of support. At the base of a slope which may be due to erosion at the toe of a slope by rivers or ocean waves. That is why landslides may occur even on a hot summer day.",
  "2. Groundwater (pore water) pressure. During sudden changes in the water level of bodies of water adjacent to a slope also acts to destabilize it. <br>**3. Volcanic Eruptions. Bulging of slopes and the force of volcanic material ejection or emission may also contribute to slope instability.",
  "4. Intense rainfall. Landslides may also be triggered due to the weakening of slope material by water saturation.",
  "5. Earthquakes. Slopes are prone to widespread failure during earthquakes because of the sudden shaking of hilly and mountainous areas. What aprolonged period of rainfall cannot do to slopes is accomplished by s strong earthquake that may last only less than a minute.",
  "Tsunami. Destructive waves that are generated by earthquakes and other events had been given numerous misleading names in the past. These types of waves are not rare occurrences in Japan. It is no wonder then that the Japanese term “tsunami”, which means harbor waves, is widely used even if it is also a misnomer. Perhaps a term that reflects both the conceptual and operational sense of the phenomenon would be preferred. Regardless of origin, all tsunamis are triggered by powerful events that cause sudden displacement of large volumes of water. Tsunamis are a series of water waves caused when the seafloor moves vertically in an earthquake. Tsunami speeds in the deep ocean have been measured at more than 700 km/hr, comparable to some jet planes, and when tsunamis reach shallow water near the coast, they can reach heights of more than 27 meters. Remember that tsunamis are a series of waves, and may start with a gentle withdrawal of water, followed by a very abrupt arriving wave, followed by another withdrawal, etc. The safest thing to do if you hear a tsunami is coming is to move to higher ground away from the beach as quickly as possible. Tsunamis are caused by events near the tsunami site of origin but may also be caused by something that is not local to the tsunami source. The following are the possible triggering mechanisms include: 1. Landslide. Occurring under the ocean and coastal landslides displacing ocean water. 2. Volcanic eruption or explosion. Any submarine or coastal volcanic activity and products that can trigger tsunami by displacing large volumes of water.",
  ];




$(".profile").each(function() {
  
 const ppp = $(this).index();
 
 $(this).children(".prof-img-cont").children(".profile-img").css({
   "background": url(/images/backgrounds/${[ppp]}.jpg),
  "background-size": "cover",
  "background-position": "center",
    "background-repeat": "no-repeat"

 
 })
 
 
 $(this).children(".profile-des").html(${description[ppp]})
  
})

const heroBg = [

  "url(/images/fourpics/1/2.jpg)",

  "url(/images/fourpics/0/2.jpg)",
  "url(/images/fourpics/2/1.jpg)"
  ];
  
  
  $(".hero-content").each(function() {
    
    
    const x = $(this).index();
    
    $(this).children(".hero-image").css({
         "background": url(/images/herobg/${x}.jpg),

  "background-size": "cover",
  "background-position": "center",
    "background-repeat": "no-repeat"
      
      
    })
    
    
    
  })

  var screenWidth = $(window).width();

  if (screenWidth >= 769) {
    $(".hamburger").css("display", "none")
  }
  
  
  
    $(".st-play").click(function() {
      
      $(".play").css({
        "transform": "translateY(-100%)"

        
      })
      
      
    })
  
  


      });
