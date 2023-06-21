<template>
  <div >
    <b-card-group deck class="card-container-wrapper">
        <div class="vehicle" v-for="car in listVehicles" :key="car.vehicleCodeId">
            <b-card
            v-bind:img-src="car.images[0].replace('-1.jpg', '-1-l.jpg')"
            img-alt="Image"
            img-top
            tag="article"
            class="vehicle-item"
        >
        <div class="media-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 4H2V3h3v1zm10.93 0l.812 1.219A3.99 3.99 0 0020.07 7H22v13H2V7h3.93a3.99 3.99 0 003.328-1.781L10.07 4h5.86zM17 2H9L7.594 4.109A1.998 1.998 0 015.93 5H0v17h24V5h-3.93a1.998 1.998 0 01-1.664-.891L17 2zM6 10a1 1 0 10-2 0 1 1 0 002 0zm7 0c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2a5 5 0 10.001 10.001A5 5 0 0013 8z"></path></svg>
            <span title="Number of images">{{ car.images.length }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 16a2 2 0 01-2 2H2a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v8zm8-10l-6 4.223v3.554L24 18V6z"></path></svg>
            <span title="Number of images">{{ car.videoLink ? 1 : 0 }}</span>
            <span class="media-overlay-profile">{{ car.profile }}</span>
            
        </div>
        <!-- <b-card-img v-bind:src="car.images[0].replace('-1.jpg', '-1-l.jpg')"></b-card-img> -->
            <b-card-text class="vehicle-name">{{ car.fullDescription }}</b-card-text>
            <b-card-text class="vehicle-price">
                {{`${currencyFormatter(car.originalPrice, 0)} | ${currencyFormatter(car.finance.monthlyPrice, 2)} p.m. ~ ${car.finance.apr}% APR`  }}
            </b-card-text>
            <ul class="vehicle-features">
                <li>
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#262F33" fill-rule="evenodd"><path d="M14.836 10.878L9.121 5.144c-.114-.079.137.018 0-.01v-3.53c0-.334-.241-.763-.766-.763a.795.795 0 00-.812.763v4.264l-4.616 4.648a3.15 3.15 0 00.02 4.486l2.038 2.012a3.207 3.207 0 002.258.985 3.126 3.126 0 002.258-.905l5.335-5.371a.627.627 0 000-.845zM17.348 14.81l-.088-.081c-1.034-1.165-1.62-1.75-1.755-1.753-.135-.003-.728.581-1.777 1.753a.17.17 0 01-.087.081v.041c-.879.994-.85 2.432.065 3.396a2.43 2.43 0 001.8.753 2.43 2.43 0 001.776-.753c.923-.959.96-2.397.088-3.396l-.022-.04z"></path></g></svg>
                    <span>{{ car.exteriorColour }}</span>
                </li>
                <li>
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.972 9.29V4.824c0-.722.556-1.323 1.27-1.323s1.28.603 1.258 1.323v5.805c0 .722-.556 1.323-1.271 1.323h-2.821v3.226c0 .722-.556 1.323-1.271 1.323-.708 0-1.271-.594-1.271-1.323v-3.226H7.042v3.226c0 .718-.567 1.323-1.271 1.323-.708 0-1.271-.594-1.271-1.323V4.823c0-.718.567-1.323 1.271-1.323.708 0 1.271.594 1.271 1.323V9.29H8.88V4.823c0-.722.556-1.323 1.27-1.323.709 0 1.272.594 1.272 1.323V9.29h1.55z" fill="#262F33" fill-rule="nonzero"></path></svg>
                    <span>{{ car.transmission }}</span>
                </li>
                <li>
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.765 4H9.18a1.275 1.275 0 00-.84.315L3.39 8.57A1.1 1.1 0 003 9.4v4.361c.001.683.602 1.237 1.343 1.238h12.422c.681 0 1.234-.508 1.235-1.136V5.136C17.999 4.508 17.446 4 16.765 4zm-.53 5.481a.446.446 0 01-.45.442h-9.69a.45.45 0 01-.417-.28.437.437 0 01.111-.485L9.43 5.812a.454.454 0 01.301-.12h6.055c.248 0 .45.198.45.442v3.347z" fill="#262F33" fill-rule="evenodd"></path></svg>
                    <span>{{ car.doors }}</span>
                </li>
                <li>
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.995 6c-4.637 0-8.497 3.535-8.99 8.026a.878.878 0 00.873.974H18.1a.9.9 0 00.896-.99c-.45-4.484-4.31-8.01-9-8.01zm1.817 6.96c-.322.64-.965 1.04-1.769 1.04-1.125 0-2.01-.88-2.01-2 0-.72.403-1.44 1.046-1.76L14.063 8l-2.251 4.96z" fill="currentColor" fill-rule="evenodd"></path></svg>
                    <span>{{ car.odometerReading }} miles</span>
                </li>
                <li>
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.974 7.013H17a1 1 0 011 1v4.26a1 1 0 01-.686.95l-.825.273a4.62 4.62 0 00-2.392 1.824l-.823 1.235a1 1 0 01-.833.445H8.708a1 1 0 01-.948-.683l-.548-1.639a1 1 0 00-.949-.682H4a1 1 0 01-1-1v-1.987a1 1 0 011-1h2.65a1 1 0 00.6-.2l3.465-2.596a1 1 0 01.6-.2h1.662V5H11.48a.5.5 0 01-.5-.5V3.5a.5.5 0 01.5-.5h4.986a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1.493v2.013zm.996 2.984a1 1 0 00-1-1h-2.99a1 1 0 000 2h2.99a1 1 0 001-1z" fill="#262F33" fill-rule="evenodd"></path></svg>
                    <span>{{ car.engineSize }}</span>
                </li>
                <li>
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.778 6.728L15.49 4.48a.774.774 0 00-1.079 0 .74.74 0 000 1.06l2.065 2.028v5.682c0 .413-.342.75-.763.75a.758.758 0 01-.764-.75v-2.247a.758.758 0 00-.763-.75H12.95V2.75a.758.758 0 00-.764-.75h-8.66a.758.758 0 00-.763.75v12.748h-.456a.303.303 0 00-.307.3v.9c0 .166.135.302.307.302H13.409a.303.303 0 00.307-.301v-.9a.303.303 0 00-.307-.301h-.456v-3.746h.473v1.5c0 1.24 1.025 2.246 2.287 2.246S18 14.49 18 13.25V7.26a.722.722 0 00-.222-.532zM4.78 7.68V4.317A.31.31 0 015.088 4h5.488c.168 0 .306.141.306.317V7.68c0 .176-.135.32-.306.32H5.085a.314.314 0 01-.304-.32z" fill="#262F33" fill-rule="evenodd"></path></svg>
                    <span>{{ car.fuelType }}</span>
                </li>
            </ul>
            
            <div class="vehicle-footer">
                <b-card-text class="vehicle-location-group">
                {{ car.locationGroup[0].displayName }}
                </b-card-text>
            </div>
        </b-card>
        </div>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Card",
  methods: {
    ...mapActions(["loadVehicleList"]),
    currencyFormatter(value, precision) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 0,
            maximumFractionDigits: precision,
        });

        return formatter.format(value);
    }
  },
  computed: { ...mapGetters(['listVehicles', 'pagingDetails']) },
  watch: {
    pagingDetails: function(newVal, oldVal) {
        if (newVal && newVal != oldVal) {
            this.$emit('getPagingDetails', newVal);
        }
    }
  },
  created() {
    let  searchParams = {
        "pageNumber": 1,
        "pageSize": 24,
        "sortBy": "monthlypriceasc",
        "selectedFacetsFilterData": [
            {
                "field":"dealerships",
                "items":["bravoauto|"]
            },
            {
                "field":"stockType",
                "items":["used"]
            },
            {
                "field":"vehicleType",
                "items":["Car"]
            },
            {
                "field":"isoffer",
                "items":["false"]
            }
        ]
    }
    
    this.loadVehicleList(searchParams);
  }
};
</script>

<style>
.card-container-wrapper {
    display: grid;
    position: relative;
    gap: 20px;
    padding: 18px 0px 20px;
    margin-left: 0px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
@media (min-width: 769px) {
    .card-container-wrapper {
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
}
.vehicle {
    display: flex;
}
.vehicle-item {
    display: flex;
    text-decoration: none;
    background-color: var(--ALABASTER);
    transition: box-shadow 0.2s ease-in-out 0s;
}
.vehicle-name {
    color: #00a5e0;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    padding-bottom: 10px;
    margin: 0px;
}
.vehicle-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
}
.vehicle-location-group {
    font-size: 11px;
    color: #262f33;
    padding-top: 13px;
    border-top: 1px solid #e3e3e3;
}
.vehicle-price {
    font-size: 16px;
    font-weight: 600;
}
.vehicle-features {
    column-count: 2;
    gap: 10px;
    list-style: none;
    padding-left: 0px;
    margin: 0 0 50px 0;
    font-size: 11px;
}
.vehicle-features li {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 10px;
}
.vehicle-features span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.vehicle-features svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
}
.media-overlay {
    z-index: 10;
    position: absolute;
    display: flex;
    background: rgba(0,57,92,0.35);
    width: 100%;
    left: 0;
    color: #fff;
    margin-top: -37px;
}

.media-overlay svg {
    fill: currentcolor;
    width: 16px;
    height: 16px;
    margin-left: 8px;
    margin-top: 4px;
    margin-right: 1px;
}
.media-overlay span {
    font-size: 12px;
    margin-left: 5px;
    margin-top: 2px;
}
.media-overlay-profile {
    right: 0;
    margin-right: 10px;
    position: absolute;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
</style>
