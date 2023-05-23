
$(document).ready(function () {

  let x = 0;
  let y = 0;

  let emptyArr = [];


  const correct = {
    aa0: "tsunami",
    aa1: "rainfall",
    aa2: "aliyah",
    aa3: "what"
  }

  $(".grid-item").click(function () {


    const letter = $(this).text();

    const test = $(this).parent().prev().children().length


    const contIndex = $(this).parent().parent().index()

    const parentCont = $(this).parent().parent()
    const overlay = $("<div class='tite'></div>");

    console.log(contIndex)

    //alert(test)

    const box = $(this).parent().prev().children().eq(x)
    const yy = $(this);

    if (x < test) {
      box.text(letter)
      x++;
      emptyArr.push(letter.replace(/\s/g, ''))

      let attempt = emptyArr.join("")
      if (!(attempt == correct[`aa${contIndex}`]) && (x == test)) {
        errorClick(yy)
      } else {
        clickAni(yy)
      }

      if (attempt == correct[`aa${contIndex}`]) {
        //  alert("wiw")
        parentCont.append(overlay)
        attempt = '';
        emptyArr.splice(0)
        x = 0;
      }

    } else {
      errorClick(yy)
    }

  })

  function clickAni(tite) {
    $(tite).addClass("click-animation")
    setTimeout(function () {

      resetAni(tite)

    }, 100)

  }



  function errorClick(tite) {
    $(tite).addClass("error-animation")
    setTimeout(function () {

      resetAni(tite)

    }, 100)

  }

  function resetAni(tite) {

    $(tite).removeClass("click-animation")
    $(tite).removeClass("error-animation")
  }


  $('.grid-item2').click(function () {


    const index = $(this).index();
    console.log($(this).text())
    let remove;

    if ($(this).text() != '' && $(this).text() != undefined) {
      if (index !== 0 && $(this).text() != '') {
        remove = $(this).parent().find(`.grid-item2:gt(${index - 1})`)
        emptyArr.splice(index)
        x = index;
      } else {
        remove = $(this).parent().find(".grid-item2")
        emptyArr.splice(0)
        x = 0;
      }
    }

    remove.html('');


  })




  let theContainer = $('.four-pics-container');

  // Set the maxlength attribute based on the index
  theContainer.each(function (index) {

    const gridContainer = $(this).children(".grid-container2").children(".grid-item2").length

    $(this).children(".grid-container2").css("grid-template-columns", `repeat(${gridContainer}, 1fr)`)



    console.log(gridContainer)

  });


  let fourImages = $('.four-img');


  fourImages.each(function () {

    let images = $(this).children(".f-img")

    images.each(function () {

      console.log($(this).text())

      const k = $(this).parent().parent().index()
      const l = $(this).index()

      console.log(k)


      $(this).css({

        "background": `url(./images/fourpics/${k}/${l}.jpg)`,

        "background-size": "cover",

        "background-repeat": "no-repeat",

        "background-position": "center"

      })



      $(this).click(function () {

        const rl = $(this).css("background-image")



        $(".img-overlay").css({
          "background-image": `${rl}`,
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "display": "block"
        })

        $(".img-overlay-container").css({

          "position": "fixed",

          "width": "100vw",

          "height": "100vh",
          "display": "flex",
          "align-items": "center",
          "justify-content": "center"

        })
        $(".img-overlay-container").addClass("over")

      })




    });

    $(".img-overlay-container").click(function () {

      const checkers = $(".img-overlay-container").hasClass("over")

      if (checkers) {
        $(".img-overlay-container").css({

          "display": "none"

        })

        $(".img-overlay-container").removeClass("over")

        $(".img-overlay").css({
          "display": "none"
        })





      }


    })

    const background = [
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      "radial-gradient(circle, rgba(174,175,238,1) 0%, rgba(233,148,221,1) 100%)",
      "radial-gradient(circle, rgba(233,238,174,1) 0%, rgba(148,233,224,1) 100%)",
      "radial-gradient(circle, rgba(206,174,238,1) 0%, rgba(233,148,148,1) 100%)"


    ]

    $(".four-pics-container").each(function () {

      const i = $(this).index();

      $(this).css("background", `${background[i]}`)


    })

  });

});
