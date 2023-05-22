$(document).ready(function() {
  
  
  const answers = {
    

    a0: ["nigga", "africa", "slave"],
    a1: ["dog", "water"],
    a2: ["f", "g"]
    
    
    
    
  }
  
  
  
  
  $(".hints").each(function() {
   const qw = $(this).parent().index();
   
   
   for (let i = 0; i < answers[`a${qw}`].length; i++) {
     
     
     
     
     function replaceNumbersWithWords(input) {
  const numberMappings = {
    "0": "1st",
    "1": "2nd",
    "2": "3rd",
    "3": "4th",
    "4": "5th",
    "5": "6th",
    "6": "7th",
    "7": "8th"
  };

  // Replace numeric characters with word representations
  const replacedText = input.replace(/\b\d+\b/g, (match) => {
    return numberMappings[match] || match; // Use the mapping if available, else keep the original number
  });

  return replacedText;
}
     
     
     
     const hint = answers[`a${qw}`][i]
     const ss = `<p>(${i} word) first letter: <b>${hint[0]}</b>, <b>${hint.length}letters</b></p>`
     
     $(this).append(replaceNumbersWithWords(ss))
     
   }
   
   
  })
  
  
  
  
  
  
  // Attach click event listener to the div
  $('.blank-para').click(function() {
    // Select the input elements inside the div
    let inputElements = $(this).find('input');
    // Get the number of input elements
    let numberOfInputs = inputElements.length;
// console.log(`Number of input elements: ${numberOfInputs}`);
    
    
  });
  
  let blankArr = [];
  
  $('.blank').keyup(function() {
      let attr = $(this).attr('data-attr');
    //  console.log(attr)
      
      let index = $(this).parent().parent().index();
      
      let index2 = $(this).index()
      
      
      
      
      
      
      let ans = answers[`a${index}`][index2]
      let ansChecker = answers[`a${index}`]
      
      
      
   


      
      
      
      
function arraysHaveSameElements(blankArr, ansCheckrr) {
  if (blankArr.length !== ansChecker.length) {
    return false; // Arrays have different lengths, not the same elements
  }

  return blankArr.every(function(element) {
    return $.inArray(element, ansChecker) !== -1;
  });
}
        
        


      
      
      
      
      
      
      if ($(this).val().toLowerCase() === ans.toLowerCase()) {
        

        
        
        $(this).prop("disabled", true)
        $(this).val(ans)
        $(this).css("border-bottom", "2px solid lightgreen")
        $(this).addClass('correct')
        $(this).next().focus();
        blankArr.push($(this).val())


const lowerCaseArray = blankArr.map(function(element) {
  return element.toLowerCase();
});




const lowerCaseArray2 = ansChecker.map(function(element) {
  return element.toLowerCase();
});

     
     
     
     
     
        var result = arraysHaveSameElements(lowerCaseArray, lowerCaseArray2);
console.log(result); // Output: true
        if (result) {
       //   alert("k")
          blankArr = [];
        
      $(this).parent().parent().find(".next-btn").css("opacity", "1")
        $(this).parent().parent().find(".next-btn").addClass("next")
        }
        
        
        
        
        
      }
      
      
      
    })
    
    

    
    
    let inputTextElements = $('input[type="text"]');

  // Set the maxlength attribute based on the index
  inputTextElements.each(function(index) {
    
    let indexx = $(this).parent().parent().index();
      
      let indexx2 = $(this).index()
      
    
    let length1 = answers[`a${indexx}`][indexx2]
    

$(this).attr("maxlength", length1.length)
$(this).css("width", function() {
  
  if (length1.length === 1) {
    return (length1.length + 0.5) + "ch"
  } else {
    return length1.length + "ch"
  }
})
  });
    
    
    $(".next-btn").click(function () {
      
      const ind = $(this).parent().parent().index()
  
      if (ind == 0) {
        $(".first").css('transform', 'translateX(-100%')
      } else if (ind == 1) {
        $(".first").css('transform', 'translateX(-200%')
      } else {
        alert("what")
      }
      
      
      
      
    })
    $(".prev-btn").click(function () {
      
      const ind = $(this).parent().parent().index()
  
      if (ind == 1) {
        $(".first").css('transform', 'translateX(0)')
      } else if (ind == 2) {
        $(".first").css('transform', 'translateX(-100%')
      } else {
        alert("what")
      }
      
      
      
      
    })
    
    
    

    
});
