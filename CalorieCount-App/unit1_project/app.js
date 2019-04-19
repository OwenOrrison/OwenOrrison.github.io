$(() => {
  /////////////////////////////////
  /////////// Modals //////////////
  /////////////////////////////////
  const $myCountModal = $('<div>').attr('id','myCountModal').addClass('modal');
  const $myTotalModal = $('<div>').attr('id','myTotalModal').addClass('modal');
  const $myRecentsModal = $('<div>').attr('id','myRecentsModal').addClass('modal');

  const $closeButton1 = $('<span>').attr('type' , 'button').addClass('close').attr('id','close1').text('X');
  const $closeButton2 = $('<span>').attr('type' , 'button').addClass('close').attr('id','close2').text('X');
  const $closeButton3 = $('<span>').attr('type' , 'button').addClass('close').attr('id','close3').text('X');

  const $resetButton = $('<button>').attr('type', 'button').addClass('reset').text('RESET');
  const $resetButton2 = $('<button>').attr('type', 'button').addClass('resetLocalStorage').text('RESET');
  const $addButton = $('<button>').attr('type', 'button').addClass('add').text('ADD');

  $('body').append($myCountModal);
  $('body').append($myTotalModal);
  $('body').append($myRecentsModal);
  $($myCountModal).append($closeButton1);
  $($myCountModal).append($resetButton);
  $($myTotalModal).append($closeButton2);
  $($myTotalModal).append($resetButton2);
  $($myRecentsModal).append($closeButton3);
  $($myCountModal).append($addButton);
  ////////////Event Listeners/////////////////
  const $resetMyCount = () => {
    myBrandName = '';
    myName = '';
    servingsInput = 0;
    myCalories = 0;
    myFiber = 0;
    myProtein = 0;
    mySugars = 0;
    myCarbs = 0;
    myFat = 0;
    myServings = 0;
    $myCountModalContent.text('Calories: '+ (myCalories) + ', Fiber: ' + (myFiber) + ', Protein: ' + (myProtein) + ', Sugars: ' + (mySugars) + ', Carbs: ' + (myCarbs) + ', Fat: ' + (myFat) + ', Servings: ' + (myServings))
    localStorage.setItem('myCount', JSON.stringify({
      Calories: 0,
      Fiber: 0,
      Protein: 0,
      Sugars: 0,
      Carbs: 0,
      Fat: 0,
    }));
  }
  const $resetMyTotal = () => {
    localStorage.setItem('myTotal', JSON.stringify({
      Calories: 0,
      Fiber: 0,
      Protein: 0,
      Sugars: 0,
      Carbs: 0,
      Fat: 0,
    }))
    myBrandName = '';
    myName = '';
    servingsInput = 0;
    myCalories = 0;
    myFiber = 0;
    myProtein = 0;
    mySugars = 0;
    myCarbs = 0;
    myFat = 0;
    myServings = 0;
    $myTotalModalContent.text('Calories: '+ (myCalories) + ', Fiber: ' + (myFiber) + ', Protein: ' + (myProtein) + ', Sugars: ' + (mySugars) + ', Carbs: ' + (myCarbs) + ', Fat: ' + (myFat) + ', Servings: ' + (myServings))
    console.log('$resetMyTotal', JSON.parse(localStorage.getItem('myTotal')));
  }

  $('body').on('click', '.myCount' , (event) => {
    $('#myCountModal').show()});
    $('body').on('click', '.myTotal' , (event) => {
      $('#myTotalModal').show()});
      $('body').on('click', '.myRecents' , (event) => {
        $('#myRecentsModal').show()});
        $('.close').on('click' , (event) => {
          $('.modal').hide();})
          $('.add').on('click', (event) => {
            const count = JSON.parse(localStorage.getItem('myCount'));
            let total = JSON.parse(localStorage.getItem('myTotal'));
            if(total !== null){
              total = {
                Calories: count.Calories + total.Calories,
                Fiber: count.Fiber + total.Fiber,
                Protein: count.Protein + total.Protein,
                Sugars: count.Sugars + total.Sugars,
                Carbs: count.Carbs + total.Carbs,
                Fat: count.Fat + total.Fat,
              }
            } else {
            total = {
              Calories: count.Calories,
              Fiber: count.Fiber,
              Protein: count.Protein,
              Sugars: count.Sugars,
              Carbs: count.Carbs,
              Fat: count.Fat,
            } }
            localStorage.setItem('myTotal' , JSON.stringify(total));
            const text = 'Calories: '+ total.Calories + ', Fiber: ' + total.Fiber + ', Protein: ' + total.Protein + ', Sugars: ' + total.Sugars + ', Carbs: ' + total.Carbs + ', Fat: ' + total.Fat;
            document.getElementById("myTotalModalContent").innerHTML = text;
            console.log('add click', total);
          })
          $('body').on('click', '.reset' , (event) => {
            event.preventDefault();
            console.log('hello');
            $resetMyCount();
          })
          $('body').on('click', '.resetLocalStorage' , (event) => {
            event.preventDefault();
            console.log('hello');
            $resetMyTotal();
          })
          $(document).on('click', (event) => {
            if(event.target == $('.modal')){
              $('.modal').hide();
            }
          })
          ///////////////////////////////////////////
          ///////Modal Changing Variables////////////
          //////////////////////////////////////////
          let myBrandName = '';
          let myName = '';
          let servingsInput = 0;
          let myCalories = 0;
          let myFiber = 0;
          let myProtein = 0;
          let mySugars = 0;
          let myCarbs = 0;
          let myFat = 0;
          let myServings = 0;

          const $myCountModalContent = $('<div>').addClass('modal-content').attr('id','myCountModalContent').text('Calories: '+ (myCalories) + ', Fiber: ' + (myFiber) + ', Protein: ' + (myProtein) + ', Sugars: ' + (mySugars) + ', Carbs: ' + (myCarbs) + ', Fat: ' +(myFat) + ', Servings: ' + (myServings));
          const $myTotalModalContent = $('<div>').attr('id','myTotalModalContent').addClass('modal-content').text('Calories: '+ (myCalories) + ', Fiber: ' + (myFiber) + ', Protein: ' + (myProtein) + ', Sugars: ' + (mySugars) + ', Carbs: ' + (myCarbs) + ' Fat: ' +(myFat) + ', Servings: ' + (myServings));
          const $myRecentsModalContent = $('<div>').addClass('modal-content').text('Brand Name: ' + (myBrandName) + '. Name: ' + (myName));

          $myCountModal.append($myCountModalContent);
          $myTotalModal.append($myTotalModalContent);
          $myRecentsModal.append($myRecentsModalContent);
          //Access to API and creation of result table//
          let userInput;
          $('.search').on('submit', (event) =>{
            $('.middle').empty();
            event.preventDefault();
            userInput = ($('input[type= "text"]').val());
            console.log(userInput);
            nutritionDatabase();
          })
          //////////////////////////////////
          /////////ingredients//////////////
          //////////////////////////////////
          var nutritionDatabase = (function (){
            $.ajax({
              url:`https://api.nutritionix.com/v1_1/search/${userInput}?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Cnf_calories%2Cnf_protein%2Cnf_total_carbohydrate%2Cnf_total_fat%2Cnf_dietary_fiber%2Cnf_sugars&appId=94ed8c77&appKey=fad0beb74e75dbba7cbdd97d13f51d3f`,
              method: 'GET',
              datatype: 'application/json'
            }
          ).then((data) => {
            for(let i = 0; i < data.hits.length; i++){
              const $resultDiv = $('<div>').addClass('results').attr('isHidden' , 'true');
              const $unorderedListResult = $('<ul>').addClass('listForDesign');
              const $listBrandName = $('<li>').addClass('brandName').text(' Brand Name: ' + data.hits[i].fields.brand_name);
              const $listItemName = $('<li>').addClass('name').text('Name: ' + data.hits[i].fields.item_name);
              const $listItemCalories = $('<li>').addClass('calories').addClass('hide').text('Calories: ' + data.hits[i].fields.nf_calories);
              const $listItemFibers = $('<li>').addClass('fiber').addClass('hide').text('Fiber: ' + data.hits[i].fields.nf_dietary_fiber);
              const $listItemProtein = $('<li>').addClass('protein').addClass('hide').text('Protein: ' + data.hits[i].fields.nf_protein);
              const $listItemSugars = $('<li>').addClass('sugars').addClass('hide').text('Sugars: ' + data.hits[i].fields.nf_sugars);
              const $listItemCarbs = $('<li>').addClass('carbs').addClass('hide').text('Carbs: ' + data.hits[i].fields.nf_total_carbohydrate);
              const $listItemFat = $('<li>').addClass('fat').addClass('hide').text('Fat: ' + data.hits[i].fields.nf_total_fat);
              const $listItemServing = $('<li>').addClass('serving').addClass('hide').text('Serving: ' + data.hits[i].fields.nf_serving_size_qty);
              const $servingSize = $('<button>').addClass('servingSize').text('LOG');

              $('.middle').append($resultDiv);
              $resultDiv.append($unorderedListResult);
              $($unorderedListResult).append($listBrandName);
              $($unorderedListResult).append($listItemName);
              $($unorderedListResult).append($listItemCalories);
              $($unorderedListResult).append($listItemFibers);
              $($unorderedListResult).append($listItemProtein);
              $($unorderedListResult).append($listItemSugars);
              $($unorderedListResult).append($listItemCarbs);
              $($unorderedListResult).append($listItemFat);
              $($unorderedListResult).append($listItemServing);
              $($resultDiv).append($servingSize);
              // $($servingSize).append($servingSizeField);
              //////////add submissions to myModals////////////
              $servingSize.on('click', (event) => {
                event.preventDefault();
                myBrandName = data.hits[i].fields.brand_name;
                myName = data.hits[i].fields.item_name;
                myCalories += (data.hits[i].fields.nf_calories);
                myFiber += (data.hits[i].fields.nf_dietary_fiber);
                myProtein += (data.hits[i].fields.nf_protein);
                mySugars += (data.hits[i].fields.nf_sugars);
                myCarbs += (data.hits[i].fields.nf_total_carbohydrate);
                myFat += (data.hits[i].fields.nf_total_fat);
                myServings += (data.hits[i].fields.nf_serving_size_qty);
                $myCountModalContent.text('Calories: '+ (myCalories) + ', Fiber: ' + (myFiber) + ', Protein: ' + (myProtein) + ', Sugars: ' + (mySugars) + ', Carbs: ' + (myCarbs) + ', Fat: ' + (myFat) + ', Servings: ' + (myServings));
                $myRecentsModalContent.text('Brand Name: ' + myBrandName + '. Name: ' + myName);
                const currentLocalStorage = JSON.parse(localStorage.getItem('myCount'));
                console.log('This is from current local storage', currentLocalStorage);
                localStorage.setItem('myCount', JSON.stringify({
                  Calories: myCalories,
                  Fiber: myFiber,
                  Protein: myProtein,
                  Sugars: mySugars,
                  Carbs: myCarbs,
                  Fat: myFat,
                }))
              })
            }
          });
        });
        //////////////////////////////////
        ///Hide or Show Event Listener////
        //////////////////////////////////
        const $showMe = ((event) => {
          if($(event.currentTarget).attr('isHidden') == 'true'){
            $(event.currentTarget).attr('isHidden', 'false').children('ul').children('.hide').removeClass('hide').addClass('show');
          } else {
            $(event.currentTarget).attr('isHidden', 'true').children('ul').children('.show').removeClass('show').addClass('hide');
            //////////////////////event.propogation?
          }
        })
        $('body').on('click', '.results' , $showMe);
        //////////////////////////////////
        /////////infinite scroll//////////
        //////////////////////////////////
        ($,window,undefined) => {
          let InfiniteScroll = () => {
            this.initialize = () => {
              this.setUp();
            };
            this.setUp = () => {
              $(window).on(
                'scroll',
                this.scrollNow.bind(this)
              );
            };
            this.scrollNow = () => {
              let scrollTop = $(document).scrollTop();
              let windowHeight = $(window).height();
              let height = $(document).height() - windowHeight;
              let scrowllPercentage = (scrollTop/height);
              if(scrowllPercentage > 0.9){
                this.loadPage();
              };
            };
            this.loadPage = () => {
              nutritionDatabase();
            }
            this.initialize();
          }
          $document.ready(() => {
            new InfiniteScroll();
          })
        }; (jQuery, window);
      });
      //////////////////////////////////
      /////////Sticky Nav///////////////
      //////////////////////////////////
      const stickyNav = () => {
        if ($(window).scrollTop()) {
          $('#navBar').addClass("sticky")
        }else{
          $('#navBar').removeClass("sticky")
        }
      }
      $(window).on('scroll' , () => {
        stickyNav();
      })
