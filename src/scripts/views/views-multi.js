import Backbone from 'backbone';

const MultiItemView = Backbone.View.extend({
  el: '.page-content',

  events: {
    "click .thumbnail": 'handleSingleItem'
  },

  handleSingleItem: function(evt){
    let clickedItemId = evt.currentTarget
    // console.log(clickedItemId)
    window.location.hash = `details/${clickedItemId.dataset.listingid}`
  },

  buildHtmlTemplate: function(allItemsModel){
    return `
      <div class="left">
        <div class="checkbox">
          <label>
            <h5><strong>Item Posted</h5></strong>
            <input type="checkbox" name="lastweek" value="">
            Posted in Last Week
          </label>
        </div>
        <div class="checkbox">
          <label>
            <h5><strong>Price (&dollar;)</h5></strong>
            <ul>
            <li><input type="checkbox" name="lessthan" value="">
            Any price</li>
            <li><input type="checkbox" name="lessthan" value="">
            Under &dollar;25</li>
            <li><input type="checkbox" name="lessthan" value="">
            &dollar;25 to &dollar;50</li>
            <li><input type="checkbox" name="lessthan" value="">
            &dollar;50 to &dollar;100</li>
            <li><input type="checkbox" name="lessthan" value="">
            Over &dollar;100</li>
            </ul>
          </label>
        </div>
        <div class="checkbox">
          <label>
            <h5><strong>Item Images</h5></strong>
            <input type="checkbox" name="haspictures" value="">
            Has 3 Pictures
          </label>
        </div>
      </div>
      </div>

      <div class="right">
       <div class="row">
            ${allItemsModel.map(function(itemModel, i){
              // console.log(itemModel)
              let imageSrc = itemModel.get('Images')[0].url_fullxfull;
              return `
                <div class="col-xs-6 col-md-4">
                  <div class="thumbnail "data-listingid="${itemModel.get('listing_id')}">
                    <img src="${imageSrc}">
                    <div class="caption">
                      <h6>${itemModel.get('title')}</h6>
                      <p>${itemModel.get('Shop').shop_name}</p>
                      <p>$ ${itemModel.get('price')}</p>
                    </div>
                  </div>
                </div>`
              }).join('')
            }
          </div>
      </div>`
  },

  render: function(info){
		this.el.innerHTML = this.buildHtmlTemplate(info)
  }
})

export default MultiItemView
