// JavaScript code to toggle the hamburger menu
$(document).ready(function () {
  $('.hamburger').click(function () {

    if ($('.hamburger').hasClass('on')) {
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
        'left': `${left}px`


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



  $('body').on('click', ':not(.site-nav)', function () {


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



  $(".test-btn").on('click', function () {
    // test btn
  });

  //  let totalDivs = $('.hero-content').length;




  let heroTotal = $('.hero-content').length;
  console.log(heroTotal);



  $('.test-btn').click(function () {


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

  /* carousell */ let timer = setInterval(myFunction, 2500);



  function myFunction() {

    const selectedRadioIndex = $('input[name="option"]:checked').index();
    console.log(`The selected radio index is: ${selectedRadioIndex}`);


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

    let xx = $('input[type="radio"]').length;

    if (selectedRadioIndex === -1) {
      $('.first').css("transform", `translateX(0%)`)
    } else if (selectedRadioIndex === xx - 1) {
      $('.first').css("transform", `translateX(0%)`)
    }



    else {
      $('.first').css("transform", `translateX( ${(selectedRadioIndex + 1) * -100}%)`)
    }
  }



  $('input[type="radio"]').click(function () {

    let selectedIndex = $('input[type="radio"]').index(this);

    $('.first').css("transform", `translateX( ${selectedIndex * -100}%)`)
    console.log(selectedIndex)

    /* carousell */
    clearInterval(timer);
    timer = setInterval(myFunction, 2500);

    console.log("Timer reset.");
  });


  const gradients = [
    "linear-gradient(90deg, rgba(58,180,131,1) 0%, rgba(29,163,253,1) 50%, rgba(255,0,245,1) 100%)",
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(255,7,0,1) 100%)",

    "linear-gradient(90deg, rgba(238,110,89,1) 0%, rgba(100,9,121,1) 35%, rgba(0,255,101,1) 100%)",
    "linear-gradient(90deg, rgba(95,238,89,1) 0%, rgba(34,9,121,1) 35%, rgba(252,0,255,1) 100%)"



  ]



  $('.btn').each(function () {


    const iii = $(this).parent().index();
    console.log(iii)

    $(this).css({
      "background": `${gradients[iii]}`,
      "background-size": "300%",



    })


  })

  const bg = [
    "url(/images/fourpics/1/2.jpg)",
    "url(/images/fourpics/0/2.jpg)"
  ];


  const description = [
    `<span class="highlight">Ground shaking</span> is the vibration felt when stress accumulated in the Earth's lithosphere is released during an earthquake. It occurs when there is sudden slippage along a fault with irregularities. Strong ground shaking can cause severe damage to buildings, bridges, and dams. It can also destabilize slopes and cause objects to fall, posing additional hazards to nearby individuals.<br> Ground shaking per se cannot harm you if you are in an open field. Harm to individuals may cause by the inferior design of infrastructures such as poor constructions, or weak foundations.`,




    "<span class='highlight'>Ground rupture</span> occurs when the movement along a fault during an earthquake breaks the Earth's surface. This breaking is similar to when a piece of rock breaks when struck hard. Faulting can breach the surface if the earthquake is strong enough. It tends to happen along zones of weakness, such as pre-existing faults, fractures, or bedding planes. Stresses acting on broken rock masses only need to overcome frictional resistance along these weak planes.<br> The ground rupture length depends on the magnitude of an earthquake. Earthquakes with a magnitude 6.5 or greater are generally strong enough to produce large-scale ground ruptures. The ground rupture of the 1990 Luzon earthquake is 120 km long.",
    "<span class='highlight'>Liquefaction</span> occurs when the ground shakes, particularly in areas with wet fine sand. Sediment grains float in groundwater, causing the soil to lose its solidity. Liquefaction can spray mud and sand over a few-meter area. It happens when loosely packed, water-logged sediments near the surface weaken due to strong shaking. Liquefaction beneath buildings and structures can cause significant damage. Settlement of structures, flow landslides, lateral spreading landslides, and the ejection of water and sediments in the form of sand blows or boils contribute to the damage caused by liquefaction.",
    `<span class='highlight'>Earthquake-induced landslide</span> Ground shaking due to earthquakes
  destabilizes cliffs and steep slopes, causing landslides and rockfalls as a significant side-effect. Heavy rain and unconsolidated or fractured rock are exacerbating factors. Landslides are caused by earthquakes both by direct rupture and by sustained shaking of unstable slopes. They can easily destroy buildings in their path, or block roads and railroad lines, or take hilltop homes with them as they tumble. Why landslides occur? A change in the stability of a slope can be caused by several factors acting together or alone. These factors include below:`,
    "<span class='highlight'>1. Removal of support</span> At the base of a slope which may be due to erosion at the toe of a slope by rivers or ocean waves. That is why landslides may occur even on a hot summer day.",
    "<span class='highlight'>2. Groundwater pressure</span> During sudden changes in the water level of bodies of water adjacent to a slope also acts to destabilize it. <span class='highlight'>3. Volcanic Eruptions</span> Bulging of slopes and the force of volcanic material ejection or emission may also contribute to slope instability.",
    "<span class='highlight'>4. Intense rainfall</span> Landslides may also be triggered due to the weakening of slope material by water saturation.",
    "<span class='highlight'>5. Earthquakes</span> Slopes are prone to widespread failure during earthquakes because of the sudden shaking of hilly and mountainous areas. What aprolonged period of rainfall cannot do to slopes is accomplished by s strong earthquake that may last only less than a minute.",
    `<span class='highlight'>Tsunamis</span> are destructive waves generated by earthquakes and other events. The term "tsunami" in Japan means harbor waves, although it's a misnomer. They occur when the seafloor moves vertically in an earthquake, causing sudden displacement of water. Tsunamis can travel at speeds over 700 km/hr in the deep ocean and can reach heights of over 27 meters near the coast. They come as a series of waves, starting with a gentle withdrawal followed by an abrupt arriving wave. If you hear a tsunami is coming, the safest action is to quickly move to higher ground away from the beach. Tsunamis can be triggered by landslides(1) or volcanic activity(2) that displaces large volumes of water.`,
  ];



  $(".hero-content").each(function () {


    const x = $(this).index();

    $(this).children(".hero-image").css({
      "background": `url(./images/herobg/${x}.jpg)`,

      "background-size": "cover",
      "background-position": "center",
      "background-repeat": "no-repeat"


    })



  })


  $(".profile").each(function () {

    const ppp = $(this).index();

    $(this).children(".prof-img-cont").children(".profile-img").css({
      "background": `url(./images/prof-bg/${[ppp]}.jpg)`,
      "background-size": "cover",
      "background-position": "center",
      "background-repeat": "no-repeat"
    })



    $(this).children(".profile-des").html(`${description[ppp]}`)

    $(this).css({
      "background-image": `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./images/backgrounds/${[ppp]}.jpg)`,
      "background-size": "cover",
      "background-position": "right",
      "background-repeat": "no-repeat"
    })

  })

  $(".profile1").each(function () {

    const ppp = $(this).index();

    $(this).children(".prof-img-cont").children(".profile-img").css({
      "background": `url(./images/prof-bg/${[ppp]}.jpg)`,
      "background-size": "cover",
      "background-position": "center",
      "background-repeat": "no-repeat"
    })



    $(this).children(".profile-des").html(`${description[ppp]}`)

    $(this).css({
      "background-image": `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./images/backgrounds/${[ppp]}.jpg)`,
      "background-size": "cover",
      "background-position": "right",
      "background-repeat": "no-repeat"
    })

  })



  var screenWidth = $(window).width();

  if (screenWidth >= 769) {
    $(".hamburger").css("display", "none")
  }



  $(".st-play").click(function () {

    $(".play").css({
      "transform": "translateY(-100%)"


    })


  })




});




