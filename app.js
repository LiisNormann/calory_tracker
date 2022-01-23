// Storage Controller (in the making)

//Item Controller
const ItemCtrl = (function() {
    //Item constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    //Data structure
    const data = {
        items: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 1, name: 'Cookie', calories: 400},
            {id: 2, name: 'Eggs', calories: 300}
        ],
        total: 0,
    }

    //makes data public, otherwise it won't be displayed
    return {
        //makes item elements public
        getItems: function() {
            return data.items
        },
        logData: function() {
            return data
        }
    }
})();

//UI Controller
const UICtrl = (function() {
    //UI selectors (all relevant selectors to be used in the app)
    const UISelectors = {
        itemList: '#item-list'
    }
    
    return {
        populateItemList: function(items) {
            //create html content
            let html = '';
            
            //parse data and create list items html
            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="fas fa-pencil-alt"></i>
                </a>
                </li>`
            });

            //insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    }
})();

//App Controller (responsible for the app startup)
const App = (function(ItemCtrl, UICtrl) {
    //to make the info public
    return {
        init: function() {
            //fetch items from data structure
            const items = ItemCtrl.getItems();
            //populate items list
            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl, UICtrl);

//Initialize app
App.init();
