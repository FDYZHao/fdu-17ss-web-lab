const countries = [
            {name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
            {name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
            {name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
            {name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
        ];
	window.onload=function(){
        let div0 = document.getElementsByClassName("flex-container justify")[0];
        for (let i in countries) {
            div0.innerHTML=div0.innerHTML+'<div class="item"><h2>'+countries[i].name+'</h2><h3>'+countries[i].continent+'</h3><div class="inner-box"><h2 class="cities">Cities</h2><ul></ul></div><div class="inner-box"><h2 class="photos">Popular Photos</h2><div class="photoItem"></div></div><div><button>Visit</button></div>'
            for(let j in countries[i].cities){
                document.getElementsByTagName('ul')[i].innerHTML+='<li>'+countries[i].cities[j]+'</li>';
            }
            for (const k in countries[i].photos){
                document.getElementsByClassName('photoItem')[i].innerHTML+='<img class="photo" src="images/'+countries[i].photos[k]+'">';
            }
        }
}