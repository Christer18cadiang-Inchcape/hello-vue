import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  vehicles: [],
  pagingDetails: {},
};
const getters = {
  listVehicles: (state) => state.vehicles,
  pagingDetails: (state) => state.pagingDetails,
};

const mutations = {
  setVehicles: (state, vehicles) =>
    (state.vehicles = state.vehicles.concat(vehicles)),
  setPagingDetails: (state, pageDetails) => (state.pagingDetails = pageDetails),
};

const actions = {
  async loadVehicleList({ commit }, searchParams) {
    let params = searchParams
      ? searchParams
      : {
          pageNumber: 1,
          pageSize: 24,
          sortBy: "monthlypriceasc",
          selectedFacetsFilterData: [
            { field: "dealerships", items: ["bravoauto|"] },
            { field: "stockType", items: ["used"] },
            { field: "vehicleType", items: ["Car"] },
            { field: "isoffer", items: ["false"] },
          ],
        };
    const response = await axios.post(
      "https://prod.inchcape.co.uk/stock-search-service-api/stock/search",
      searchParams
      // {"pageNumber":1,"pageSize":24,"sortBy":"monthlypriceasc","selectedFacetsFilterData":[{"field":"dealerships","items":["bravoauto|"]},{"field":"stockType","items":["used"]},{"field":"vehicleType","items":["Car"]},{"field":"isoffer","items":["false"]}]}
    );
    console.log(response);

    commit("setVehicles", response.data.results);
    commit("setPagingDetails", response.data.pager);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
