<template>
  <div class="home">
    <VehicleList ref="vehicleList" @getPagingDetails="onGetPagingDetails" />
    <div class="paging-container">
      <b-button v-if="pagingDetails.hasNext" pill variant="outline-secondary" class="btn-load"
        @click="onLoadClicked"
      >Load More</b-button>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import VehicleList from '@/components/VehicleList.vue'

export default {
  name: 'HomeView',
  components: {
    VehicleList
  },
  methods: {
    onGetPagingDetails (pagingDetails) {
      this.pagingDetails = pagingDetails;
    },
    onLoadClicked: function(e) {
        if (this.pagingDetails) {
          this.searhParams.pageNumber += 1
          this.$refs.vehicleList.loadVehicleList(this.searhParams);
        }
    }
  },
  data() {
    return {
      pagingDetails: { },
      searhParams: {
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
    }
  }
}
</script>
<style scoped>
  .home {
    width: 100%;
    max-width: 1650px;
    min-height: 100vh;
    padding-right: 20px;
    padding-left: 20px;
    margin-right: auto;
    margin-left: auto;
  }
  .paging-container {
    padding: 10px;
  }
  .btn-load {
    margin: 10px;
    color: #00a5e0;
    line-height: 1.6;
    display: grid;
    margin: auto;
}

</style>
