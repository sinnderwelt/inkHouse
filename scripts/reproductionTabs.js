let reproductionTabs = document.querySelectorAll('.reproductionBtn');
let reproductionItem = document.querySelectorAll('.reproductionCountryItem');

   reproductionTabs.forEach(function(item) {

    item.addEventListener('click', function(){

        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentItem = document.querySelector(tabId);

        console.log(currentItem);
        console.log(tabId);

        if(!currentBtn.classList.contains('active')) {
            reproductionTabs.forEach(function(item){
                item.classList.remove('active');
            });

            reproductionItem.forEach(function(item){
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentItem.classList.add('active');
        }

    });

   });

   document.querySelector('.reproductionBtn:nth-child(1)').click();