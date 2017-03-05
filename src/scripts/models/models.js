import Backbone from 'backbone';


export const EtsyModel = Backbone.Model.extend({
  initialize: function(listingId){
		this.url = `https://openapi.etsy.com/v2/listings/${listingId}.js?api_key=64823dkeswdeveca6u68gtp9&includes=Images,Shop&callback=?`
	},

  parse: function(serverRes){
      if (typeof serverRes.results !== 'undefined') {
        return serverRes.results[0]
      } else {
        return serverRes
      }
  }
})

export const EtsyCollection = Backbone.Collection.extend({
	initialize: function(){
	},

	parse: function(serverRes){
    return serverRes.results
	},

	url: `https://openapi.etsy.com/v2/listings/active.js?api_key=64823dkeswdeveca6u68gtp9&includes=Images,Shop&callback=?`,
	model: EtsyModel
})
