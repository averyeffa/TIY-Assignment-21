import MultiItemView from "./views/views-multi.js";
import SingleItemView from "./views/views-single.js";
import { EtsyCollection, EtsyModel} from './models/models.js'
import $ from 'jquery';
import Backbone from 'backbone';

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},




  routes : {
		'details/:detailsId' : 'showSingleItem',
		'' : 'showAllItems'
	},




  showAllItems: function(){

		let etsyCollection = new EtsyCollection()
		etsyCollection.fetch().then(function(serverRes){
			let itemsModelsList = etsyCollection.models
			// console.log(etsyCollection);

			let viewInstance = new MultiItemView()
			viewInstance.render(itemsModelsList, 'root', {})
    })
  },

  showSingleItem: function(listingId){

    let singleItemModel = new EtsyModel(listingId)
    singleItemModel.fetch().then(function(){
			// console.log(singleItemModel);

      let viewInstance = new SingleItemView()
      viewInstance.render(singleItemModel)
		})
	}
})

const myApp = new AppRouter()
