<template>
     <section class="contacts">
        <div class="contacts-info">
                <div class="contacts-info__header">
                    <img src="../assets/home-images/flagsvg.png"/>
                    <span class="contacts-info__header-text">Контакты</span>
                </div>
                <div class="contacts-info__data">
                    <div class="contacts-info__data-block">
                        <div>e-mail:</div>
                        <div class="contacts-info__data-email"> {{contactEmail}} </div>
                    </div>
                    <div class="contacts-info__data-block">
                        <div>адрес:</div>
                        <div class="contacts-info__data-address"> {{address}} </div>
                    </div>
                </div>
                <button class="contacts-info__white-btn">напишите нам</button>
        </div>
        <div id="map"></div>
        <script type="application/javascript">
            // Initialize and add the map
            function initMap() {
                // The location of Uluru
                var uluru = {lat: 59.938723, lng: 30.323042};    
                // The map, centered at Uluru
                var map = new google.maps.Map(
                    document.getElementById('map'), {zoom: 16, center: uluru});
                // The marker, positioned at Uluru
                var marker = new google.maps.Marker({position: uluru, map: map});
            }
        </script>
        <script type="application/javascript" async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuy1AZliJQGZRljvHLHsKrlgIhrV2JBwA&callback=initMap">
        </script>
     </section>
</template>

<script>
export default {
    name: "ContactsSection",
    data(){
        return {
            contactEmail: "info@mimimishkashop.ru",
            address: "г. Санкт-Петербург ул. большая Конюшення д. 19/8 офис 101",
        }
    }
}
</script>

<style scoped>

.contacts {
    display: flex;
    width: 100%;
}

.contacts-info {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 25px 25px 15px 0;
}

.contacts-info__header {
    display: flex;
    align-items: center;
}

.contacts-info__header-text {
    font-size: var(--text-size__large);
    font-weight: bold;
    margin-left: 50px; 
}

.contacts-info__data {
    margin-left: 100px; 
    margin-top: 50px; 
}

.contacts-info__data-email {
    margin-left: 25px; 
    border-bottom: 1px solid aquamarine;
    padding-bottom: 2px; 
}

.contacts-info__data-address {
    margin-left: 25px;
    line-height: var(--line-height__paragraph);
}

.contacts-info__data-block {
    display: flex;
    margin-bottom: 15px; 
}

.contacts-info__white-btn {
    padding: 10px;
    margin: 25px auto 0 auto;
    text-transform: uppercase;
    font-weight: bold;
    background-color: transparent;
    border: none;
}

#map {
  width: 50%;  /* The width is the width of the web page */
 }


</style>

