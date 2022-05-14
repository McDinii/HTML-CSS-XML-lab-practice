    const furniture = document.querySelector('.furniture_body');
    const furnitureItems = document.querySelector('.furniture_items');
    const furnitureColumn = document.querySelectorAll('.furniture_column');

    const speed = furniture.dataset.speed;

    let positionX = 0;
    let coordXprocent = 0;

    function setMouseGalleryStyle(){
        let furnitureItemsWidth = 0;
        furnitureColumn.forEach(element =>{
            furnitureItemsWidth += element.offsetWidth;
        });

        const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
        const distX = Math.floor(coordXprocent - positionX);

        positionX = positionX + (distX * speed);
        let position = furnitureDifferent/200*positionX;

        furnitureItems.style.cssText = `transform: translate3d(${-position}px,0,0);`;
        
        if(Math.abs(distX)>0){
            requestAnimationFrame(setMouseGalleryStyle);
        }
        else{
            furniture.classList.remove("init");
        }
    }
    furniture.addEventListener('mousemove', function(e){
        const furnitureWidth = furniture.offsetWidth;
        const coordX = e.pageX - furnitureWidth/2;
        coordXprocent = coordX/furnitureWidth*200;
        if(!furniture.classList.contains("init")){
            requestAnimationFrame(setMouseGalleryStyle);
            furniture.classList.add("init");
        }
    });