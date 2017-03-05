import Backbone from 'backbone';


const SingleItemView = Backbone.View.extend({
  el : '.page-content',

  buildHtmlTemplate: function(itemsModel){
    return`
          <div class="listing-left">
            <img src="${itemsModel.get('Images')[0].url_fullxfull}">
            <h4>Item Details</h4>
            <p>${itemsModel.get('description')}</p>
          </div>
          <div class="listing-right">
          <h1>${itemsModel.get('title')}</h1>
          <p>${itemsModel.get('price')}</p>
          <button class="btn listing-question" type="button">Ask a question</button>
          <button class="btn listing-buy" type="button">Buy it now</button>
          <button class="btn listing-cart" type="button">Add to cart</button>
            <h4>Materials</h4>
            <p>${itemsModel.get('materials')}</p>
            <h4>Shipping</h4>
            <p>Destination United States</p>
            <p>Cost $10000</p>
      </div>`
  },

	render: function(info){
		this.el.innerHTML = this.buildHtmlTemplate(info)
	}
})

export default SingleItemView
